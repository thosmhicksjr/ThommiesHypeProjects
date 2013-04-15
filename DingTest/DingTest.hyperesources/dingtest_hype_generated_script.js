//	HYPE.documents["DingTest"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "DingTest.hyperesources";
	var documentName = "DingTest";
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
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"1":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:[{type:4,javascriptOid:"B89FA445-1970-4D34-A74B-0175B3A2A63B-301-000001583E5D513E"}],O:1,z:"2",P:1,D:"#A0A0A0",C:"#A0A0A0",a:85,b:140},"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043":{b:185,z:"1",K:"Solid",c:148,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,Q:3,aV:6,i:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043",R:"#808080",j:"absolute",S:0,aI:6,k:"div",T:0,l:"0deg",aJ:6,m:"#D8D8D8",n:"#FFFFFF",aK:6,aL:6,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_hover",aN:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_pressed",D:"#A0A0A0",t:13,aA:[{type:4,javascriptOid:"B89FA445-1970-4D34-A74B-0175B3A2A63B-301-000001583E5D513E"}],F:"center",G:"#000000",aP:"pointer",w:"Make some Noise!",x:"visible",I:"Solid",a:219,y:"preserve",J:"Solid"},"2":{c:100,d:100,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",k:"div",aA:[{type:4,javascriptOid:"3"}],O:1,z:"3",P:1,D:"#A0A0A0",C:"#A0A0A0",a:426,b:143}},n:"Untitled Scene",T:{"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_pressed":{d:1,i:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_pressed",n:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_pressed",a:[{f:"2",t:0,d:1,i:"n",e:"#BFBFBF",r:1,s:"#FFFFFF",o:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043"},{f:"2",t:0,d:1,i:"m",e:"#E5E5E5",r:1,s:"#D8D8D8",o:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043"}],f:30},"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_hover":{d:1,i:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_hover",n:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043_hover",a:[{f:"2",t:0,d:1,i:"n",e:"#E5E5E5",r:1,s:"#FFFFFF",o:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043"},{f:"2",t:0,d:1,i:"m",e:"#BFBFBF",r:1,s:"#D8D8D8",o:"99C50FC6-B2B5-4556-B627-95E6EDC7F477-301-000000E3AB95E043"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"3787B2A6-1514-4FA1-B7B6-C7A542AE39F0-301-000000E20E290571"}];
	
	var javascripts = [{name:"makeSomeNoise",source:"function(hypeDocument, element, event) {\tvar audio = new Audio(\"http://www.tumultco.com/misc/computer_hacking.wav\");\n\taudio.play();\n}",identifier:"B89FA445-1970-4D34-A74B-0175B3A2A63B-301-000001583E5D513E"},{name:"dingtest",source:"function(hypeDocument, element, event) {\tvar audio = new Audio(\"http://www.smartsitehq.com/HHI/V2/audio/ding.mp3\");\n\taudio.play();\n\t\n\t\n}",identifier:"3"}];
	
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

