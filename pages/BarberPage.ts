import { BasePage } from "./BasePage";
import { WebDriver } from "selenium-webdriver";

export class BarberPage extends BasePage{
  protected url: string;
  constructor(protected driver: WebDriver) {
    super(driver);
    this.url = "https://rabota.by/vacancies/barber";
  };
}