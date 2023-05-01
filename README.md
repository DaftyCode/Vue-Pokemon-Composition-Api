# pokemon-composition

## Instalar ultima versión de node 

comprobar con node -v

## Instalamos visual studio

Y añadimos estas extensiones:

Vue Volar extension Pack: https://marketplace.visualstudio.com/items?itemName=MisterJ.vue-volar-extention-pack
-	Vue Discovery:
https://marketplace.visualstudio.com/items?itemName=Maantje.vue-discovery
-	IntelliCode:
https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode
-	npm Intellisense:
https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
-	Vue VSCode Snippets:
https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets

## Iniciamos el proyecto

```sh
npm init vue@latest
```

seguimos todos los pasos

## Añadimos Sass para trabajar con scss

```sh
npm add -D sass
```

## Meter dentro de carpeta .vscode el settings.json con esto

```sh
{
  "editor.rulers": [120],
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": ["source.fixAll.eslint", "source.fixAll.markdownlint"],
  "eslint.alwaysShowStatus": true,
  "eslint.validate": ["typescript", "javascript", "html"],
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "vue3snippets.enable-compile-vue-file-on-did-save-code": true
}
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
