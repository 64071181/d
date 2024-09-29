

// ai工具列表 ///////////////////////////////////
//https://64071181.github.io/tool2024
const ai工具列表Data = [
  { name: "提示精靈", url: "https://bit.ly/3Rlk1T4", description: "一个致力于收集和提供高质量Prompt的平台，旨在帮助大家更有效地利用AI，从而提升工作效率和质量。", keywords: ["AI", "Prompt", "提示", "靈感", "生產力"] },
  { name: "Chat Everywhere", url: "https://bit.ly/3EIA9pZ", description: "Chat Everywhere 是不用註冊就能使用的ChatGPT 而且功能很強大，不用登入。回應速度很快還可以整理你的交談以及提示詞還可以分享，真的是太棒了！", keywords: ["AI", "靈感", "生產力"] },
  { name: "chatgpt", url: "https://chatgpt.com/", description: "ChatGPT 介紹 ChatGPT 是一個語言模型，能夠協助用戶獲得答案、尋找靈感，並提高生產力。這項服務免費提供，使用上也非常簡單。", keywords: ["AI", "靈感", "生產力"] },
  { name: "Designs.ai", url: "https://bit.ly/45XLeQ5", description: "Designs.ai是一個在線平台，使用專有的人工智慧技術讓每個人都可以簡單設計。這意味著，即使沒有任何的創作經驗，您也可以在不到2分鐘內通過我們簡單的用戶界面和AI工具來創建出色的營銷產品配件！", keywords: ["AI", "靈感", "生產力", "修圖", "語音", "剪片"] },
  { name: "Adobe Express", url: "https://adobe.ly/3Zmajlo", description: "Adobe Express 是一款線上和行動設計應用程式。輕鬆製作令人讚歎的社交圖形、短片和網頁，讓您在社交媒體和其他地方都能脫穎而出。", keywords: ["AI", "靈感", "生產力", "修圖"] },
  { name: "editor.flixier.com", url: "https://bit.ly/45XM0fX", description: "強大的免費在線視頻編輯器製作精美的視頻。結合視頻、轉場、動畫文本和聲音，輕鬆創建視頻。", keywords: ["AI", "靈感", "生產力", "剪片", "修圖"] },
  { name: "DesignEvo", url: "https://bit.ly/3RrdYMA", description: "DesignEvo可以幫助你免費快速設計出專屬於你的logo。不需要任何專業技能，你就能為你的公司設計出完美的logo。快來試試看吧！", keywords: ["靈感", "生產力", "修圖"] },
  { name: "bitbug.net", url: "https://bit.ly/3Lqp7cQ", description: "bitbug.net一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo,如图红圈的位置， 目前主要的浏览器都支持favicon.ico图标.", keywords: ["網站", "靈感", "生產力", "修圖"] },
  { name: "Emojipedia", url: "https://bit.ly/44YaGnd", description: "Emojipedia 是世界排名第一的表情符號參考網站，提供值得信賴的最新且經過深入研究的信息。表情符號是嵌入文本中並在電子消息和網頁中使用的象形文字、語標、表意文字或笑臉。", keywords: ["修圖", "靈感", "生產力", "文字","emoji"] },
  { name: "Meme 梗圖倉庫", url: "https://bit.ly/3sZJ0kE", description: "亞洲最大梗圖專門網站。提供每日有趣梗圖，還有超多梗圖產生器讓你輕鬆玩！", keywords: ["梗圖", "靈感", "生產力", "Meme", "修圖"] },
  { name: "Canva", url: "https://bit.ly/45TzSfW", description: "Canva是一款免費使用的在線圖形設計工具。用它來創建社交媒體帖子、演示文稿、海報、視頻、徽標等。", keywords: ["AI", "靈感", "生產力", "修圖", "剪片"] },
  { name: "Rask AI", url: "https://bit.ly/3PKYuCb", description: "Rask AI是一款影片翻譯工具，可以把影片自動翻譯成60多種語言，同時翻譯後的語音，甚至很接近影片中人聲的聲音。", keywords: ["AI", "靈感", "生產力", "翻譯", "剪片"] },
  { name: "Leonardo AI", url: "https://bit.ly/3PLafbq", description: "Leonardo AI可以讓你利用AI技術生成具有不同繪畫風格的圖像， 可以幫你去背以及去除畫面中不想要的元素， 也可以幫你延伸畫面中其它的圖面。", keywords: ["AI", "靈感", "生產力", "修圖"] },
  { name: "HeyGen", url: "https://bit.ly/3EOVUEA", description: "HeyGen 提供 ChatGPT 對白生成和修改、主播圖像生成、文字轉語音以至生成影片的一條龍服務，更能運用 AI 來為虛擬主播加上配合對白的嘴形和一點小動作，例如邊說身體邊有輕微搖擺之類。而且生成速度非常快，生成虛擬角色每次 15-30 秒，生成 18 秒影片也只在 3 分鐘內完成。", keywords: ["AI", "靈感", "生產力", "語音", "修圖", "剪片"] },
  { name: "Codepen", url: "https://bit.ly/3EIO1k7", description: "Codepen 是一個專門讓使用者編寫HTML、CSS、JavaScript，用來快速展示網頁的服務。", keywords: ["程式碼", "靈感", "生產力", "網站"] },
  { name: "Google翻譯", url: "https://bit.ly/3PFu8Rj", description: "Google 提供的服務無須支付費用，可讓您即時翻譯英文和超過100 種其他語言的文字、詞組和網頁。", keywords: ["翻譯", "靈感", "生產力"] },
  { name: "Consensus", url: "https://bit.ly/3PK01Ir", description: "Consensus不用羅列關鍵字，只用一句話描述你想瞭解的問題，例如「xxxx有什麼好處」、「xx對xx有何影響」。它就能從2億篇論文中搜尋並整理出來答案，而且每一個論點都會附上論文連結。", keywords: ["AI", "靈感", "生產力"] },
  { name: "websim.ai", url: "https://websim.ai/", description: "Websim.ai 輸入一個指令就能生成出網頁、遊戲、應用程式。", keywords: ["AI", "靈感", "生產力", "000"] },
  { name: "artflow.ai", url: "https://app.artflow.ai/", description: "虛擬主播加上配合對白的嘴形", keywords: ["AI", "靈感", "生產力", "剪片","語音"] },
  { name: "perplexity", url: "https://www.perplexity.ai/", description: "Perplexity是一款由人工智能驅動的搜尋引擎，旨在提供用戶更直觀和高效的資訊搜尋體驗。", keywords: ["AI", "靈感", "生產力", "搜尋"] }
];