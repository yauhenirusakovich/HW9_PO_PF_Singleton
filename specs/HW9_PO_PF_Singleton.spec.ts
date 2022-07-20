import { Builder, WebDriver, By, until, Capabilities, Actions, Key, WebElement } from "selenium-webdriver";
import Chrome from "selenium-webdriver/chrome";
import {join} from "path";
import {path} from "chromedriver";
import {BasePage} from "../pages/BasePage";
import {BarberPage} from "../pages/BarberPage";
import {DoctorPage} from "../pages/DoctorPage";
import { PageFactory } from "../pages/PageFactory";
import { ableToSwitchToFrame } from "selenium-webdriver/lib/until";
import {
    dataInput,
    searchInput,
    mainMenu,
    promoButton,
    blockText,
    indexSearch,
    searchSubmit,
    kindPrimary
} from "./locators";

describe("rabotaByTests",  () =>{

    let driver: WebDriver;

    beforeEach( async () => {
        let service = new Chrome.ServiceBuilder(path);
        driver = await new Builder().forBrowser("chrome").setChromeService(service).build();
    });
    afterEach(async () => {
        const basePage = new BasePage(driver);
        await basePage.closePage();
    });

    it ("firstRabotaByTest", async () => {
        const basePage = new BasePage(driver);
        await basePage.visitPage();
    });

    it ("secondRabotaByTest", async () => {
    const barberPage = new BarberPage(driver);
    await barberPage.visitPage();
    let click1 = await driver.findElement(dataInput);
    await driver.wait(until.elementIsVisible(click1), 5000);
    await click1.click();
    await click1.sendKeys(" без опыта");
    await click1.sendKeys(Key.ENTER);
    });

    it("thirdRabotaByTest", async () => {
    const doctorPage = new DoctorPage(driver);
    await doctorPage.visitPage();
    let click1 = await driver.findElement(searchInput);
    await driver.wait(until.elementIsVisible(click1), 5000);
    await click1.click();
    await click1.sendKeys(" со стажем");
    await click1.sendKeys(Key.ENTER);
  });

    it("fourthRabotaBytest", async () => {
        let pageFactory = await PageFactory.getPage(driver, "Driver");
        await pageFactory.visitPage();
        await driver.wait(until.elementLocated(mainMenu), 10000);
        let salary = await driver.findElement(mainMenu);
        await salary.click();
        await driver.wait(until.elementLocated(promoButton), 5000);
        let job = await driver.findElement(promoButton);
        await job.click();
  });

    it("fifthRabotaBytest", async () => {
        let pageFactory = await PageFactory.getPage(driver, "default");
        await pageFactory.visitPage();
        await driver.wait(until.elementLocated(blockText), 5000);
        let workers: WebElement = await driver.findElement(blockText);
        await workers.click();
        await driver.wait(until.elementLocated(indexSearch), 5000);
        let employe: WebElement = await driver.findElement(indexSearch);
        await employe.click();
        await employe.sendKeys("бухгалтер");
        await driver.wait(until.elementLocated(searchSubmit), 5000);
        let ab1: WebElement = await driver.findElement(searchSubmit);
        await ab1.click();
        await driver.wait(until.elementLocated(kindPrimary), 5000);
        let resume: WebElement = await driver.findElement(kindPrimary);
        await resume.getText();
    });
})
