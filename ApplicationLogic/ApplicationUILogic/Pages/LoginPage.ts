import { BaseApplicationPage } from "../Pages/BaseApplicationPage";

export class LoginPage extends BaseApplicationPage {
    constructor(page) {
        super(page);
    };

    TextBoxes = {
        Login: this.page.locator("//input[contains(@name, 'Username')]"),
        Password: this.page.locator("//input[contains(@name, 'txtPassword')]"),
    };

    Buttons = {
        Login: this.page.locator("//input[contains(@name, 'Login')]"),
    }; 

    Lines = {
        ForgotPassword: this.page.locator("//a[contains(@id, 'ForgetPassword')]"),
    }

    async LogIn(login: string, password: string) {
        await this.TextBoxes.Login.fill(login); 
        await this.TextBoxes.Password.fill(password); 
        await this.Buttons.Login.click(); 
    }
};