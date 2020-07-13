function handleTabUpdated(tabId, changeInfo, tabInfo) {
  const trelloBoardUrlPattern = /(http|https):\/\/(.*\.|)trello.com\/b\/.*/;
  const newTabUrl = changeInfo.url;

  if (newTabUrl) {
    if (trelloBoardUrlPattern.test(newTabUrl)) {
      browser.tabs.executeScript(tabId, { file: 'attach.js' });
    }
    else {
      browser.tabs.executeScript(tabId, { file: 'detach.js' });
    }
  }
}

browser.tabs.onUpdated.addListener(handleTabUpdated);
