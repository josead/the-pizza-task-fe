const { chromium } = require("playwright");

let url = "http://localhost";
if (process.env.NODE_ENV === "production") {
  url = "http://ec2-100-26-136-219.compute-1.amazonaws.com";
}

(async () => {
  try {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto(url);

    console.log("Checks if page is correct");
    const h1 = await page.$("h1");
    const title = await h1.textContent();

    if (title !== "Pizza Task")
      throw new Error(`Error: expected ${title} to be 'Pizza Task'`);
    console.log("👌");

    console.log("Waits for menu to load");
    await page.waitForResponse(/.*menu/, { timeout: 8000 });
    console.log("👌");

    console.log("Add 2 pizza to the cart");
    await page.click('text="Add To Cart"');
    await page.click('text="Add To Cart"');
    console.log("👌");

    const cart = await page.$('[title="Cart with 2 Pizzas"]');
    let cartCount = await cart.textContent();
    console.log("Cart should have 2 items");
    if (cartCount !== "2")
      throw new Error(`Error: expected ${cartCount} to be '2'`);
    console.log("👌");

    console.log("Go to cart");
    await page.click('[href="/cart"]');
    console.log("👌");

    console.log("Wait for delivery fee");
    await page.waitForResponse(/.*delivery-fee/, { timeout: 10000 });
    console.log("👌");

    console.log("Remove one pizza from cart");
    await page.click('text="remove one"');
    console.log("👌");

    console.log("Cart should have 1 items");
    cartCount = await cart.textContent();
    if (cartCount !== "1")
      throw new Error(`Error: expected ${cartCount} to be '1'`);
    console.log("👌");

    console.log("Go to checkout");
    await page.click('text="Place Order"');
    console.log("👌");

    console.log("Fills form");
    await page.fill("#name", "Name Name");
    await page.fill("#address", "Address Address 12345");
    await page.fill("#location", "Location 12345");
    await page.fill("#phone", "55555555");
    await page.click("#save");
    console.log("👌");

    console.log("Sends Order");
    await page.click('[type="submit"]');
    await page.waitForResponse(/.*order/, { timeout: 10000 });
    console.log("👌");

    console.log("Order should have message with ticket number");
    const pizzaMessage = await page.$("#order-success-message");
    let pizzaMessageText = await pizzaMessage.textContent();

    if (!pizzaMessageText.includes("ticket number:"))
      throw new Error(
        `Error: expected ${pizzaMessageText} to contain 'ticket number:'`
      );
    console.log("👌");

    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();
