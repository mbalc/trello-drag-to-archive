function handleTabUpdated(tabId, changeInfo, tabInfo) {
  const trelloBoardUrlPattern = /(http|https):\/\/(.*\.|)trello.com\/b\/.*/;
  const newTabUrl = changeInfo.url;

  if (newTabUrl) {
    if (trelloBoardUrlPattern.test(newTabUrl)) {
      console.log(`detected board url ${newTabUrl}`);
    }
    else {
      console.log(`detected non-board url ${newTabUrl}`);
    }
  }
}

browser.tabs.onUpdated.addListener(handleTabUpdated);
