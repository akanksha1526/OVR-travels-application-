import {test,expect} from "@playwright/test";
test.describe("OVR TRAVELS",()=>{

test("Bus Ticket Booking Testing",async({page})=>{
    console.log("===============Test exxcution started==============")
    console.log("Opening url ........")

    const url = 'https://www.ovrtravels.com/index.html'
    await page.goto(url);
    console.log('url is passing',url)

    console.log("url opened successfully ........")
    await page.locator('.close_icon').click();

    console.log('searching.......')
    const search_button = page.getByRole('button', { name: 'Search' });
    await search_button.scrollIntoViewIfNeeded()
    await search_button.click()
    
    const error = await page.getByRole('alert',{name:'Please select Origin!'})
    expect(error.getByText('Please select Origin!'))
    console.log('validation error!')
    //await page.waitForTimeout(2000)

    console.log('choosing from location......')
    const from_location = page.locator('#rc_select_0');
    await from_location.click();
    await from_location.fill('Kadapa');
    await from_location.press('Enter');
    //await page.waitForTimeout(2000)

    console.log('choosing to location.......')
    const to_location = page.locator('#rc_select_1');
    await to_location.click();
    await to_location.fill('Guntur');
    await to_location.press('Enter');
    //await page.waitForTimeout(2000)
    
    console.log('choosing travelling date....')
    const start_date = page.locator('input[placeholder="Date"]');
    await page.getByTitle('2026-09-09').click();
    console.log('date selected successfully.......')
    //await page.waitForTimeout(2000)

    console.log('searching.......')
    await search_button.click();
    //await page.waitForTimeout(5000);

    console.log('search completed successfully.......')
    console.log('expecting the url of next page')
    await expect(page).toHaveURL('https://www.ovrtravels.com/search-results.html');
    console.log('expected url is correct.......')

    console.log('viewing seats')
    const view_seats = await page.getByRole('button', { name: 'View Seats' });
    await view_seats.nth(0).click();
    //await page.waitForTimeout(2000);
    console.log('seats viewed successfully.......')

    console.log('selecting seat number U4')
    const seat_number = await page.locator('.available_seat').filter({'hasText': 'U4'});
    await seat_number.click();
    //await page.waitForTimeout(2000)
    console.log('seat selected successfully.......')

    const boarding_point = await page.locator('#rc_select_5');
    await boarding_point.click();
    await boarding_point.fill('Kadapa 7 roads');
    await boarding_point.press('Enter');
    //await page.waitForTimeout(2000)
    console.log('boarding point filled successfully.......')

    const continue_button = await page.getByRole('button', { name: 'Continue' });
    await continue_button.click();
    //await page.waitForTimeout(2000)
    console.log('continue button clicked successfully.......')

    console.log('entering passenger details.......')
    await page.locator('div.ant-select:has(#title_U4) .ant-select-selector').click();
    await page.getByText('Female', { exact: true }).click();
    //await page.waitForTimeout(2000)

    const name = page.getByPlaceholder('Name')
    await name.fill('Akanksha')
    //await page.waitForTimeout(2000)

    const age = page.getByPlaceholder('Age')
    await age.fill('19')
    //await page.waitForTimeout(2000)
    
    const email = page.getByPlaceholder('Email')
    await email.fill('akanksha2006.b@gmail.com')
    //await page.waitForTimeout(2000)

    const phone = page.getByPlaceholder('Mobile')
    await phone.fill('9281428718')
    //await page.waitForTimeout(2000)

    const alernate_number = page.getByPlaceholder('Alternate No')
    await alernate_number.fill('7382478549')
    //await page.waitForTimeout(2000)

    const address = page.getByPlaceholder('Address')
    await address.fill(`near relaince smart,
        pulivendula`)
    //await page.waitForTimeout(2000)
    
    const state = page.locator('#rc_select_10')
    await state.click()
    await state.fill('andhra pradesh')
    await state.press('Enter')
    //await page.waitForTimeout(2000)
    
    const upi = page.locator('label.ant-radio-wrapper').nth(3);
    await upi.click();
    //await page.waitForTimeout(2000)

    const proceed_to_payment = page.getByRole('button',{name:'Proceed to Payment'})
    await proceed_to_payment.click()
    //await page.waitForTimeout(2000)

    const ok_button = page.locator('button.ant-btn-primary',{hasText:'OK'})
    await ok_button.click()
    //await page.waitForTimeout(2000)
    await page.close();
    console.log("====================Test execution completed successfully=======================")
})
})