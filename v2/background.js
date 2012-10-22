  chrome.browserAction.onClicked.addListener(function(tab) {

  var action_url = "javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('src','http://friendfeed.com/share/bookmarklet/javascript');document.body.appendChild(e)})())";
    chrome.tabs.update(tab.id, {url: action_url});

//    var action_url = "javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('src','http://friendfeed.com/share/bookmarklet/javascript');document.body.appendChild(e)})())";
	
//    chrome.tabs.executeScript(tab.id, {code:"var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('src','http://friendfeed.com/share/bookmarklet/javascript');document.body.appendChild(e);"});
    //chrome.tabs.executeScript(tab.id, {code:function(){alert(1);}} );
  });
