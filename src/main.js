
const addContext = require('mochawesome/addContext')
import * as ult from './ult'

describe('Place Bet', ()=>{
    it('Placebet', async () => {
        await ult.onQuickBet()
        await ult.selectChipForAllPage()
        await ult.sleep(10000)
        let starttime = Date.now()
        let endtime = Date.now()
        while(Math.round((endtime - starttime)/1000) <= duration){
          if(ChipSelected.toString().toLowerCase().trim() === 'all' || ChipSelected.toString().toLowerCase().trim() === '') await ult.setRandomChip()
          await ult.selectGamePages()
          await ult.sleep(delayBet)
          if(BetlowOdds === false) { await ult.randomBet() }
          else { await ult.betLowOdds() }
          endtime = Date.now()
        }
    })
})