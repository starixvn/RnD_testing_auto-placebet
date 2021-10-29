# Requires:

 1. Install [Nodejs](https://nodejs.org/en/download/)
```
Select LTS -> Windows Installer to download
Open downloaded file and install it for your computer
```
# Use
 - Download Auto PlaceBet foler to your computer (download as zip and then extract it)
 - Open Command Prompt
 - cd Auto PlaceBet (the path of folder Auto PlaceBet in your computer)
 - Run npm i (first-time Installation)
 - Run npm run test
 [screenshot](https://drive.google.com/file/d/1kAZXZOk-p2oYOXpe8W3Y9tbrgync1axa/view)
 
# What are arguments we need prepare for run script on setup.csv
 - StartMemberID (first memberID will be run Ex: 1001015)
 - TotalMemberCount (total member wil be run, should be 5 or less to prevent high CPU)
 - GamePage (Category tab: 1, 2, 3..., or All to run random pages. Gamepage starts from 1, and GamePage bases on UI index)
 - GameIndex (= 1 for Sedie VIP,2 for Sedie,3.. or All to run all games. GameIndex starts from 1, and game index bases on UI index)
 - Duration (script will be end after ... seconds, default 60 seconds)
 - DelayBet (milliseconds, default 300ms)
 - Env (l1_local1, l1_local, l1_local2)
 - ChipSelected set chip for betting (will be random if value = empty or all)
 - BetLowOdds if true, system will be bet on choice has odd < 1.96 ( default = false ), don't work if GamePage or GameIndex = ALL
 - Headless (default = true, it means script does not open browser, script is underground running. Don't run headless browser if you dont need to)

