describe('async vs sync -webdriverio example', () => {
    it('async vs sync', async() => {
        await browser.url("/");

        await expect(browser).toHaveUrl("https://www.webdriveruniversity.com/")
    });
});