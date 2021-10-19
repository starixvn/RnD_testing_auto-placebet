import * as config from '../config/config'
import { Locator } from './Locator'
const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)

export const genUrl = async(_env,_memberId,userAgent) => {
    try{
        let _requestjs = {"memberId": Number(_memberId),"memberName":"GJ62Pjtn","language":"vi-VN","currency":"$US","seq":"d,y,lumi","siteId":"4100300","siteName":"lumi","ip":"","AppType":2,"browserUserAgent": userAgent,"auth":{"clientId":"gamesimulator","clientSecret":"gamesimulator@20luminet&"},"token":null,"redirectUrl":"#","verifyResult":null,"gameId":0,"setting":{"owUrl":""},"domain":"example.com","localhost":null,"resource":null}
        let resToken = await chai.request(config[_env].url).post("/sso").send(_requestjs)
        let resSs = await chai.request(config[_env].proxy).get(`/user/auth/sso?token=${resToken.body.token}&system=2`).set("user-agent",userAgent)
        const obj = JSON.parse(resToken.text);
         await chai.request(config[_env].setBalance).post("/").set('content-type', 'application/x-www-form-urlencoded')
        .send(`ObCustId=${_memberId}&Balance=5000000.00&MinBet=1.00&MaxBet=3000.00&Delay.GetBalance=0&Delay.PlaceBet=0&Delay.EndGame=0&Delay.GetBetLimit=0&ErrorCode.GetBalance=0&ErrorCode.PlaceBet=0&ErrorCode.EndGame=0&ErrorCode.GetBetLimit=0&__RequestVerificationToken=CfDJ8NJR82vR_UtHmvIkoBmdwR7_lNNt0xzsRguQk7UuNpfB2fTbZujU3blCQUcHI3xTLUUFo6343fSnLJvxjm102JfVu6zg_SuILb9CzWy_1Ap3cJFi0_-DY2rid5RftdDxnC_ssGpgRDFS5z5fmy-BryU`)
        let _requestChk = {"session": resSs.body.ss, "username": `gamesimulator_${_memberId}`, "browserUserAgent":userAgent}
        let _resCheckAuth = await chai.request(config[_env].proxy).post(`/user/auth/authorize`).set("Content-Type","application/json;charset=UTF-8")
        .set("Origin",config[env].origin).set("User-Agent",userAgent).send(_requestChk)
        if(_resCheckAuth.body.user === null){
            // register if don't have account on user
            let _requestSignIn = {"avatar": 17,"browserUserAgent": userAgent,"nickname": `RT${_memberId}`,"session": resSs.body.ss,"username": `gamesimulator_${_memberId}`}
            await chai.request(config[_env].proxy).post('/user/auth/signName').set("user-agent",userAgent).send(_requestSignIn)
        }
        
        // update lightmode for login
        let _firstLog = { "browserUserAgent":userAgent, "session": resSs.body.ss, "username": `gamesimulator_${_memberId}` }
        await chai.request(config[_env].proxy).post("/user/users/firstSignInSM").set("user-agent",userAgent).send(_firstLog)
        let _mode = {"browserUserAgent":userAgent, "session": resSs.body.ss, "key":"theme","username": `gamesimulator_${_memberId}`,"value":"light"}
        await chai.request(config[_env].proxy).post("/user/users/settings/update").set("user-agent",userAgent).send(_mode)
        // console.log(obj.redirectUrl)
        return obj.redirectUrl
    } catch (error) {
        console.error(error.message)
    }
}

// Go to Page
export const navigate = async(_page,_url) => {
    try {
        await _page.goto(_url, { timeout : config.setting.timeout})
        await _page.waitForTimeout(500)
    } catch (error) {
        console.error(error.message)
    }
}

export const clickEls= async(_el)=> {
    // Click Element
    try {
        for(let i =0 ;i < pages.length; i++){
            await pages[i].waitForSelector(_el, { timeout : config.setting.timeout})
            await pages[i].click(_el)
            await pages[i].waitForTimeout(500)
        }
     } catch (error) {
        console.error(error.message);
     }
}

export const clickEl= async(_page,_el)=> {
    // Click Element
    try {
        await _page.waitForSelector(_el, { timeout : config.setting.timeout})
        await _page.click(_el)
        await _page.waitForTimeout(500)
     } catch (error) {
        console.error(error.message);
     }
}
export const waitE = async(_page,_el,_state='visible')=> {
    // Wait Element 
    try {
        return _page.waitForSelector( _el, { timeout : config.setting.timeout, state : _state})
     } catch (error) {
        console.error(error.message);
        // this.screenFail()
     }  
}
export const waitEl = async(_page,_el,_state='visible')=> {
    // Wait Element 
    try {
        await _page.waitForSelector( _el, { timeout : config.setting.timeout, state : _state})
        return true
     } catch (error) {
        console.error(error.message);
        // this.screenFail()
        return false
     }  
}
export const waitEls = async(_el,_state='visible')=> {
    // Wait Element 
    try {
        for(let i =0 ;i < pages.length; i++){
            await pages[i].waitForSelector( _el, { timeout : config.setting.timeout, state : _state})
        }
        return true
     } catch (error) {
        console.error(error.message);
        // this.screenFail()
        return false
     }  
}
export const sleep = async(_milliseconds) => {
    try {
        await pages[0].waitForTimeout(_milliseconds)
    } catch (error) {
        console.log('Error '+error.message)
    }
}



