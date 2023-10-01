# Folder Structure

```bash
|- api/
  |-- config/
  |-- src/
  |-- test/
  |-- package.json
|- config/
|- docs/
|- public/
|- src/
  |-- assets/
  |-- boot/
  |-- components/
  |-- i18n/
  |-- router/
  |-- schemas/
  |-- services/
  |-- tours/
  |-- App.vue
  |-- index.template.html
|- src-pwa/
|- test/
|- package.json
```

## Server-Side

| Directory | Contents |
| --- | --- |
| `config` | Configuration files are stored in this directory. These files define various parameters and options for the API, making it customizable based on the environment. More information [here](https://kalisio.github.io/kApp/reference/configuration.html) |
| `src` | API sources are located in this directory. This is where the API source code is developed. |
| `test` | Unit and integration tests for the API are stored here. More information [here](./development/test.md) |

## Client-Side

| Directory | Contents |
| --- | --- |
| `config` | Configuration files for the client-side application are stored here. More information [here](https://kalisio.github.io/kApp/reference/configuration.html) |
| `docs` | The application documentation is generated using VitePress. You can refer to the [vitepress documentation](https://vitepress.dev/guide/getting-started#file-structure) for more details about its structure. |
| `public` | The public directory contains the application's logos. When the application is launched, generic kdk icons are copied to `public/icons/kdk`. |
| `src/assets/` | This directory can contain static resources such as images, icons, and more. |
| `src/boot/` | The boot directory contains the application's startup code. This is where you can initialize global KDK components, set global properties, and perform other configuration tasks when the application starts. |
| `src/components/` | Components of the application are stored here. |
| `src/i18n/` | The i18n directory is used for managing translation and localization of the application. By default, we manage English and French, but you can add translation files for other languages. |
| `src/router/` | Application routing configuration is managed in this directory. It defines URLs and associated views, enabling navigation within the application. |
| `src/schemas/` | This directory contains data schemas used for creating forms and validating user-entered data. |
| `src/tours/` | The tours directory contains interactive user guides. When the application is launched, generic kdk tours are copied to this directory. |
| `src/App.vue` | The main component of the application. It represents the top-level user interface of the application, encompassing other components. |
| `src-pwa/` | This directory manages the application's PWA service workers. |
| `test/` | Unit and integration tests for the client-side application are stored here. More information [here](./development/test.md) |
