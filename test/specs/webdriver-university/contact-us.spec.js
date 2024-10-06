import allureReporter from "@wdio/allure-reporter";
import ContactUsPage from "../../pageObjects/webdriver-university/contact-us.page";
import contactUsPage from "../../pageObjects/webdriver-university/contact-us.page";

describe("webdriveruniversity - contact us page", async () => {
  beforeEach(async () => {
    await ContactUsPage.open();
    // console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    // console.log("CONFIG ENV: "  + browser.config.environment);
    // console.log("CONFIG EMAIL: "  + browser.config.email);
    // console.log("CONFIG first name: "  + browser.config.firstName);
    // console.log("CONFIG password: "  + browser.config.password);
    // console.log("CONFIG base url: "  + browser.config.baseUrl);

  });

  it("valid submission - submit all information", async () => {
    allureReporter.addFeature("contact us page - valid submission");
    allureReporter.addDescription(
      "Validate copntact us page by submmiting all data"
    );
    allureReporter.addSeverity("critical");
    ContactUsPage.submitForm_UsingRandomData(
      "Andres",
      "Malvin Jiu"
    );

    await expect(contactUsPage.successfullSubmissionHeader).toHaveText(
      "Thank You for your Message!"
    );
  });



  it("invalid submission - dont submit all information", async () => {
    allureReporter.addFeature("contact us page - invalid submission");
    allureReporter.addDescription(
      "Validate copntact us page by not submmiting all data"
    );
    allureReporter.addSeverity("normal");

    ContactUsPage.submitForm("Andres", "Malvin Jiu", "", "test message");

    await expect(contactUsPage.unsuccesfullSubmissionHeader).toHaveText(
      "Error: all fields are",
      "required Error: Invalid email address"
    );
  });

});
