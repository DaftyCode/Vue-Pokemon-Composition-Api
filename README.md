# pokemon-composition

## Instalar ultima versión de node

comprobar con node -v

## Instalamos visual studio

[VSCode](https://code.visualstudio.com/)

## Añadimos extensiones

Y añadimos estas extensiones:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode)
- [Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)

## Iniciamos el proyecto

```sh
npm create vue@latest
```

seguimos todos los pasos

## Añadimos Sass para trabajar con scss

```sh
npm i sass sass-loader -D
```

## Meter dentro de carpeta .vscode el settings.json con esto

```sh
{
  "editor.rulers": [120],
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": true
  },
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
