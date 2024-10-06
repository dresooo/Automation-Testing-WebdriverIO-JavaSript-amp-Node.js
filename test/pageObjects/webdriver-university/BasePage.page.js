export default class BasePage {
  open(path) {
    return browser.url(`${path}`);
  }
}
