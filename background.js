function doSomething(message){	
    alert(message);
}
chrome.browserAction.onClicked.addListener(function() {
	message = prompt("Enter your message", "Drink water, fix posture")
	time = prompt("Enter your time interval (minutes)", "30");
	setInterval( function() { doSomething(message); }, time*1000*60);
});
	
	
