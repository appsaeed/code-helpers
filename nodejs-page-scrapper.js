const url = "https://www.iana.org/help/example-domains"

const puppeteer = require('puppeteer');
const fs = require('fs');

// Function to scroll to the bottom of the page
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch();
  // Open a new page
  const page = await browser.newPage();
  // Navigate to the desired URL
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Scroll to the bottom of the page
  await autoScroll(page);

  // Wait for the page to fully load (this can be customized)
  // Wait for multiple elements or a more complex condition
  await page.waitForFunction(() => {
    return document.querySelector('product-card-vertical-grid-large-view')
  }, { timeout: 30000 }); // Adjust timeout as needed

  // Get the HTML content of the page
  const content = await page.content();

  // Save the content to a file
  fs.writeFileSync('filter-product.html', content);

  // Close the browser
  await browser.close();
})();
