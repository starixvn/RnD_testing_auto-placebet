export const Locator = {
    Balance : "[class*='header_balance']",
    QuickBet: {
        QuickBet : "//span[contains(@class,'quick-bet-modal_quick-bet-text')]",
        QuickBetAmount: "//div[contains(@class,'quick-bet-modal_group')]/input",
        QuickBetClearAmount : "//div[contains(@class,'quick-bet-modal_group')]/span",
        PresetChip1 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='1']",
        PresetChip5 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='5']",
        PresetChip10 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='10']",
        PresetChip50 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='50']",
        PresetChip100 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='100']",
        PresetChip200 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='200']",
        PresetChip500 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='500']",
        PresetChip1000 : "//div[contains(@class,'dropdown-menu quick-bet-modal')]//span[text()='1000']",
        QuickBetButton: "//label[@for='toggle-quickbet']",
        QuickBetCancel : "button[class*='btn-grey']",
        QuickBetAccept : "button[class*='btn-orange']",
    },
    CategoryPage : "(//span[contains(@class,'category-page')])",
    GameContainer : {
        1 : {
            Choice : "(//div[contains(@class,'bet-container')])[1]//div[contains(@class,'bet-option_container')]"
        },
        2 : {
            Choice : "(//div[contains(@class,'bet-container')])[2]//div[contains(@class,'bet-option_container')]"
        },  
        3 : {
            Choice : "(//div[contains(@class,'bet-container')])[3]//div[contains(@class,'bet-option_container')]"
        }, 
        4 : {
            Choice : "(//div[contains(@class,'bet-container')])[4]//div[contains(@class,'bet-option_container')]"
        }, 
        5 : {
            Choice : "(//div[contains(@class,'bet-container')])[5]//div[contains(@class,'bet-option_container')]"
        }, 
        6 : {
            Choice : "(//div[contains(@class,'bet-container')])[6]//div[contains(@class,'bet-option_container')]"
        }
    }
}