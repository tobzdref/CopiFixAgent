const chatObserver = new MutationObserver((mutations) => {
  const response = document.querySelector("your-output-selector");
  if (response) {
    chrome.runtime.sendMessage({ type: "copilotResponse", content: response.innerText });
  }
});
chatObserver.observe(document.body, { childList: true, subtree: true });
