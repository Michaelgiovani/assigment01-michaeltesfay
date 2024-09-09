//dashboard-page.ts

import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
    //Attributes
  readonly page: Page;
  readonly logoutButton: Locator;
  readonly createClient: Locator;
  readonly createRoom: Locator;
  readonly createBill: Locator;

    //Const
  constructor(page: Page) {
    this.page = page;
    this.createClient = page.getByRole('link', { name: 'Create Client' });
    this.createRoom = page.getByRole('link', { name: 'Create Room' });
    this.createBill = page.getByRole('link', { name: 'Create Bill'});
    this.logoutButton = page.getByRole('button', { name: 'Logout' });

  }

  async performLogout() {
    await this.logoutButton.click();
  }


  async navigateToClients() {
    await this.page.locator('#app > div > div > div:nth-child(2) > a').click();
    await this.createClient.click();
  }
}