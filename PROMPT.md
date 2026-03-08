# Prompt Notes

## Moodle Embed Requirement
When providing final deployment instructions, include this exact Moodle iframe snippet and fallback link:

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

Also mention:
- Moodle must permit external iframes.
- Hosting must allow framing (`X-Frame-Options` / CSP `frame-ancestors`).
