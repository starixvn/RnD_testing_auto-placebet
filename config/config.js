export const setting = {
    browser: 'chromium',
    viewport: {
       // UI
       width : 1280,
       height : 720
   },
   timeout : 65000,
   loop : 90,
   headless: false,
}

export const Translate = {
   Rebet : {
      vi : "Cược lại",
      en : "Rebet"
   },
   History : {
      vi : "Lịch sử"
   },
   Result : {
      vi : "Kết quả"
   },
   Guide : {
      vi : "Hướng dẫn"
   }
}

export const l1_local ={
   url: "https://gamelobby-simulator.lumigame.com/signin",
   auth: {
      partnerId : "gamesimulator",
      partnerSecret : "gamesimulator@20luminet&",
      clientSecret : "gamesimulator@20luminet&",
      clientId : "gamesimulator"
   },
   setting : {
      apiUrl : "http://l1_game_api_local:5000",
      authUrl : "http://l1_auth_api_local:5000",
   },
   retrieveEndGame : "https://owapi-simulator.lumigame.com/SabaClub/RetrieveEndGameInfo",
   setBalance : "https://owapi-simulator.lumigame.com/SabaClub/CreateCustomer",
   origin : "https://l1-m.lumigame.com",
   proxy: "https://l1-proxy.lumigame.com"
}

export const l1_local1 ={
   url: "https://l1-glbs1.lumigame.com/signin",
   auth: {
      partnerId : "ONEworks1",
      partnerSecret : "ONEworks1@20luminet&",
      clientSecret : "ONEworks1@20luminet&",
      clientId : "ONEworks1"
   },
   setting : {
      apiUrl : "http://l1_game_api_local_1:5000",
      authUrl : "http://l1_auth_api_local_1:5000",
   },
   retrieveEndGame : "https://l1-ows1.lumigame.com/SabaClub/RetrieveEndGameInfo",
   setBalance : "https://l1-ows1.lumigame.com/SabaClub/CreateCustomer",
   origin : "https://l1-m1.lumigame.com",
   proxy: "https://l1-proxy1.lumigame.com"
}

export const l1_local2 ={
   url: "https://l1-glbs2.lumigame.com/signin",
   retrieveEndGame : "https://l1-ows2.lumigame.com/SabaClub/RetrieveEndGameInfo",
   setBalance : "https://l1-ows2.lumigame.com/SabaClub/CreateCustomer",
   origin : "https://l1-m2.lumigame.com",
   proxy: "https://l1-proxy2.lumigame.com"
}

