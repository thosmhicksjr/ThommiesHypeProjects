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
	
	var resources = {"0":{n:"ftimage.jpg",p:1},"1":{n:"facetime_by_lrscrew-d31e4ep.png",p:1},"2":{n:"share-icon.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#575757",v:{"25":{o:"content-box",h:"2",x:"visible",a:529,q:"100% 100%",b:339,j:"absolute",r:"inline",c:37,k:"div",z:"25",d:37},"18":{o:"content-box",h:"1",a:128,x:"visible",q:"100% 100%",b:184,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://dballen@vstpumps.com",type:5,openInNewWindow:false}],d:43,z:"17",e:"1.000000",aP:"default",bD:"none"},"10":{b:401,z:"9",K:"Solid",c:137,L:"Solid",d:94,M:1,e:"1.000000",bD:"none",N:1,O:1,g:"#DDEEFF",P:1,Q:8,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:14,k:"div",T:3,l:"0deg",aX:0,aJ:14,m:"#9EA6AB",S:2,n:"#C8CFD4",aK:14,aL:14,A:"#A0A0A0",Y:"96px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:17,aA:[{goToURL:"facetime://3303094259",type:5,openInNewWindow:false}],F:"center",G:"#414141",aP:"pointer",w:"Miki's iPhone",x:"visible",I:"Solid",a:39,J:"Solid"},"26":{c:37,d:35,I:"Solid",J:"Solid",K:"Solid",g:"#E9E9E9",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:1,k:"div",C:"#A0A0A0",z:"24",O:1,D:"#A0A0A0",a:527,b:339},"19":{o:"content-box",h:"1",a:128,x:"visible",q:"100% 100%",b:319,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://mikihicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"18",e:"1.000000",aP:"default",bD:"none"},"11":{b:536,z:"10",K:"Solid",c:137,L:"Solid",d:94,M:1,e:"1.000000",bD:"none",N:1,O:1,g:"#DDEEFF",P:1,Q:8,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:14,k:"div",T:3,l:"0deg",aX:0,aJ:14,m:"#9EA6AB",S:2,n:"#C8CFD4",aK:14,aL:14,A:"#A0A0A0",Y:"96px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:17,aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],F:"center",G:"#414141",aP:"pointer",w:"T's iPad",x:"visible",I:"Solid",a:39,J:"Solid"},"27":{aV:8,w:"To add this page as a shortcut icon on your iPad's desktop, touch the share icon just to the right of the URL box and choose, \"Add to home screen\".<div></div><div>A direct link to this page will be added to your desktop.</div>",a:416,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:296,k:"div",z:"26",aT:8,d:298,t:27,b:392,aS:8,aU:8,G:"#E9E9E9"},"12":{b:671,z:"11",K:"Solid",c:137,L:"Solid",d:94,M:1,e:"1.000000",bD:"none",N:1,O:1,g:"#DDEEFF",P:1,Q:8,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:14,k:"div",T:3,l:"0deg",aX:0,aJ:14,m:"#9EA6AB",S:2,n:"#C8CFD4",aK:14,aL:14,A:"#A0A0A0",Y:"96px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:17,aA:[{goToURL:"facetime://3303094288",type:5,openInNewWindow:false}],F:"center",G:"#414141",aP:"pointer",w:"T's iPhone",x:"visible",I:"Solid",a:39,J:"Solid"},"20":{o:"content-box",h:"1",a:128,x:"visible",q:"100% 100%",b:454,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://3303094259",type:5,openInNewWindow:false}],d:43,z:"19",e:"1.000000",aP:"default",bD:"none"},"2":{b:131,z:"1",K:"Solid",c:137,L:"Solid",d:94,M:1,e:"1.000000",bD:"none",N:1,O:1,g:"#DDEEFF",P:1,Q:8,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:14,k:"div",T:3,l:"0deg",aX:0,aJ:14,m:"#9EA6AB",S:2,n:"#C8CFD4",aK:14,aL:14,A:"#A0A0A0",Y:"96px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:17,aA:[{goToURL:"facetime://dballen@vstpumps.com",type:5,openInNewWindow:false}],F:"center",G:"#414141",aP:"pointer",w:"Doug",x:"visible",I:"Solid",a:39,J:"Solid"},"13":{b:806,z:"12",K:"Solid",c:137,L:"Solid",d:94,M:1,e:"1.000000",bD:"none",N:1,O:1,g:"#DDEEFF",P:1,Q:8,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:14,k:"div",T:3,l:"0deg",aX:0,aJ:14,m:"#9EA6AB",S:2,n:"#C8CFD4",aK:14,aL:14,A:"#A0A0A0",Y:"96px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:17,aA:[{goToURL:"facetime://catsvolley1@yahoo.com",type:5,openInNewWindow:false}],F:"center",G:"#414141",aP:"pointer",w:"Cathy's iPad",x:"visible",I:"Solid",a:39,J:"Solid"},"21":{o:"content-box",h:"1",a:128,x:"visible",q:"100% 100%",b:589,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://thomashicks@mac.com",type:5,openInNewWindow:false}],d:43,z:"20",e:"1.000000",aP:"default",bD:"none"},"14":{b:131,z:"13",K:"Solid",c:137,L:"Solid",d:94,M:1,e:"1.000000",bD:"none",N:1,O:1,g:"#DDEEFF",P:1,Q:8,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:14,k:"div",T:3,l:"0deg",aX:0,aJ:14,m:"#9EA6AB",S:2,n:"#C8CFD4",aK:14,aL:14,A:"#A0A0A0",Y:"96px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:16,aA:[{goToURL:"facetime://8137313038",type:5,openInNewWindow:false}],F:"center",G:"#414141",aP:"pointer",w:"Gordon's iPhone",x:"visible",I:"Solid",a:225,J:"Solid"},"22":{o:"content-box",h:"1",a:128,x:"visible",q:"100% 100%",b:724,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://3303094288",type:5,openInNewWindow:false}],d:43,z:"21",e:"1.000000",aP:"default",bD:"none"},"15":{o:"content-box",h:"1",x:"visible",a:565,q:"100% 100%",b:-10,j:"absolute",r:"inline",c:141,k:"div",z:"14",d:141},"23":{o:"content-box",h:"1",a:128,x:"visible",q:"100% 100%",b:859,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://catsvolley1@yahoo.com",type:5,openInNewWindow:false}],d:43,z:"22",e:"1.000000",aP:"default",bD:"none"},"16":{aV:8,w:"Facetime Connector",x:"visible",a:39,Z:"break-word",y:"preserve",j:"absolute",r:"inline",z:"15",k:"div",b:23,aT:8,aS:8,t:52,aU:8,G:"#E9E9E9"},"24":{aV:8,w:"Click the button to make a Facetime call.<div><br></div><div>It may take a few seconds for Facetime to initiate.</div><div><br></div><div><br></div>",a:410,x:"visible",Z:"break-word",y:"preserve",j:"absolute",r:"inline",c:296,k:"div",z:"23",aT:8,d:188,t:27,b:121,aS:8,aU:8,G:"#E9E9E9"},"17":{o:"content-box",h:"1",a:313,x:"visible",q:"100% 100%",b:184,j:"absolute",r:"inline",c:43,k:"div",aA:[{goToURL:"facetime://8137313038",type:5,openInNewWindow:false}],d:43,z:"16",e:"1.000000",aP:"default",bD:"none"},"9":{b:266,z:"8",K:"Solid",c:137,L:"Solid",d:94,M:1,e:"1.000000",bD:"none",N:1,O:1,g:"#DDEEFF",P:1,Q:8,R:"#2D2D2D",j:"absolute",aW:"0.000000",aI:14,k:"div",T:3,l:"0deg",aX:0,aJ:14,m:"#9EA6AB",S:2,n:"#C8CFD4",aK:14,aL:14,A:"#A0A0A0",Y:"96px",B:"#A0A0A0",C:"#A0A0A0",D:"#A0A0A0",t:17,aA:[{goToURL:"facetime://mikihicks@mac.com",type:5,openInNewWindow:false}],F:"center",G:"#414141",aP:"pointer",w:"Miki's iPad",x:"visible",I:"Solid",a:39,J:"Solid"}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
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

