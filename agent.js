function sendTask() {
  const task = document.getElementById("taskBox").value;

  chrome.tabs.query({}, function(tabs) {
    const copilotTab = tabs.find(tab =>
      tab.url &&
      (tab.url.includes("copilot.microsoft.com") || tab.url.includes("bing.com/chat"))
    );

    if (copilotTab) {
      chrome.tabs.update(copilotTab.id, { active: true });

      chrome.scripting.executeScript({
        target: { tabId: copilotTab.id },
        func: insertIntoCopilot,
        args: [task]
      });
    } else {
      alert("Copilot tab not found. Please open https://copilot.microsoft.com manually.");
    }
  });
}

function insertIntoCopilot(task) {
  const inputBox = document.querySelector("textarea");
  if (inputBox) {
    inputBox.value = task;
    inputBox.dispatchEvent(new Event("input", { bubbles: true }));

    const sendButton = document.querySelector("button[class*='send']");
    if (sendButton) {
      sendButton.click();
    } else {
      alert("Send button not found.");
    }
  } else {
    alert("Copilot input box not found.");
  }
}