// export const selectChip = async(_page,_chip) => {
//     await openQuickBetGlobal(_page)
//     await addPresetChip(_page,_chip)
//     await saveQuickBetOption(_page)
// }
// const clearPresetChip = async(_page) =>{
//     await clickEl(_page,Locator.QuickBet.QuickBetClearAmount)
// }
// const addPresetChip = async(_page,_chip) => {
//     // Clear PresetChip
//     await clearPresetChip(_page)
//     await sleep(300)
//     // Add Preset Chip
//     let amount = _chip
//     let t1 = 0
//     let t = [0,0,0,0,0,0,0]
//     let chip = [1000,500,200,100,50,10,5]
//     for(let j = 0; j< chip.length;j++){
//         if( amount >= chip[j]){
//             t[j] = Math.floor(amount/chip[j])
//             amount = amount - chip[j]*t[j]
//         }
//         // Click chip
//         for( let i = 0;i < t[j]; i++){
//             await clickEl(_page,Locator.QuickBet[`PresetChip${chip[j]}`])
//             await sleep(500)
//         }
//     }
//     if(amount >= 1){
//         t1 = amount
//         // click +1
//         for( let i = 0 ;i < t1; i++){
//             await clickEl(_page,Locator.QuickBet.PresetChip1)
//             await sleep(500)
//         }
//     }

// }
const saveQuickBetOption = async(_page) =>{
    await clickEl(_page,Locator.QuickBet.QuickBetAccept)
}
const openQuickBetGlobal = async(_page) =>{
    await clickEl(_page,Locator.QuickBet.QuickBet)
}
const switchQB = async(_page) =>{
    await clickEl(_page,Locator.QuickBet.QuickBetButton)
}
// Quick Bet Global
const setOnQuickBet = async(_page) => {
    let tmpOffset = await getPropertyOfComputedStyle(_page,Locator.QuickBet.QuickBetButton,Locator.ComputedStyle.QuickBet.attColor)
    if(Locator.ComputedStyle.QuickBet.offColor === await tmpOffset){
        await switchQB(_page)
        await saveQuickBetOption(_page)
    }
}
export const onQuickBet = async() => {
    for(let i = 0 ; i < pages.length ; i++){
        await setOnQuickBet(pages[i])
    }
}
export const getPropertyOfComputedStyle = async (_page,_el,_att) => {
    const element = await waitE(_page,_el);
    return await element.evaluate((el,_att) => {
        return window.getComputedStyle(el).getPropertyValue(_att)
    },[_att])
}
export const verifyLoginSuccess = async() => {
    const chk =  await waitEls(Locator.Balance)
    await shouldBeEqual(chk,true,"Login Failed")
}
export const shouldBeEqual = async(_val,_expect,_mess="") => {
    global.expect(_val,_mess).to.equal(_expect) 
}

const checkIsExitedGamePage = async(_page)=>{
    return await _page.isVisible(Locator.CategoryPage)
}

export const selectGamePages = async() => {
    for(let i = 0 ; i < pages.length ; i++){
        let idx = (gamePage.toString().toLowerCase().trim() === 'all') ? Math.floor(Math.random() * 2 + 1) : gamePage
        if(await checkIsExitedGamePage(pages[0]) === true){
            await clickEl(pages[i],`${Locator.CategoryPage}[${idx}]`)
        }
    }
}
export const getText = async(_page,_el)=> {
    // Get Text
    try {
        await _page.waitForSelector(_el, { timeout : config.setting.timeout })
        return await (await _page.innerText(_el)).toString()
    } catch (error) {
        console.error(error.message);
        // this.screenFail()
        await shouldBeEqual(true,false,"Error - get Text")
    }
}
const selectChip= async(_page,_chip)=> {
    if(await getText(_page,Locator.Chip.ChipSelected) !== await getText(_page,Locator.Chip[`Chip${_chip}`])){
        await clickEl(_page,Locator.Chip[`Chip${_chip}`])
    }
}
export const setRandomChip = async()=> {
    let chip = [10,50,100,200,500,1000,2000]
    for(let i = 0 ; i < pages.length ; i++){
        let j = Math.floor(Math.random() * chip.length)
        await selectChip(pages[i],chip[j])
    }
}
export const randomBet = async()=> {
    for( let i = 0 ; i< pages.length ; i++){
        let elc = await pages[i].$$(Locator.GameContainer.GameContainers)
        let idx = (gameIndex.toString().toLowerCase().trim() === 'all') ? Math.floor(Math.random() * elc.length +1) : gameIndex
        let el = await pages[i].$$(Locator.GameContainer[`${idx}`].Choice)
        let rd = Math.floor(Math.random() * el.length)
        if(typeof el[rd] !== 'undefined') await el[rd].click()
    }
}
const checkOdds = async(_page,_el) => {
    // odd should have format 1:x.xx
    // default odds = 1.96 
    // Low Odds will < 1.96
    let _odds = await getText(_page,_el)
    let rOdds = parseFloat(_odds.split(":")[1])
    if(rOdds < 1.96) {
        await clickEl(_page,_el)
    }
}
export const betLowOdds = async() => {
    for( let i = 0 ; i< pages.length ; i++){
        if(gameIndex.toString().toLowerCase().trim() === 'all' || gamePage.toString().toLowerCase().trim() === 'all') {
            await randomBet()
        } else {
            let el = await pages[i].$$(Locator.GameContainer[`${gameIndex}`].Choice+Locator.GameContainer.Odd)
            for(let j = 0 ; j < el.length; j++){
                await checkOdds(pages[i],'('+Locator.GameContainer[`${gameIndex}`].Choice+Locator.GameContainer.Odd+')['+(j+1)+']')
            }
        }
    }
}