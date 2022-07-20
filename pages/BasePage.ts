import {Builder, WebDriver} from "selenium-webdriver";

export class BasePage {
    protected url: string;
    constructor(protected driver:WebDriver) {
        this.url = "https://rabota.by";
    };
    async visitPage(){
        await this.driver.manage().window().maximize();
        await this.driver.get(this.url);
    };
    async closePage(){
        await this.driver.close();
    };
}