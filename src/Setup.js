import playwright from 'playwright'
import * as config from '../config/config'
import uaParser from 'ua-parser-js'
const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const expect = chai.expect


import { repareData } from './repareData'
import * as ult from './ult'



before(async()=> {
    // Init
    global.data = await repareData()
    global.browsers = []
    global.pages = []
    const startMemberID = (typeof data.StartMemberID !== 'undefined') ? data.StartMemberID : 1
    global.con = (typeof data.TotalMemberCount !== 'undefined') ? data.TotalMemberCount : 1
    global.gamePage = (typeof data.GamePage !== 'undefined') ? data.GamePage : 1
    global.gameIndex =  (typeof data.GameIndex !== 'undefined') ? data.GameIndex : "All"
    global.duration = (typeof data.Duration !== 'undefined') ? parseInt(data.Duration) : 60
    const DelayBet = (typeof data.DelayBet !== 'undefined') ? parseInt(data.DelayBet) : 300
    global.delayBet = (Number.isNaN(DelayBet)) ? 300 : DelayBet
    let isheadless = (typeof data.Headless !== 'undefined') ? ((data.Headless.toString().toLowerCase().trim() === 'false') ? false : true) : true
    global.env = (typeof data.Env !== 'undefined') ? data.Env : 'l1_local'
    global.BetlowOdds = (typeof data.BetLowOdds !== 'undefined') ? ((data.BetLowOdds.toString().toLowerCase().trim() === 'true') ? true : false) : false
    global.ChipSelected = (typeof data.ChipSelected !== 'undefined') ? data.ChipSelected : "All"
    global.expect = expect
    for(let i = 0 ; i < con ; i++){
        const memberId = Number(startMemberID) + i
        const browser = await playwright[config.setting.browser].launch({
            headless: isheadless ,
            args: ['--disable-dev-shm-usage', '--no-sandbox', '--disable-gpu', '--use-gl=swiftshader','--enable-webgl']
        })
        const context = await browser.newContext({
            viewport: {
                width: config.setting.viewport.width,
                height: config.setting.viewport.height
            }
        });
        const page = await context.newPage()
        const getUA = await page.evaluate(() => navigator.userAgent);
        let url = await ult.genUrl(env,memberId,getUA)
        await ult.navigate(page,url)
        browsers.push(browser)
        pages.push(page)
    }
    await ult.verifyLoginSuccess()
})

    
    

    
//     let page = await context.newPage()
//     const getUA = await page.evaluate(() => navigator.userAgent);
//     let pages = []
//     pages.push(page)
//     context.on('page', async(newPage)=>{
//       pages.push(await newPage)
//     })
//     global.pages = pages
//     global.userAgent = uaParser(getUA).ua;
//     global.page = page
//     global.context = context
//     global.isHear = false
//     global.balance = parseFloat("0.00")
//     global.lang = (typeof process.env.npm_config_lang !== 'undefined') ? process.env.npm_config_lang : 'vn'
//     global.expect = expect

// })

