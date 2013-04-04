//	HYPE.documents["PinterestMenu"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "PinterestMenu.hyperesources";
	var documentName = "PinterestMenu";
	var documentLoaderFilename = "pinterestmenu_hype_generated_script.js";
	var mainContainerID = "pinterestmenu_hype_container";

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
	
	var resources = {"3":{n:"JohnBW720.jpg",p:1},"1":{n:"SteveBW720.jpg",p:1},"4":{n:"Thommie720.jpg",p:1},"2":{n:"WillKbw720.jpg",p:1},"0":{n:"CathieBW720.jpg",p:1},"5":{n:"WillBW720.jpg",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"3":{c:161,d:286,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Two",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"2",k:"div",D:"#A0A0A0",a:270,b:20},"12":{c:128,d:290,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Nine",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"10",k:"div",D:"#A0A0A0",a:269,b:466},"21":{aU:8,G:"#990000",c:77,aV:8,r:"inline",d:72,t:20,Z:"break-word",v:"bold",w:"Text About Chap 3",j:"absolute",x:"visible",k:"div",y:"preserve",z:"18",aS:8,aT:8,a:463,F:"right",b:104},"4":{c:117,d:286,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Three",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",a:445,b:21},"30":{o:"content-box",h:"4",x:"visible",a:269,q:"100% 100%",b:514,j:"absolute",r:"inline",c:129,k:"div",z:"23",d:92},"13":{c:223,d:197,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Eleven",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"11",k:"div",D:"#A0A0A0",a:52,b:789},"5":{c:210,d:200,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Four",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"4",k:"div",D:"#A0A0A0",a:43,b:217},"22":{G:"#FFFFFF",c:212,aE:[{type:3,timelineIdentifier:"kTimelineDefaultIdentifier"}],d:175,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#6F8DAA",L:"Solid",M:1,v:"bold",w:"<div><br></div><div><br></div><div><br></div><div><br></div><div><span style=\"background-color: rgb(111, 141, 170); text-align: center; \">Some information.</span><br></div>",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"25",k:"div",D:"#A0A0A0",aB:[{type:3,timelineIdentifier:"23"}],a:42,F:"center",b:21},"31":{o:"content-box",h:"5",x:"visible",a:271,q:"100% 100%",b:85,j:"absolute",r:"inline",c:161,k:"div",z:"24",d:109},"14":{c:261,d:268,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Twelve",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"12",k:"div",D:"#A0A0A0",a:302,b:790},"40":{c:87,d:145,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Eight",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"35",k:"div",D:"#A0A0A0",a:163,b:1775},"7":{c:292,d:129,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Five",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"5",k:"div",D:"#A0A0A0",a:269,b:322},"32":{c:212,d:175,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter One",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"27",k:"div",D:"#A0A0A0",a:43,F:"center",b:1187},"15":{c:224,d:165,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Thirteen",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"13",k:"div",D:"#A0A0A0",a:51,b:1001},"41":{c:128,d:290,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Nine",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"36",k:"div",D:"#A0A0A0",a:270,b:1633},"8":{c:204,d:162,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Six",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"6",k:"div",D:"#A0A0A0",a:47,b:432},"50":{o:"content-box",h:"0",x:"visible",a:44,q:"100% 100%",b:1220,j:"absolute",r:"inline",c:212,k:"div",z:"45",d:143},"33":{c:161,d:286,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Two",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"28",k:"div",D:"#A0A0A0",a:271,b:1187},"16":{c:100,d:92,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Fourteen",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"14",k:"div",D:"#A0A0A0",a:304,b:1075},"42":{c:223,d:197,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Eleven",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"37",k:"div",D:"#A0A0A0",a:53,b:1956},"24":{G:"#FFFFFF",c:161,aE:[{type:3,timelineIdentifier:"kTimelineDefaultIdentifier"}],d:286,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#6A88BE",L:"Solid",M:1,v:"bold",w:"<div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div style=\"text-align: center;\"><span style=\"background-color: rgb(106, 136, 190); color: rgb(255, 255, 255); font-weight: bold; \">Some Information</span></div>",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"26",k:"div",D:"#A0A0A0",aB:[{type:3,timelineIdentifier:"25"}],a:270,b:20},"51":{o:"content-box",h:"1",x:"visible",a:44,q:"100% 100%",b:1443,j:"absolute",r:"inline",c:212,k:"div",z:"46",d:143},"34":{c:117,d:286,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Three",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"29",k:"div",D:"#A0A0A0",a:446,b:1188},"17":{c:144,d:93,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Fifteen",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"15",k:"div",D:"#A0A0A0",a:417,b:1074},"43":{c:261,d:268,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Twelve",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"38",k:"div",D:"#A0A0A0",a:303,b:1957},"26":{o:"content-box",h:"0",x:"visible",a:43,q:"100% 100%",b:53,j:"absolute",r:"inline",c:212,k:"div",z:"19",d:143},"52":{o:"content-box",h:"2",x:"visible",a:368,q:"100% 100%",b:1489,j:"absolute",r:"inline",c:195,k:"div",z:"47",d:130},"35":{c:210,d:200,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Four",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"30",k:"div",D:"#A0A0A0",a:44,b:1384},"9":{c:142,d:291,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Ten",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:419,b:464},"44":{c:224,d:165,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Thirteen",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"39",k:"div",D:"#A0A0A0",a:52,b:2168},"27":{o:"content-box",h:"1",x:"visible",a:43,q:"100% 100%",b:276,j:"absolute",r:"inline",c:212,k:"div",z:"20",d:143},"53":{o:"content-box",h:"3",x:"visible",a:49,q:"100% 100%",b:1626,j:"absolute",r:"inline",c:204,k:"div",z:"48",d:136},"36":{c:292,d:129,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Five",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"31",k:"div",D:"#A0A0A0",a:270,b:1489},"19":{aV:8,w:"Text About Chap 1",x:"visible",a:50,Z:"break-word",b:120,j:"absolute",r:"inline",c:151,z:"16",aS:8,aT:8,d:50,k:"div",t:23,y:"preserve",aU:8,G:"#990000",v:"bold"},"45":{c:100,d:92,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Fourteen",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"40",k:"div",D:"#A0A0A0",a:305,b:2242},"28":{o:"content-box",h:"2",x:"visible",a:367,q:"100% 100%",b:322,j:"absolute",r:"inline",c:195,k:"div",z:"21",d:130},"54":{o:"content-box",h:"4",x:"visible",a:270,q:"100% 100%",b:1681,j:"absolute",r:"inline",c:129,k:"div",z:"49",d:92},"37":{c:204,d:162,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Six",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"32",k:"div",D:"#A0A0A0",a:48,b:1599},"46":{c:144,d:93,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Fifteen",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"41",k:"div",D:"#A0A0A0",a:418,b:2241},"29":{o:"content-box",h:"3",x:"visible",a:48,q:"100% 100%",b:459,j:"absolute",r:"inline",c:204,k:"div",z:"22",d:136},"55":{o:"content-box",h:"5",x:"visible",a:272,q:"100% 100%",b:1252,j:"absolute",r:"inline",c:161,k:"div",z:"50",d:109},"38":{c:142,d:291,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Ten",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"33",k:"div",D:"#A0A0A0",a:420,b:1631},"47":{aV:8,w:"Text About Chap 1",x:"visible",a:51,Z:"break-word",b:1287,j:"absolute",r:"inline",c:151,z:"42",aS:8,aT:8,d:50,k:"div",t:23,y:"preserve",aU:8,G:"#990000",v:"bold"},"56":{G:"#FFFFFF",c:212,aE:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:3}],d:175,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#6F8DAA",L:"Solid",M:1,v:"bold",w:"<div><br></div><div><br></div><div><br></div><div><br></div><div><span style=\"background-color: rgb(111, 141, 170); text-align: center; \">Some information.</span><br></div>",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"51",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"23",type:3}],a:43,F:"center",b:1188},"39":{c:100,d:147,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Seven",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"34",k:"div",D:"#A0A0A0",a:50,b:1775},"48":{aV:8,w:"Text About Chap 2",x:"visible",a:295,Z:"break-word",b:1384,j:"absolute",r:"inline",c:83,z:"43",aS:8,aT:8,d:72,k:"div",t:20,y:"preserve",aU:8,G:"#990000",v:"bold"},"57":{G:"#FFFFFF",c:161,aE:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:3}],d:286,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#6A88BE",L:"Solid",M:1,v:"bold",w:"<div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div><br></div><div style=\"text-align: center;\"><span style=\"background-color: rgb(106, 136, 190); color: rgb(255, 255, 255); font-weight: bold; \">Some Information</span></div>",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"52",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"25",type:3}],a:281,b:1197},"49":{aU:8,G:"#990000",c:77,aV:8,r:"inline",d:72,t:20,Z:"break-word",v:"bold",w:"Text About Chap 3",j:"absolute",x:"visible",k:"div",y:"preserve",z:"44",aS:8,aT:8,a:464,F:"right",b:1271},"10":{c:100,d:147,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Seven",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"8",k:"div",D:"#A0A0A0",a:49,b:608},"11":{c:87,d:145,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter Eight",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"9",k:"div",D:"#A0A0A0",a:162,b:608},"2":{c:212,d:175,I:"Solid",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,w:"Thing from Chapter One",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"1",k:"div",D:"#A0A0A0",a:42,F:"center",b:20},"20":{aV:8,w:"Text About Chap 2",x:"visible",a:294,Z:"break-word",b:217,j:"absolute",r:"inline",c:83,z:"17",aS:8,aT:8,d:72,k:"div",t:20,y:"preserve",aU:8,G:"#990000",v:"bold"}},n:"Untitled Scene",T:{"23":{d:1.14,i:"23",n:"ThingOne",a:[{f:"2",t:0,d:1.14,i:"e",e:"1.000000",s:"0.000000",o:"22"}],f:30},"25":{d:1,i:"25",n:"Thing2",a:[{f:"2",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"24"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"}];
	
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

