chrome.runtime.onInstalled.addListener(() => {
  console.log("CopiFix Extension Installed!");
});

chrome.tabs.create({ url: "https://www.bing.com/chat" });
