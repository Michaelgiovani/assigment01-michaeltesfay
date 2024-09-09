import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { ClientPage } from './pages/client-page';
        
test.describe('Test suite 01', () => {
    test('Test case 01', async ({ page }) => {
      const loginpage = new LoginPage(page);
      const dashboardpage = new DashboardPage(page);
  
      await loginpage.goto();
      await loginpage.performLogin(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
      await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
      await dashboardpage.performLogout();
  
      //await page.waitForTimeout(5000);
    });
  
    test('Test case 02', async ({ page }) => {
      const loginpage = new LoginPage(page);
      const dashboardpage = new DashboardPage(page);
      const clientpage = new ClientPage(page);
  
      await loginpage.goto();
      await loginpage.performLogin(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
      await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
      await page.waitForTimeout(5000);
      await dashboardpage.navigateToClients();
      await expect(page.getByRole('heading', { name: 'New Client' })).toBeVisible();
    
      const fullName
    
    });
});