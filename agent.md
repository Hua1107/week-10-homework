# agent.md｜AI 協作規則

## 目標與讀者
主題：台灣夜市文化與小吃，為夜市文化初學者建立可持續擴充、可追溯的知識庫與 HTML 教學簡報。

## 內容與流程
1. 新增來源前記錄標題、發布者、網址、查閱日期、摘要與限制，存於 notes/sources/；持續更新 notes/wiki/night-market.md。不得將網頁摘要稱為完整原文或冒稱使用外部 ingest 系統。
2. 查詢 Wiki 擬定簡報大綱，提交人類審查；確認後才依大綱修改逐頁內文和正式簡報。本次大綱確認紀錄見 workflow/outline.md；後續大幅改版需重新提交大綱審查。
3. 每頁標明 W 條目代號，Wiki 條目標示 S 來源代號；先檢查論述與來源的時間、地理和適用範圍，再產生或修改內容。資料不足時停止並向人詢問或查證。
4. 進行格式檢查與簡報操作檢查；錯誤返回相應節點修正，每輪最多三次；第三次仍未通過即停止並回報，不得宣稱成功。檢查指令：node scripts/check.mjs。這是人工執行的檢查，並非自動 agent。
5. 記錄實際決策、執行與發現，不虛構人類審核、模型執行、錯誤頻率或測試結果。

## 專案架構與命名
- index.html：簡報入口；assets/css/style.css、assets/js/slides.js：樣式與互動。
- assets/images/：圖片；須附來源、授權和替代文字。
- notes/sources/s01.md 等：逐篇來源筆記（現有使用 s1.md 格式，後續沿用）。
- notes/wiki/：主題 Wiki；workflow/：大綱、流程、執行紀錄；scripts/：檢查腳本。
- 檔名用小寫英文與連字號；來源代號 S1 起遞增且不重用，條目代號 W1 起遞增且不重用。

## 視覺規範
繁體中文；字體 system-ui、Microsoft JhengHei；背景 #171b1e，文字 #f8f1df，強調色 #ffb56d。正文至少 16px，手機與桌面可閱讀、支援鍵盤操作。

## 公開前檢查
勿加入 API key、token、密碼、個資或未授權素材。完成審查後再上傳 GitHub 公開 repository，確認 GitHub Pages 的 HTTPS 網址對外可開啟。
