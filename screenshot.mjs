import puppeteer from '/workspace/node_modules/@blitz/mcp-server-browser/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/chromium',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  headless: 'new',
});

const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900 });

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));

const base = '/tmp/cc-agent/67145663/project';

// Hero section
await page.screenshot({ path: `${base}/hero.png`, fullPage: false });
console.log('Hero captured');

// Overview section
await page.evaluate(() => window.scrollTo(0, 900));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${base}/overview.png`, fullPage: false });
console.log('Overview captured');

// Products section
await page.evaluate(() => window.scrollTo(0, 1800));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${base}/products.png`, fullPage: false });
console.log('Products captured');

// Business model section
await page.evaluate(() => window.scrollTo(0, 2800));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${base}/business.png`, fullPage: false });
console.log('Business captured');

// Founder section
await page.evaluate(() => window.scrollTo(0, 3800));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${base}/founder.png`, fullPage: false });
console.log('Founder captured');

// Footer section
await page.evaluate(() => window.scrollTo(0, 5000));
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: `${base}/footer.png`, fullPage: false });
console.log('Footer captured');

await browser.close();
console.log('Done!');
