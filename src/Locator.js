export const Locator = {
    Balance : "[class*='user-info_balance']",
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
    Chip: {
        Chip1 : "//span[contains(@class,'chip-slider')][text()='1']",
        Chip5 : "//span[contains(@class,'chip-slider')][text()='5']",
        Chip10 : "//span[contains(@class,'chip-slider')][text()='10']",
        Chip50 : "//span[contains(@class,'chip-slider')][text()='50']",
        Chip100 : "//span[contains(@class,'chip-slider')][text()='100']",
        Chip200 : "//span[contains(@class,'chip-slider')][text()='200']",
        Chip500 : "//span[contains(@class,'chip-slider')][text()='500']",
        Chip1000 : "//span[contains(@class,'chip-slider')][text()='1k']",
        Chip2000 : "//span[contains(@class,'chip-slider')][text()='2k']",
        Chip3000 : "//span[contains(@class,'chip-slider')][text()='3k']",
        ChipSelected : "//div[contains(@class,'chip-slider_selected')]"
    },
    ComputedStyle : {
        QuickBet : {
            attColor : 'background-image',
            offColor : 'linear-gradient(90deg, rgb(173, 173, 173), rgb(216, 216, 216) 64.29%)',
            onColor : 'linear-gradient(90deg, rgb(16, 156, 51), rgb(57, 234, 102) 64.29%)'
        }
    },
    CategoryPage : "(//li[contains(@class,'game-category')])",
    GameContainer : {
        GameContainers : "(//div[contains(@class,'bet-container')])",
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
        },
        Odd : "//div[contains(@class,'bet-option_odd')]"
    }
}