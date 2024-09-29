
/*
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
https://64071181.github.io/tool2024 
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
*/
// ai工具列表
const tool2024工具Data = [
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
// 關於我們列表 
const tool2024關於我們Data = [
  { 內容1: "<h3>數據收集</h3><p>我們在資料收集方面擁有豐富的經驗，可以幫助您尋找潛在客戶、進行市場研究或收集競爭報<br>我們為您提供準確且有價值的信息，以做出明智的業務決策。</p>"},
  { 內容1: "<h3>程式設計與開發</h3><p>我們的團隊擁有豐富的程式設計和開發經驗。<br>我們可以根據您的需求定製程序，無論是網站開發、行動應用程式還是其他自動化工具。<br> 我們的解決方案簡化您的業務流程並提高效率。</p>"},
  { 內容1: "<h3>標誌設計</h3><p>我們提供專業的標誌設計服務，幫助您創建獨特且品牌特定的商標。</p>"},
  { 內容1: "<h3>內容創作</h3><p>我們的團隊在內容創作方面擁有豐富的經驗。我們可以為您提供引人入勝且引人入勝的內容，有效傳達您的訊息並吸引目標受眾。</p>"},
  { 內容1: "<h3>多語言配音</h3><p>我們提供多語言配音服務，讓您的內容能夠接觸到更廣泛的受眾並打破語言障礙。</p>"},
  { 內容1: "<h3>平面設計</h3><p>我們的設計團隊可以創造令人驚嘆的視覺效果，以增強您的內容並使其更具視覺吸引力。</p>"},
  { 內容1: "<h3>影片製作</h3><p>我們擁有專業的影片製作團隊，可以製作高品質的宣傳影片或廣告，提升您的品牌形象，增加場曝光度。</p>"},
  { 內容1: "<h3>人工智慧工具教學</h3><p>我們可以提供人工智慧工具的使用教學課程，幫助您利用人工智慧技術來提高工作效率和創新能力。</p>"},
  { 內容1: "<h3>網站、APP開發</h3><p>我們的團隊在網站及程式開發方面擁有豐富的經驗。我們可以為您的企業創建功能強大、易於管理且吸引客戶的網站。</p>"},
  { 內容1: "<h3>多語言翻譯</h3><p>我們提供多語言翻譯服務，確保您的內容能準確到達不同的目標市場。</p>"},
  { 內容1: "<h3>社群媒體行銷</h3><p>我們可以製定有效的社群媒體行銷策略，幫助您在各大社群平台上建立強大的品牌影響力並吸引更多目標客戶。</p>"},
  { 內容1: "<h3>專業人才招聘</h3><p>我們為各種職位提供專業的招募服務，幫助您找到最合適的候選人來滿足您公司的需求。</p>"},
  { 內容1: "<h3>聯繫我們</h3><p>whatsapp:<a href='https://wa.me/85264071181/?text=查詢全面的數位創意解決方案'>85264071181</a><br>微信：hk64071181</p>"},
  { 內容1: "<a href='https://wa.me/85264071181/?text=查詢加入工具2024團隊'><h3>加入我們</h3><p>我們始終歡迎優秀人才的加入，一起打造更好的工具平台。</p></a>"},
  { 內容1: "<h3>贊助我們</h3><p>我們需要您的持續支持。請贊助我們以繼續我們的服務。<br>所有收益在扣除成本後，將用於支持各種慈善事業。</p><p>Bitcoin: <br>3Bwdrz4H25sW7zFtLWTKhtrRwKg2i6o9GF<br><br>Ethereum: <br>0x84CfF0d94fAAd23439186A050aD175E6242E5161</p>"}
];