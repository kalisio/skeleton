# Development tips

## Generating service account tokens

If you'd like a third-party application to rely on the API of your application without authenticating using a user/password you can generate an access token with a fixed expiration date to be used as an API key.

### Personal access token

If your API needs a user ID to work as expected first register a user as usual. Then, using your application secret and a [JWT library](https://jwt.io/), issue a JWT with a payload matching the configuration options of your application regarding audience (i.e. domain), issuer and the user ID in the `sub` claim if any, e.g.:
```json
{
  "aud": "kano.kargo.kalisio.xyz",
  "iss": "kalisio",
  "exp": 1552402010,
  "sub": "5bc5b166beb4648d3cd79327"
}
```

::: tip
In local development environment `aud=kalisio`.
:::

### Impersonated access token

If you don't want to rely on an existing user with the appropriate permissions you can create a stateless token thant directly includes it, the payload of your token will be used as a virtual user object. For instance, if your app rely on a `permissions` field to compute user abilities you can provide a token like this:
```json
{
  "aud": "kano.kargo.kalisio.xyz",
  "iss": "kalisio",
  "exp": 1552402010,
  "sub": "myapp",
  "permissions": "superadmin"
}
```

In this case the `sub` claim is not used internally and can be used for instance to identify the owner of the token.

::: tip
In local development environment `aud=kalisio`.
:::

## Running multiple applications side-by-side

For instance, as Kano depends for some features on a running Weacast API you will need to run both on your local development environment. If your application also uses replication you will need to launch two instances in parallel. The problem is that by default all our apps uses the `8081` port for server and `8080` port for client in development mode, generating a port conflict. Similarly the Node.js debugger uses by default the `9229` port.

You should run the first server by defining eg. `PORT=8082` (to avoid port conflict). If single-sign-on is expected to work, define also `APP_SECRET=same value as in second application configuration` as environment variables. Then execute the `yarn dev:replica` command (will setup the Node.js debugger to use the `9229` port to avoid port conflict). Last, you can launch the second server/client as usual.

::: tip
You usually don't need the client application but only the API on the replica but if required you can launch another client similarly e.g. by setting `CLIENT_PORT=8083`.
:::

::: tip
If you need more than two side-by-side applications then use set [NODE_OPTIONS](https://nodejs.org/api/cli.html#cli_node_options_options) environment variable before launching each one, e.g. `NODE_OPTIONS='--inspect-port=9230'`.
:::

### Application instances synchronization

If your application is not fully stateless or requires real-time events to be dispatched to clients you will also need to synchronize them using [feathers-sync](https://github.com/feathersjs-ecosystem/feathers-sync). We previously relied on the [mubsub](https://github.com/scttnlsn/mubsub) adapter because as we already use MongoDB it did not require any additional service to be deployed.

Unfortunately it has been [deprecated](https://github.com/feathersjs-ecosystem/feathers-sync/pull/135). As a consequence we now rely on the [Redis](https://redis.io/) adapter. For development you can easily run a Redis server using Docker:
```bash
// Bind it to your prefered port
docker run -d --rm --name redis -p 6300:6379 redis:5
```

You will need to play with the different options presented above to avoid port conflicts and define as well how your app connects to the Redis instance using the `REDIS_URL` environment variable like `redis://127.0.0.1:6300`. You can see the subscriber apps and exchanged messages by connecting to the Redis container:
```bash
// Bind it to your prefered port
docker exec -it redis bash
> redis-cli
// Number of subscribers
> PUBSUB NUMSUB feathers-sync
1) "feathers-sync"
2) (integer) 2
// Monitor messages
> SUBSCRIBE feathers-sync
Reading messages...
```

## Development domains

Some development tasks like OAuth2 authentication have strict security concerns so that you cannot use `localhost`, non-standard ports or need to enforce HTTPS in all URLs. Here is how to setup a "fake" domain on your host.

Let's say we have our app running on `localhost:8080` in HTTP or `localhost:8083` in HTTPS. First, edit the `hosts` file (*/etc/hosts* under Linux or *C:\Windows\System32\drivers\etc\hosts* under Windows) and add this line to redirect the domain to local host:
```
127.0.0.1 test.airbusoidc.com
```

Then, since the `hosts` file does not allow to manage port redirections we need to do so using the operating system network tools.

### Windows

To see what is currently running:
```bash
netstat -a -n -p TCP | grep "LISTENING"
```

To add port redirection for HTTP:
```bash
netsh interface portproxy add v4tov4 listenport=80 listenaddress=127.0.0.1 connectport=8080 connectaddress=127.0.0.1
```

To add port redirection for HTTPS:
```bash
netsh interface portproxy add v4tov4 listenport=443 listenaddress=127.0.0.1 connectport=8083 connectaddress=127.0.0.1
```

To see running proxied port:
```bash
netsh interface portproxy show v4tov4
```

To see remove proxied port:
```bash
netsh interface portproxy delete v4tov4 listenport=80 listenaddress=127.0.0.1
```

### Linux

First enable port redirection:
```bash
echo "1" > /proc/sys/net/ipv4/ip_forward
```

Then add port redirect:
```bash
iptables -t nat -A PREROUTING -s 127.0.0.1 -p tcp --dport 80 -j REDIRECT --to 8080`
iptables -t nat -A OUTPUT -s 127.0.0.1 -p tcp --dport 80 -j REDIRECT --to 8080`
```

To remove simply replace in the previous command the `-D` switch instead of the `-A` switch.
