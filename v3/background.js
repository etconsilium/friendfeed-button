chrome.browserAction.onClicked.addListener(function(tab) {
  var action_url = "javascript:void((function(){var e=document.createElement('script');e.setAttribute('language','javascript');e.setAttribute('src','"+chrome.extension.getURL('/share.js')+"');document.body.appendChild(e);})())";
  chrome.tabs.update(tab.id, {url: action_url});
});
