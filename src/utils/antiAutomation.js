const BLOCKED_AGENTS = [
  "HeadlessChrome",
  "Puppeteer",
  "Playwright",
  "Selenium",
  "PhantomJS",
  "SlimerJS",
  "Nightmare",
  "CasperJS",
  "webdriver",
  "bot",
  "crawler",
  "spider",
  "ChatGPT-User",
  "GPTBot",
  "Claude-Web",
  "Perplexity",
  "Bytespider",
  "CCBot",
  "anthropic-ai",
  "Google-Extended",
  "cohere-ai",
  "Applebot-Extended",
];

export function isBlockedAgent() {
  const ua = navigator.userAgent.toLowerCase();
  return BLOCKED_AGENTS.some((agent) => ua.includes(agent.toLowerCase()));
}

export function isAutomated() {
  const checks = [
    navigator.webdriver,
    !navigator.languages || navigator.languages.length === 0,
    !window.chrome && /Chrome/.test(navigator.userAgent),
    /HeadlessChrome/.test(navigator.userAgent),
    window.outerWidth === 0 && window.outerHeight === 0,
    !navigator.plugins || navigator.plugins.length === 0,
    typeof window.callPhantom === "function",
    typeof window._phantom === "object",
  ];
  return checks.some(Boolean);
}

export function shouldBlock() {
  return isBlockedAgent() || isAutomated();
}
