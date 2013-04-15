//	HYPE.documents["dingTest"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "dingTest.hyperesources";
	var documentName = "dingTest";
	var documentLoaderFilename = "dingtest_hype_generated_script.js";
	var mainContainerID = "dingtest_hype_container";

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
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
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
	
	var hypeDoc = new HYPE_160();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:[{type:4,javascriptOid:"9"}],O:1,z:"2",P:1,D:"#A0A0A0",C:"#A0A0A0",a:382,b:32},"10":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:[{type:4,javascriptOid:"8"}],O:1,z:"5",P:1,D:"#A0A0A0",C:"#A0A0A0",a:115,b:234},"6":{c:100,d:100,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"<audio controls=\"controls\" height=\"50\" id=\"bong\" preload=\"auto\" width=\"300\">\n    <source src=\"http://www.smartsitehq.com/HHI/V2/audio/bong.mp3\" type=\"audio/mpeg\">\n \n</audio>",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"3",C:"#A0A0A0",D:"#A0A0A0",a:-218,b:13},"2":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:[{type:4,javascriptOid:"8"}],O:1,z:"1",P:1,D:"#A0A0A0",C:"#A0A0A0",a:119,b:33},"7":{c:100,d:100,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"<audio controls=\"controls\" height=\"50\" id=\"ding\" preload=\"auto\" width=\"300\">\n    <source src=\"http://www.smartsitehq.com/HHI/V2/audio/ding.mp3\" type=\"audio/mpeg\">\n \n</audio>",N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",O:1,P:1,z:"4",C:"#A0A0A0",D:"#A0A0A0",a:-218,b:204},"11":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:[{type:4,javascriptOid:"9"}],O:1,z:"6",P:1,D:"#A0A0A0",C:"#A0A0A0",a:385,b:234}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
	var javascripts = [{name:"ding1",source:"function(hypeDocument, element, event) {\tvar myAudio = document.getElementById(\"ding\"); \nmyAudio.play();\t\t\n\t\n\t\n}",identifier:"8"},{name:"bong1",source:"function(hypeDocument, element, event) {\tvar myAudio = document.getElementById(\"bong\"); \nmyAudio.play();\t\t\n\t\n\t\t\n\t\n}",identifier:"9"}];
	
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

