//	HYPE.documents["FacetimeDemo"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "FacetimeDemo.hyperesources";
	var documentName = "FacetimeDemo";
	var documentLoaderFilename = "facetimedemo_hype_generated_script.js";
	var mainContainerID = "facetimedemo_hype_container";

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
	
	var resources = {"0":{n:"ftimage.jpg",p:1},"1":{n:"facetime_by_lrscrew-d31e4ep.png",p:1},"2":{n:"share-icon.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#36485D",v:{"21":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"29",e:"1.000000",aP:"default",bD:"none"},"30":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"30",a:48,j:"absolute",aP:"pointer",b:711},"31":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"30",e:"1.000000",aP:"default",bD:"none"},"40":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"39",e:"1.000000",aP:"default",bD:"none"},"32":{aV:8,w:"Billy Batson",a:51,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"30",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"15":{o:"content-box",h:"1",x:"visible",a:525,q:"100% 100%",b:93,j:"absolute",r:"inline",c:141,k:"div",z:"16",d:141},"41":{aV:8,w:"Linda Danvers",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"39",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"24":{aV:8,w:"Click the button to make a Facetime call.<div><br></div><div>It may take a few seconds for Facetime to initiate.</div><div><br></div><div><br></div>",a:397,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:296,k:"div",z:"4",d:188,bF:"29",aT:8,t:27,b:-412,aU:8,G:"#E9E9E9",aS:8},"50":{aV:8,w:"Kit Walker",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"48",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"33":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"31",a:48,j:"absolute",aP:"pointer",b:769},"16":{aV:8,w:"Facetime Connector",x:"visible",a:39,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"17",k:"div",b:23,aT:8,aS:8,t:52,aU:8,G:"#E9E9E9"},"42":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"36",a:307,j:"absolute",aP:"pointer",b:711},"51":{b:340,z:"43",K:"None",c:366,L:"None",d:51,M:0,e:"1.000000",bD:"none",N:0,O:0,g:"#4480B7",P:0,Q:0,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:10,k:"div",T:0,S:0,aX:0,aJ:10,aK:10,aL:10,A:"#A0A0A0",Y:"55px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:29,aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],F:"left",G:"#FFFFFF",aP:"pointer",w:"<div>&nbsp; &nbsp; &nbsp; &nbsp; Expert Operator</div>",x:"visible",I:"None",a:39,J:"None"},"34":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"33",e:"1.000000",aP:"default",bD:"none"},"60":{aV:8,w:"Jack Black",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"58",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"43":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"42",e:"1.000000",aP:"default",bD:"none"},"52":{o:"content-box",h:"1",a:46,x:"visible",q:"100% 100%",b:344,j:"absolute",r:"inline",c:43,k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],d:43,z:"44",e:"1.000000",aP:"default",bD:"none"},"35":{aV:8,w:"Barry Allen",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"33",aT:8,b:-1,t:25,aS:8,aU:8,G:"#FFFFFF"},"18":{o:"content-box",h:"1",a:46,x:"visible",q:"100% 100%",b:214,j:"absolute",r:"inline",c:43,k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],d:43,z:"19",e:"1.000000",aP:"default",bD:"none"},"44":{aV:8,w:"Mark Harris",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"42",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"61":{aV:8,w:"Team Members",x:"visible",a:33,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"51",k:"div",b:586,aT:8,aS:8,t:43,aU:8,G:"#E9E9E9"},"53":{b:470,z:"45",K:"None",c:366,L:"None",d:51,M:0,e:"1.000000",bD:"none",N:0,O:0,g:"#4482B5",P:0,Q:0,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:10,k:"div",T:0,S:0,aX:0,aJ:10,aK:10,aL:10,A:"#A0A0A0",Y:"55px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:29,aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],F:"left",G:"#FFFFFF",aP:"pointer",w:"<div>&nbsp; &nbsp; &nbsp; &nbsp; Maintenance</div>",x:"visible",I:"None",a:44,J:"None"},"36":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"32",a:48,j:"absolute",aP:"pointer",b:830},"62":{aV:8,w:"Team Leaders",x:"visible",a:34,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"52",k:"div",b:129,aT:8,aS:8,t:43,aU:8,G:"#E9E9E9"},"45":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"39",a:307,j:"absolute",aP:"pointer",b:769},"28":{aV:8,w:"Steve Rogers",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"29",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"54":{o:"content-box",h:"1",a:51,x:"visible",q:"100% 100%",b:474,j:"absolute",r:"inline",c:43,k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],d:43,z:"46",e:"1.000000",aP:"default",bD:"none"},"37":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"36",e:"1.000000",aP:"default",bD:"none"},"63":{c:771,d:353,I:"None",J:"None",K:"None",g:"#5F6B7D",L:"None",aX:0,M:0,N:0,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:0,k:"div",O:0,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:-3,b:590},"46":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"45",e:"1.000000",aP:"default",bD:"none"},"29":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"22",a:48,j:"absolute",aP:"pointer",b:653},"55":{aV:8,w:"Daniel Westin",x:"visible",a:239,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"47",k:"div",b:260,aT:8,aS:8,t:25,aU:8,G:"#FFFFFF"},"38":{aV:8,w:"Barbara Gordon",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"36",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"47":{aV:8,w:"John Reid",a:50,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"2",k:"div",bF:"45",aT:8,b:0,t:25,aS:8,aU:8,G:"#FFFFFF"},"56":{aV:8,w:"Andrew Clements",x:"visible",a:197,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"48",k:"div",b:392,aT:8,aS:8,t:25,aU:8,G:"#FFFFFF"},"39":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"33",a:307,j:"absolute",aP:"pointer",b:653},"48":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"42",a:310,j:"absolute",aP:"pointer",b:829},"57":{aV:8,w:"Clark Kent",x:"visible",a:278,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"49",k:"div",b:521,aT:8,aS:8,t:25,aU:8,G:"#FFFFFF"},"49":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"48",e:"1.000000",aP:"default",bD:"none"},"58":{k:"div",aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],c:254,x:"visible",d:45,z:"50",a:556,j:"absolute",aP:"pointer",b:653},"59":{o:"content-box",h:"1",a:0,x:"visible",q:"100% 100%",b:1,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"1",bF:"58",e:"1.000000",aP:"default",bD:"none"},"2":{b:210,z:"2",K:"None",c:366,L:"None",d:51,M:0,e:"1.000000",bD:"none",N:0,O:0,g:"#447EB9",P:0,Q:0,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:10,k:"div",T:0,S:0,aX:0,aJ:10,aK:10,aL:10,A:"#A0A0A0",Y:"55px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:29,aA:[{type:5,goToURL:"facetime://thomashicks@mac.com",openInNewWindow:false}],F:"left",G:"#FFFFFF",aP:"pointer",w:"<div>&nbsp; &nbsp; &nbsp; &nbsp; Manager</div>",x:"visible",I:"None",a:39,J:"None"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
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

