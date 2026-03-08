# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Moodle Embed (iframe)

You can embed the deployed app directly inside Moodle using an iframe.

```html
<div style="max-width:1200px;margin:0 auto;">
  <iframe
    src="https://YOUR-APP-URL.netlify.app"
    width="100%"
    height="900"
    style="border:1px solid #ddd;border-radius:12px;background:#fff;"
    loading="lazy"
    allowfullscreen
  ></iframe>

  <p style="margin-top:10px;">
    Trouble loading?
    <a href="https://YOUR-APP-URL.netlify.app" target="_blank" rel="noopener noreferrer">
      Open in a new tab
    </a>.
  </p>
</div>
```

Notes:
- Moodle must allow external iframe content.
- Your host must allow framing (no blocking `X-Frame-Options` / restrictive `frame-ancestors`).
- Keep the fallback "Open in a new tab" link for students.
