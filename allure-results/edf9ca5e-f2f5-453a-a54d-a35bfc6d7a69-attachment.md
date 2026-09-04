# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bus_ticket_booking.spec.ts >> OVR TRAVELS >> Bus Ticket Booking Testing
- Location: tests\bus_ticket_booking.spec.ts:4:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.available_seat').filter({ hasText: 'U4' })
    - waiting for "https://www.ovrtravels.com/search-results.html" navigation to finish...
    - navigated to "https://www.ovrtravels.com/search-results.html"

```

# Test source

```ts
  1   | import {test,expect} from "@playwright/test";
  2   | test.describe("OVR TRAVELS",()=>{
  3   | 
  4   | test("Bus Ticket Booking Testing",async({page})=>{
  5   |     console.log("===============Test exxcution started==============")
  6   |     console.log("Opening url ........")
  7   | 
  8   |     const url = 'https://www.ovrtravels.com/index.html'
  9   |     await page.goto(url);
  10  |     console.log('url is passing',url)
  11  | 
  12  |     console.log("url opened successfully ........")
  13  |     await page.locator('.close_icon').click();
  14  | 
  15  |     console.log('searching.......')
  16  |     const search_button = page.getByRole('button', { name: 'Search' });
  17  |     await search_button.scrollIntoViewIfNeeded()
  18  |     await search_button.click()
  19  |     
  20  |     const error = await page.getByRole('alert',{name:'Please select Origin!'})
  21  |     expect(error.getByText('Please select Origin!'))
  22  |     console.log('validation error!')
  23  |     //await page.waitForTimeout(2000)
  24  | 
  25  |     console.log('choosing from location......')
  26  |     const from_location = page.locator('#rc_select_0');
  27  |     await from_location.click();
  28  |     await from_location.fill('Kadapa');
  29  |     await from_location.press('Enter');
  30  |     //await page.waitForTimeout(2000)
  31  | 
  32  |     console.log('choosing to location.......')
  33  |     const to_location = page.locator('#rc_select_1');
  34  |     await to_location.click();
  35  |     await to_location.fill('Guntur');
  36  |     await to_location.press('Enter');
  37  |     //await page.waitForTimeout(2000)
  38  |     
  39  |     console.log('choosing travelling date....')
  40  |     const start_date = page.locator('input[placeholder="Date"]');
  41  |     await page.getByTitle('2026-09-09').click();
  42  |     console.log('date selected successfully.......')
  43  |     //await page.waitForTimeout(2000)
  44  | 
  45  |     console.log('searching.......')
  46  |     await search_button.click();
  47  |     //await page.waitForTimeout(5000);
  48  | 
  49  |     console.log('search completed successfully.......')
  50  |     console.log('expecting the url of next page')
  51  |     await expect(page).toHaveURL('https://www.ovrtravels.com/search-results.html');
  52  |     console.log('expected url is correct.......')
  53  | 
  54  |     console.log('viewing seats')
  55  |     const view_seats = await page.getByRole('button', { name: 'View Seats' });
  56  |     await view_seats.nth(0).click();
  57  |     //await page.waitForTimeout(2000);
  58  |     console.log('seats viewed successfully.......')
  59  | 
  60  |     console.log('selecting seat number U4')
  61  |     const seat_number = await page.locator('.available_seat').filter({'hasText': 'U4'});
> 62  |     await seat_number.click();
      |                       ^ Error: locator.click: Target page, context or browser has been closed
  63  |     //await page.waitForTimeout(2000)
  64  |     console.log('seat selected successfully.......')
  65  | 
  66  |     const boarding_point = await page.locator('#rc_select_5');
  67  |     await boarding_point.click();
  68  |     await boarding_point.fill('Kadapa 7 roads');
  69  |     await boarding_point.press('Enter');
  70  |     //await page.waitForTimeout(2000)
  71  |     console.log('boarding point filled successfully.......')
  72  | 
  73  |     const continue_button = await page.getByRole('button', { name: 'Continue' });
  74  |     await continue_button.click();
  75  |     //await page.waitForTimeout(2000)
  76  |     console.log('continue button clicked successfully.......')
  77  | 
  78  |     console.log('entering passenger details.......')
  79  |     await page.locator('div.ant-select:has(#title_U4) .ant-select-selector').click();
  80  |     await page.getByText('Female', { exact: true }).click();
  81  |     //await page.waitForTimeout(2000)
  82  | 
  83  |     const name = page.getByPlaceholder('Name')
  84  |     await name.fill('Akanksha')
  85  |     //await page.waitForTimeout(2000)
  86  | 
  87  |     const age = page.getByPlaceholder('Age')
  88  |     await age.fill('19')
  89  |     //await page.waitForTimeout(2000)
  90  |     
  91  |     const email = page.getByPlaceholder('Email')
  92  |     await email.fill('akanksha2006.b@gmail.com')
  93  |     //await page.waitForTimeout(2000)
  94  | 
  95  |     const phone = page.getByPlaceholder('Mobile')
  96  |     await phone.fill('9281428718')
  97  |     //await page.waitForTimeout(2000)
  98  | 
  99  |     const alernate_number = page.getByPlaceholder('Alternate No')
  100 |     await alernate_number.fill('7382478549')
  101 |     //await page.waitForTimeout(2000)
  102 | 
  103 |     const address = page.getByPlaceholder('Address')
  104 |     await address.fill(`near relaince smart,
  105 |         pulivendula`)
  106 |     //await page.waitForTimeout(2000)
  107 |     
  108 |     const state = page.locator('#rc_select_10')
  109 |     await state.click()
  110 |     await state.fill('andhra pradesh')
  111 |     await state.press('Enter')
  112 |     //await page.waitForTimeout(2000)
  113 |     
  114 |     const upi = page.locator('label.ant-radio-wrapper').nth(3);
  115 |     await upi.click();
  116 |     //await page.waitForTimeout(2000)
  117 | 
  118 |     const proceed_to_payment = page.getByRole('button',{name:'Proceed to Payment'})
  119 |     await proceed_to_payment.click()
  120 |     //await page.waitForTimeout(2000)
  121 | 
  122 |     const ok_button = page.locator('button.ant-btn-primary',{hasText:'OK'})
  123 |     await ok_button.click()
  124 |     //await page.waitForTimeout(2000)
  125 |     await page.close();
  126 |     console.log("====================Test execution completed successfully=======================")
  127 | })
  128 | })
```