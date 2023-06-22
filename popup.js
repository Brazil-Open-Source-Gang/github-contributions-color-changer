document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        color: button.id,
      });

      chrome.storage.local.set({ selected_color: button.id });
    });
  });
});
