import BasePage from "./BasePage.page";
import ItemComponent from "../automation-test-store/components/item.comp";
import headerNavComponent from "./components/header-nav.comp";
import CartPage from "../automation-test-store/cart.page";
import cartPage from "../automation-test-store/cart.page";

class SkinCarePage extends BasePage {
  get itemComponent() {
    return ItemComponent;
  }

  async addSpecificItems_ValidateTotal(item1, item2) {
    const skincareProducts_Header_Links = await ItemComponent.itemHeaderLinks;

    const itemPrices = [];

    for (const header of skincareProducts_Header_Links) {
      const tempHeaderText = await header.getText();
      if (
        tempHeaderText.toLowerCase() == item1.toLowerCase() ||
        tempHeaderText.toLowerCase() == item2.toLowerCase()
      ) {
        const attr = await header.getAttribute("href");
        console.log(attr);

        const itemId = attr.split("id=").pop();
        console.log(itemId);

        await $('//a[@data-id="' + itemId + '"]').click();

        itemPrices.push(
          await $(
            "//a[@data-id='" +
              itemId +
              "']/following-sibling::div/div[@class='pricenew']" +
              "| //a[@data-id='" +
              itemId +
              "']/following-sibling::div/div[@class='oneprice']"
          ).getText()
        );
      }
      const formattedItemPrices = [];
      itemPrices.forEach((price) => {
        formattedItemPrices.push(price.replace("$", ""));
      });

      var itemsTotal = 0;
      formattedItemPrices.forEach((price) => (itemsTotal += parseFloat(price)));

      console.log("itemsTotal: " + itemsTotal);
    }

    await headerNavComponent.cartLink.click();
    await expect(browser).toHaveUrl(
      "https://automationteststore.com/index.php?rt=checkout/cart"
    );

    var tempShippingRate = await CartPage.shippingRate.getText();
    var shippingRate = tempShippingRate.replace("$", "");
    itemsTotal = itemsTotal + parseFloat(shippingRate);
    console.log("Total: " + itemsTotal);

    //extract cart total
    var cartTotal = await cartPage.total.getText();
    cartTotal = cartTotal.replace("$", "");
    expect(itemsTotal).toEqual(parseFloat(cartTotal));
  }
}

export default new SkinCarePage();
