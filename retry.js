let retryCount = 0;
function retryTask(fixedCode) {
  if (retryCount < 3) {
    retryCount++;
    try {
      eval(fixedCode);
    } catch (err) {
      requestFixFromCopilot(err.message, fixedCode);
    }
  } else {
    console.error("[CopiFix] Max retries reached. Task failed.");
  }
}
