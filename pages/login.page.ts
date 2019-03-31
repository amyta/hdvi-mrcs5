import UIMapper from "./shared/uimapper";

class Login_Page {
  public get loginButton()      { return $('.ui-button') }
  public get usernameInput()      { return $('#username') }
	public get passwordInput()      { return $('#password') }
	public get loginPageTitle() { return $('.left-container--header')}

	public open(): void {
		browser.url('/login')
		try {
		this.loginButton.waitForVisible(UIMapper.oneMinute);
		} catch {
				browser.refresh()
        this.loginButton.waitForVisible(UIMapper.oneMinute);
      }
	}
	
	public isLoaded(): void {
		try {
		this.loginPageTitle.waitForVisible(UIMapper.oneMinute);
		} catch {
				browser.refresh()
				this.loginPageTitle.waitForVisible(UIMapper.oneMinute);
      }
  }
  
	public login(username:string, password:string): {error?: string} {
		if (username && password != null) {
      this.usernameInput.setValue(username)
			this.passwordInput.setValue(password)
			this.loginButton.click()
		} else {
			return {error:'No username or password entered.'};
		}
	}

}
const LoginPage = new Login_Page()
export default LoginPage