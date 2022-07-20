import { WebDriver } from "selenium-webdriver";
import {BasePage} from "./BasePage";
import {BarberPage} from "./BarberPage";
import {DoctorPage} from "./DoctorPage";
import {DriverPage} from "./DriverPage";

export class PageFactory{
  static getPage(driver: WebDriver, pageName: string): any {
    switch (pageName){
      case "default":
        return new BasePage(driver);
      case "Barber":
        return new BarberPage(driver);
      case "Doctor":
        return new DoctorPage(driver);
      case "Driver":
        return new DriverPage(driver);
    }
  }
}