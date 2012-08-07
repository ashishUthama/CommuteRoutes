var defaultAddr = "Boston, MA";
var numAddr     = 2;

window.onload = function(){
    loadOptions();
    document.getElementById("save").onclick    = saveOptions;    
}


function loadOptions() {
	var addrOne = document.getElementById("addrOne");
	var addrTwo = document.getElementById("addrTwo");
	
	var addrOneStr = localStorage["addrOne"];
	var addrTwoStr = localStorage["addrTwo"];
	
	if(addrOneStr){
	  addrOne.value = addrOneStr;
	}else{
	  addrOne.value = defaultAddr;
	}
	if(addrTwoStr){
	  addrTwo.value = addrTwoStr;
	}else{
	  addrTwo.value = defaultAddr;
	}
}


function saveOptions() {
	var addrOne = document.getElementById("addrOne");
	var addrTwo = document.getElementById("addrTwo");
	localStorage["addrOne"] = addrOne.value;
	localStorage["addrTwo"] = addrTwo.value;
	
	chrome.tabs.getCurrent(function(tab){
	  chrome.tabs.remove(tab.id);
	});
}
