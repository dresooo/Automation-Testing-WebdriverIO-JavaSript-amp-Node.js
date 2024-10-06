import HomePage from "../../pageObjects/automation-test-store/home.page";
import SkinCarePage from "../../pageObjects/automation-test-store/skincare.page";
import HeaderNavComp from "../../pageObjects/automation-test-store/components/header-nav.comp";
describe("add items to basket", async () => {

  it('add specific "skincare products" to basket & validate car total', async () => {
    await HomePage.open();

    await HomePage.categoryMenuComponent.categoryMenuLink('Skincare')[1].click();

   await SkinCarePage.addSpecificItems_ValidateTotal("creme precieuse nuit 50ml","total moisture facial cream");

  });
});
