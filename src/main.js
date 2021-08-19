
const addContext = require('mochawesome/addContext')
import * as ult from './ult'

describe('Place Bet', ()=>{
    it('Placebet', async () => {
        await ult.selectGamePages()
        await ult.setRandomChip()
        await ult.sleep(10000)
        let starttime = Date.now()
        let endtime = Date.now()
        while(Math.round((endtime - starttime)/1000) <= duration){
          await ult.randomBet()
          await ult.sleep(delayBet)
          endtime = Date.now()
        }
    })
})