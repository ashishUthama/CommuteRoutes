chrome.browserAction.onClicked.addListener(function(tab) {


 //Obtain clipboard text
 var bgPage   = chrome.extension.getBackgroundPage();
 var cbHolder = bgPage.document.getElementById("cbHolder");
 cbHolder.focus();
 cbHolder.select();
 bgPage.document.execCommand("paste");
 var srcADDR = cbHolder.value;

 if(srcADDR==""){
   srcADDR = "Mt GreyLock";
 }
 
 //Replace spaces and newlines with '+', remove '#'s
 srcADDR = srcADDR.replace(/[\s\n]+/g,'+');
 srcADDR = srcADDR.replace(/\#/g,'');


 //Departure time (next weekday)



 //Build google maps route url
 routeURL = "https://maps.google.com/maps?"
   + "saddr=" + srcADDR
   + "&daddr=" + localStorage["addrOne"]
   + "&t=m";                                  // map type for faster loading

   chrome.tabs.create(
    {"url": routeURL}
  );

 routeURL = "https://maps.google.com/maps?"
   + "saddr=" + srcADDR
   + "&daddr=" + localStorage["addrTwo"]
   + "&t=m";                                  // map type for faster loading

   chrome.tabs.create(
    {"url": routeURL}
  );
   
   
   
   
  });



    