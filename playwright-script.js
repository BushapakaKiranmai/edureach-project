import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Chat with EduReach Bot' }).click();
  await page.getByRole('button', { name: 'What courses do you offer?' }).click();
  await page.getByText('Your Gateway to Smarter').click();
  await page.getByRole('button', { name: 'Chat with EduReach Bot' }).click();
  await page.getByRole('button', { name: 'Tell me about placements' }).click();
});