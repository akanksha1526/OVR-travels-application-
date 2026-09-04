# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bus_ticket_booking.spec.ts >> OVR Travels Application
- Location: tests\bus_ticket_booking.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.available_seat').filter({ hasText: 'U4' })

```

# Test source

```ts
  1   | import {test,expect} from "@playwright/test";
  2   | 
  3   | test("OVR Travels Application",async({page})=>{
  4   |     console.log("===============Test exxcution started==============")
  5   |     console.log("Opening url ........")
  6   |     await page.goto('https://www.ovrtravels.com/index.html');
  7   |     console.log("url opened successfully ........")
  8   |     await page.locator('.close_icon').click();
  9   | 
  10  |     console.log('choosing from location......')
  11  |     const from_location = page.locator('#rc_select_0');
  12  |     await from_location.click();
  13  |     await from_location.fill('Kadapa');
  14  |     await from_location.press('Enter');
  15  |     await page.waitForTimeout(2000)
  16  | 
  17  |     console.log('choosing to location.......')
  18  |     const to_location = page.locator('#rc_select_1');
  19  |     await to_location.click();
  20  |     await to_location.fill('Guntur');
  21  |     await to_location.press('Enter');
  22  |     await page.waitForTimeout(2000)
  23  |     
  24  |     console.log('choosing travelling date....')
  25  |     const start_date = page.locator('input[placeholder="Date"]');
  26  |     await page.getByTitle('2026-09-09').click();
  27  |     console.log('date selected successfully.......')
  28  |     await page.waitForTimeout(2000)
  29  | 
  30  |     console.log('searching.......')
  31  |     const search_button = page.getByRole('button', { name: 'Search' });
  32  |     await search_button.click();
  33  |     await page.waitForTimeout(5000);
  34  | 
  35  |     console.log('search completed successfully.......')
  36  |     console.log('expecting the url of next page')
  37  |     await expect(page).toHaveURL('https://www.ovrtravels.com/search-results.html');
  38  |     console.log('expected url is correct.......')
  39  | 
  40  |     console.log('viewing seats')
  41  |     const view_seats = await page.getByRole('button', { name: 'View Seats' });
  42  |     await view_seats.nth(0).click();
  43  |     await page.waitForTimeout(2000);
  44  |     console.log('seats viewed successfully.......')
  45  | 
  46  |     console.log('selecting seat number U4')
  47  |     const seat_number = await page.locator('.available_seat').filter({'hasText': 'U4'});
> 48  |     await seat_number.click();
      |                       ^ Error: locator.click: Target page, context or browser has been closed
  49  |     await page.waitForTimeout(2000)
  50  |     console.log('seat selected successfully.......')
  51  | 
  52  |     const boarding_point = await page.locator('#rc_select_5');
  53  |     await boarding_point.click();
  54  |     await boarding_point.fill('Kadapa 7 roads');
  55  |     await boarding_point.press('Enter');
  56  |     await page.waitForTimeout(2000)
  57  |     console.log('boarding point filled successfully.......')
  58  | 
  59  |     const continue_button = await page.getByRole('button', { name: 'Continue' });
  60  |     await continue_button.click();
  61  |     await page.waitForTimeout(2000)
  62  |     console.log('continue button clicked successfully.......')
  63  | 
  64  |     console.log('entering passenger details.......')
  65  |     await page.locator('div.ant-select:has(#title_U4) .ant-select-selector').click();
  66  |     await page.getByText('Female', { exact: true }).click();
  67  |     await page.waitForTimeout(2000)
  68  | 
  69  |     const name = page.getByPlaceholder('Name')
  70  |     await name.fill('Akanksha')
  71  |     await page.waitForTimeout(2000)
  72  | 
  73  |     const age = page.getByPlaceholder('Age')
  74  |     await age.fill('19')
  75  |     await page.waitForTimeout(2000)
  76  |     
  77  |     const email = page.getByPlaceholder('Email')
  78  |     await email.fill('akanksha2006.b@gmail.com')
  79  |     await page.waitForTimeout(2000)
  80  | 
  81  |     const phone = page.getByPlaceholder('Mobile')
  82  |     await phone.fill('9281428718')
  83  |     await page.waitForTimeout(2000)
  84  | 
  85  |     const alernate_number = page.getByPlaceholder('Alternate No')
  86  |     await alernate_number.fill('7382478549')
  87  |     await page.waitForTimeout(2000)
  88  | 
  89  |     const address = page.getByPlaceholder('Address')
  90  |     await address.fill(`near relaince smart,
  91  |         pulivendula`)
  92  |     await page.waitForTimeout(2000)
  93  |     
  94  |     const state = page.locator('#rc_select_10')
  95  |     await state.click()
  96  |     await state.fill('andhra pradesh')
  97  |     await state.press('Enter')
  98  |     await page.waitForTimeout(2000)
  99  |     
  100 |     const upi = page.locator('label.ant-radio-wrapper').nth(3);
  101 |     await upi.click();
  102 |     await page.waitForTimeout(2000)
  103 | 
  104 |     const proceed_to_payment = page.getByRole('button',{name:'Proceed to Payment'})
  105 |     await proceed_to_payment.click()
  106 |     await page.waitForTimeout(2000)
  107 | 
  108 |     const ok_button = page.locator('button.ant-btn-primary',{hasText:'OK'})
  109 |     await ok_button.click()
  110 |     await page.waitForTimeout(2000)
  111 |     await page.close();
  112 |     console.log("====================Test execution completed successfully=======================")
  113 | })
```