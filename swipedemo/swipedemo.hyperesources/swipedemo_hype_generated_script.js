//	HYPE.documents["swipedemo"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "swipedemo.hyperesources";
	var documentName = "swipedemo";
	var documentLoaderFilename = "swipedemo_hype_generated_script.js";
	var mainContainerID = "swipedemo_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_158 == "undefined") {
		if(typeof window.HYPE_158_DocumentsToLoad == "undefined") {
			window.HYPE_158_DocumentsToLoad = new Array();
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=158';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_158_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);
		
		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);
				
				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}
		
		if(foundEligibleContainer == false) {
			return;
		}
	}
	
	var hypeDoc = new HYPE_158();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"0":{n:"zepto.min.js"}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"39":{aV:8,w:"Scene 1",x:"visible",a:14,Z:"break-word",b:143,j:"absolute",r:"inline",z:"13",k:"div",aS:8,aT:8,y:"preserve",t:16,aU:8,G:"#000000"},"3":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"2",k:"div",D:"#A0A0A0",a:112,b:102},"7":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"6",k:"div",D:"#A0A0A0",a:213,b:204},"8":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:315,b:102},"4":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",a:213,b:0},"11":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"10",k:"div",D:"#A0A0A0",a:417,b:204},"9":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"8",k:"div",D:"#A0A0A0",a:417,b:0},"5":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"4",k:"div",D:"#A0A0A0",a:9,b:204},"6":{c:100,d:92,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"5",k:"div",D:"#A0A0A0",a:111,b:306},"10":{c:100,d:92,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"9",k:"div",D:"#A0A0A0",a:315,b:306},"2":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:9,b:0}},n:"1",T:{kTimelineDefaultIdentifier:{d:6.02,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"7"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"3"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"8"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"4"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"11"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"9"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"5"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"6"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"2"},{f:"2",t:0,d:6.02,i:"f",e:"14deg",r:1,s:"0deg",o:"10"}],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"13":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"2",k:"div",D:"#A0A0A0",a:133,b:102},"21":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"9",k:"div",D:"#A0A0A0",a:337,b:306},"16":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"10",k:"div",D:"#A0A0A0",a:439,b:204},"19":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"5",k:"div",D:"#A0A0A0",a:133,b:306},"14":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:337,b:102},"17":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"8",k:"div",D:"#A0A0A0",a:439,b:0},"12":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"6",k:"div",D:"#A0A0A0",a:235,b:204},"20":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:31,b:0},"15":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",a:235,b:0},"23":{aV:8,w:"Scene 2",x:"visible",a:36,Z:"break-word",b:143,j:"absolute",r:"inline",z:"11",k:"div",aS:8,aT:8,y:"preserve",t:16,aU:8,G:"#000000"},"18":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"4",k:"div",D:"#A0A0A0",a:31,b:204}},n:"2",T:{kTimelineDefaultIdentifier:{d:6.02,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"12"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"13"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"14"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"15"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"16"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"17"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"18"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"19"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"20"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"21"}],f:30}},o:"22"},{x:2,p:"600px",c:"#FFFFFF",v:{"26":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"9",k:"div",D:"#A0A0A0",a:337,b:306},"34":{aV:8,w:"Scene 3",x:"visible",a:36,Z:"break-word",b:143,j:"absolute",r:"inline",z:"11",k:"div",aS:8,aT:8,y:"preserve",t:16,aU:8,G:"#000000"},"29":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:337,b:102},"32":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:31,b:0},"27":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"10",k:"div",D:"#A0A0A0",a:439,b:204},"35":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"4",k:"div",D:"#A0A0A0",a:31,b:204},"30":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"8",k:"div",D:"#A0A0A0",a:439,b:0},"25":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"2",k:"div",D:"#A0A0A0",a:133,b:102},"33":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",a:235,b:0},"28":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"5",k:"div",D:"#A0A0A0",a:133,b:306},"31":{c:100,d:100,I:"Solid",J:"Solid",f:"0deg",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,aY:"0",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"6",k:"div",D:"#A0A0A0",a:235,b:204}},n:"3",T:{kTimelineDefaultIdentifier:{d:6.02,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"31"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"25"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"29"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"33"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"27"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"30"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"35"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"28"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"32"},{f:"2",t:0,d:6.02,i:"f",e:"-14deg",r:1,s:"0deg",o:"26"},{f:"2",t:0,d:5.19,i:"a",e:635,r:1,s:337,o:"26"},{f:"2",t:0,d:5.19,i:"b",e:626,r:1,s:306,o:"26"},{f:"2",t:0,d:5.19,i:"a",e:635,r:1,s:337,o:"29"},{f:"2",t:0,d:5.19,i:"b",e:422,r:1,s:102,o:"29"},{f:"2",t:0,d:5.19,i:"a",e:329,r:1,s:31,o:"32"},{f:"2",t:0,d:5.19,i:"b",e:320,r:1,s:0,o:"32"},{f:"2",t:0,d:5.19,i:"a",e:737,r:1,s:439,o:"27"},{f:"2",t:0,d:5.19,i:"b",e:524,r:1,s:204,o:"27"},{f:"2",t:0,d:5.19,i:"a",e:329,r:1,s:31,o:"35"},{f:"2",t:0,d:5.19,i:"b",e:524,r:1,s:204,o:"35"},{f:"2",t:0,d:5.19,i:"a",e:737,r:1,s:439,o:"30"},{f:"2",t:0,d:5.19,i:"b",e:320,r:1,s:0,o:"30"},{f:"2",t:0,d:5.19,i:"a",e:431,r:1,s:133,o:"25"},{f:"2",t:0,d:5.19,i:"b",e:422,r:1,s:102,o:"25"},{f:"2",t:0,d:5.19,i:"a",e:533,r:1,s:235,o:"33"},{f:"2",t:0,d:5.19,i:"b",e:320,r:1,s:0,o:"33"},{f:"2",t:0,d:5.19,i:"a",e:431,r:1,s:133,o:"28"},{f:"2",t:0,d:5.19,i:"b",e:626,r:1,s:306,o:"28"},{f:"2",t:0,d:5.19,i:"a",e:533,r:1,s:235,o:"31"},{f:"2",t:0,d:5.19,i:"b",e:524,r:1,s:204,o:"31"}],f:30}},o:"36"}];
	
	var javascripts = [];
	
	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

