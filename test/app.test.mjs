/* eslint-disable no-unused-expressions */
import { core } from '@kalisio/kdk/test.client.js'

const suite = 'app'

describe(suite, () => {
  let runner
  let page
  const user = {
    email: 'kalisio@kalisio.xyz',
    password: 'Pass;word1'
  }

  before(async () => {
    runner = new core.Runner(suite, {
      appName: 'teams',
      browser: {
        args: ['--lang=fr'],
        slowMo: 1
      }
    })
    page = await runner.start()
  })

  it('login', async () => {
    await core.login(page, user)
  })

  it('logout', async () => {
    await core.logout(page)
  })

  after(async () => {
    await runner.stop()
  })
})
