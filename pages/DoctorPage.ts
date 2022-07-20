import { BasePage } from "./BasePage";
import { WebDriver } from "selenium-webdriver";

export class DoctorPage extends BasePage{
  protected url: string;
  constructor(protected driver: WebDriver) {
    super(driver);
    this.url = "https://rabota.by/vacancies/vrach";
  };
}