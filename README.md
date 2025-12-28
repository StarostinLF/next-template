# Шаблон для проекта на `Next.js` + `TypeScript` + `Tailwind CSS`

## Стек технологий

- `Next.js`: fullstack `React`-фреймворк для создания веб-приложений
- `TypeScript`: расширение `JavaScript`, добавляющее типизацию кода для безопасности разработки
- `Sass (SCSS)`: препроцессор `CSS`, добавляющий возможности удобного написания стилей при разработке
- `Tailwind CSS`: `CSS`-фреймворк, эффективно стилизующий вёрстку через готовые и гибкие `CSS`-классы
- `ESlint`: линтер и форматировщик `JSX`/`TSX` кода
- `Stylelint`: линтер для стилей

**Примечание**: для более эффективной работы с `Tailwind CSS` в `Visual Studio Code` необходимо установить и настроить расширение [`Tailwind CSS IntelliSense`](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), следуя инструкции установки.

## Структура проекта

- [`app/`](app): папка для хранения страниц и файлов с метаданными
  - [`app/(pages)/`](app/(pages)): папка для хранения страниц
  - [`app/api/`](app/api): папка для серверных `API`-запросов `Route Handlers`
  - [`app/components/`](app/components): папка для хранения компонентов
  - [`app/styles/`](app/styles): папка для хранения стилей
    - [`app/styles/config/`](app/styles/config): шрифты, миксины, `SCSS`-переменные и прочие файлы стилей
    - [`app/styles/globals.scss`](app/styles/globals.scss): глобальные стили веб-приложения
    - [`app/styles/tailwind.css`](app/styles/tailwind.css): пользовательские стили `Tailwind CSS`
  - [`app/layout.tsx`](app/layout.tsx): корневой лейаут
  - [`app/manifest.ts`](app/manifest.ts): файл для генерации `manifest` для `SEO`
  - [`app/page.tsx`](app/page.tsx): корневая страница
  - [`app/robots.ts`](app/robots.ts): файл для `SEO`-роботов
  - [`app/sitemap.ts`](app/sitemap.ts): файл для генерации `sitemap` для `SEO`
- [`lib/`](lib): папка для хранения библиотек и утилит
- [`public/`](public): папка для статических файлов, которые будут использоваться в веб-приложении и доступны через `URL`
- [`.gitignore`](.gitignore): файл для указания файлов и папок, которые должны быть проигнорированы `Git`
- [`.stylelintignore`](.stylelintignore): файл для указания файлов и папок, которые должны быть проигнорированы `Stylelint`
- [`eslint.config.mjs`](eslint.config.mjs): определяет правила и настройки для `ESlint`
- [`next.config.ts`](next.config.ts): файл конфигурации для `Next.js`
- [`package.json`](package.json): информация о проекте, список зависимостей и скрипты для выполнения задач
- [`postcss.config.mjs`](postcss.config.mjs): конфигурационный файл для `PostCSS`
- [`prettier.config.mjs`](prettier.config.mjs): конфигурационный файл для `Prettier`
- [`proxy.ts`](proxy.ts): файл для настройки прокси-сервера в разработке
- [`stylelint.config.mjs`](stylelint.config.mjs): конфигурационный файл для `Stylelint`
- [`tsconfig.json`](tsconfig.json): конфигурационный файл для `TypeScript`

## Скрипты

### Установка проекта

```bash
npm i
```

### Запуск локального сервера для разработки

```bash
npm run dev
```

### Запуск линтеров кода и стилей

```bash
npm run lint
```

### Сборка проекта для продакшена

```bash
npm run build
```

### Запуск сервера для продакшена

```bash
npm start
```
