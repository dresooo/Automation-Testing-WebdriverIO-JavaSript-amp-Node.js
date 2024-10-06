import BasePage from "./BasePage.page";
import categoryMenuComponent from "../automation-test-store/components/category-menu.comp";

class HomePage extends BasePage {
  open() {
    return super.open("");
  }

  get categoryMenuComponent() {
    // Return the imported instance, not a function call
    return categoryMenuComponent;
  }
}

export default new HomePage();
