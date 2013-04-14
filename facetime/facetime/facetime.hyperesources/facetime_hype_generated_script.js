//	HYPE.documents["facetime"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "facetime.hyperesources";
	var documentName = "facetime";
	var documentLoaderFilename = "facetime_hype_generated_script.js";
	var mainContainerID = "facetime_hype_container";

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
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{c:100,d:20,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,w:"Miki",N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:5,goToURL:"facetime://mikihicks@me.com",openInNewWindow:false}],O:1,B:"#A0A0A0",z:"2",P:1,D:"#A0A0A0",C:"#A0A0A0",a:25,F:"center",b:67},"6":{c:100,d:20,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,w:"T's iPad",N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],O:1,B:"#A0A0A0",z:"5",P:1,D:"#A0A0A0",C:"#A0A0A0",a:25,F:"center",b:196},"4":{c:100,d:20,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,w:"Miki's iPhone",N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:5,goToURL:"facetime://3303094259",openInNewWindow:false}],O:1,B:"#A0A0A0",z:"3",P:1,D:"#A0A0A0",C:"#A0A0A0",a:25,F:"center",b:110},"2":{c:100,d:20,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,w:"Doug",N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:5,goToURL:"facetime://dballen@vstpumps.com",openInNewWindow:false}],O:1,B:"#A0A0A0",z:"1",P:1,D:"#A0A0A0",C:"#A0A0A0",a:25,F:"center",b:24},"5":{c:100,d:20,I:"Solid",J:"Solid",bD:"none",K:"Solid",g:"#DDEEFF",L:"Solid",aP:"pointer",M:1,w:"T's iPhone",N:1,A:"#A0A0A0",x:"visible",j:"absolute",k:"div",aA:[{type:5,goToURL:"facetime://3303094288",openInNewWindow:false}],O:1,B:"#A0A0A0",z:"4",P:1,D:"#A0A0A0",C:"#A0A0A0",a:25,F:"center",b:153}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
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

