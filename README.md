# Шаблон для проекта на `Next.js` + `TypeScript` + `Tailwind CSS`

## Стек технологий

- `Next.js`: full-stack `React`-фреймворк для создания веб-приложений;
- `TypeScript`: расширение `JavaScript`, добавляющее типизацию кода для безопасности разработки;
- `Sass (SCSS)`: препроцессор `CSS`, добавляющий возможности удобного написания стилей при разработке;
- `Tailwind CSS`: `CSS`-фреймворк, эффективно стилизующий вёрстку через готовые и гибкие `CSS`-классы;
- `Redux Toolkit`: тулсет для эффективного управления клиентским состоянием веб-приложения на базе `Redux`;
- `ESlint`: линтер и форматировщик `JSX`/`TSX` кода;
- `Stylelint`: линтер для стилей;
- `Husky`: инструмент для управления `Git`-хуками;
- `Commitizen`: инструмент для создания согласованных коммитов.

**Примечание**: для более эффективной работы с `Tailwind CSS` в `Visual Studio Code` необходимо установить и настроить расширение [`Tailwind CSS IntelliSense`](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), следуя инструкции.

## Структура проекта

- [`.husky`](.husky): папка для хранения хуков `Husky`, помогающие автоматизировать задачи при работе с `Git`;
- [`app/`](app): папка для хранения страниц и файлов с метаданными;
  - [`app/(components)/`](<app/(components)>): папка для хранения компонентов;
  - [`app/(pages)/`](<app/(pages)>): папка для хранения страниц;
  - [`app/api/`](app/api): папка для серверных `API`-запросов `Route Handlers`;
  - [`app/styles/`](app/styles): папка для хранения стилей;
    - [`app/styles/config/`](app/styles/config): шрифты, миксины, `SCSS`-переменные и прочие файлы стилей;
    - [`app/styles/globals.scss`](app/styles/globals.scss): глобальные стили веб-приложения;
    - [`app/styles/tailwind.css`](app/styles/tailwind.css): пользовательские стили `Tailwind CSS`.
  - [`app/layout.tsx`](app/layout.tsx): корневой лейаут;
  - [`app/manifest.ts`](app/manifest.ts): файл для генерации `manifest` для `SEO`;
  - [`app/page.tsx`](app/page.tsx): корневая страница;
  - [`app/robots.ts`](app/robots.ts): файл для `SEO`-роботов;
  - [`app/sitemap.ts`](app/sitemap.ts): файл для генерации `sitemap` для `SEO`;
  - [`app/StoreProvider.tsx`](app/StoreProvider.tsx): обёртка `Redux`-хранилища для веб-приложения.
- [`lib/`](lib): папка для хранения библиотек и утилит;
- [`public/`](public): папка для статических файлов, которые будут использоваться в веб-приложении и доступны через `URL`;
- [`.gitignore`](.gitignore): файл для указания файлов и папок, которые должны быть проигнорированы `Git`;
- [`.stylelintignore`](.stylelintignore): файл для указания файлов и папок, которые должны быть проигнорированы `Stylelint`;
- [`eslint.config.mjs`](eslint.config.mjs): определяет правила и настройки для `ESlint`;
- [`lint-staged.config.mjs`](lint-staged.config.mjs): файл конфигурации для `lint-staged`;
- [`next.config.ts`](next.config.ts): файл конфигурации для `Next.js`;
- [`package.json`](package.json): информация о проекте, список зависимостей и скрипты для выполнения задач;
- [`postcss.config.mjs`](postcss.config.mjs): Конфигурационный файл для `PostCSS`;
- [`stylelint.config.mjs`](stylelint.config.mjs): конфигурационный файл для `Stylelint`;
- [`tsconfig.json`](tsconfig.json): конфигурационный файл для `TypeScript`.

## Скрипты

### Установка проекта

```bash
npm i
```

### Запуск локального сервера для разработки

```bash
npm run start:dev
```

### Запуск линтеров (можно и по отдельности)

```bash
npm run check
```

### Оформление `Git`-коммитов

```bash
npm run commit
```

### Сборка проекта для продакшена

```bash
npm run build
```

### Сборка проекта вместе с запуском локального сервера в продакшене

```bash
npm run start:prod
```