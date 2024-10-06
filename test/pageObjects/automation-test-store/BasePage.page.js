export default class BasePage {
  open(path) {
    return browser.url(`https://automationteststore.com/${path}`);
  }
}
