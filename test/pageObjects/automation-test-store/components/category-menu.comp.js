
class CategoryMenuComponent {
    categoryMenuLink(linkText) {
       return $$("//a[contains(text(),'" + linkText + "')]");
    }
}

export default new CategoryMenuComponent();
