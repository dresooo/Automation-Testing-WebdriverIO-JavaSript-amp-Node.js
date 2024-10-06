module.exports = {
    waitThenClick: async function (element){
        console.log(`>> Executing custom command: waitThenclick, against element ${JSON.stringify(element)} `)
        await element.waitForExist();
        await element.waitForDisplayed();
        await element.click();
    }
}