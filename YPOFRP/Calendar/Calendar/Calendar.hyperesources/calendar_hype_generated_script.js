//	HYPE.documents["Calendar"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Calendar.hyperesources";
	var documentName = "Calendar";
	var documentLoaderFilename = "calendar_hype_generated_script.js";
	var mainContainerID = "calendar_hype_container";

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
	
	var resources = {"0":{n:"YPOCalendar.jpg",p:1},"1":{n:"arrow.gif",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"9":{c:194,d:55,I:"Solid",r:"inline",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"8",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"16",type:3}],a:551,b:472},"32":{o:"content-box",h:"1",x:"visible",a:792,q:"100% 100%",b:243,j:"absolute",r:"inline",c:27,k:"div",z:"22",d:46,aB:[{type:8,timelineIdentifier:"16"}]},"18":{b:139,z:"15",K:"Solid",c:401,L:"Solid",d:238,M:5,e:"1.000000",N:5,O:5,g:"#000000",P:5,j:"absolute",k:"div",aI:20,l:"0deg",aJ:20,m:"#002447",n:"#004A94",aK:20,aL:20,A:"#4E77A0",B:"#4E77A0",r:"inline",C:"#4E77A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#4E77A0",G:"#F4F9FF",w:"<center><div><br></div><div><br></div><center><br></center><center><br></center>\n\n\n\u2022 Conduct an onboarding session with</center><center>day chairs.<div></div></center>\n\n",aB:[{timelineIdentifier:"19",type:8}],x:"visible",I:"Solid",a:777,J:"Solid"},"26":{o:"content-box",h:"1",x:"visible",a:792,q:"100% 100%",b:243,j:"absolute",r:"inline",c:27,k:"div",z:"10",d:46,aB:[{type:8,timelineIdentifier:"10"}]},"11":{b:139,z:"9",K:"Solid",c:401,L:"Solid",d:268,M:5,e:"1.000000",N:5,O:5,g:"#000000",P:5,j:"absolute",k:"div",aI:20,l:"0deg",aJ:20,m:"#002447",n:"#004A94",aK:20,aL:20,A:"#4E77A0",B:"#4E77A0",r:"inline",C:"#4E77A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#4E77A0",G:"#F4F9FF",w:"<center>\n\n\n\u2022 Collaborate within your region to leverage resources.<div><br></div><div>\u2022 Determine details.</div><div><br></div><div>\u2022 E-CODE each event.</div><div><br></div><div>\u2022 Review the YPO-WPO Curriculum.</div><div><br></div><div>\u2022 Get contracts in place.</div><div><br></div><div>\u2022 Recruit day chairs.</div></center>",aB:[{timelineIdentifier:"10",type:8}],x:"visible",I:"Solid",a:777,J:"Solid"},"27":{o:"content-box",h:"1",x:"visible",a:792,q:"100% 100%",b:243,j:"absolute",r:"inline",c:27,k:"div",z:"12",d:46,aA:[],aB:[{type:8,timelineIdentifier:"12"}],aP:"pointer"},"28":{o:"content-box",h:"1",x:"visible",a:792,q:"100% 100%",b:243,j:"absolute",r:"inline",c:27,k:"div",z:"14",d:46,aB:[{type:8,timelineIdentifier:"15"}]},"2":{o:"content-box",h:"0",x:"visible",a:0,q:"100% 100%",b:40,j:"absolute",r:"inline",c:760,k:"div",z:"1",d:500,bH:"0deg"},"13":{b:139,z:"11",K:"Solid",c:401,L:"Solid",d:238,M:5,e:"1.000000",N:5,O:5,g:"#000000",P:5,j:"absolute",k:"div",aI:20,l:"0deg",aJ:20,m:"#002447",n:"#004A94",aK:20,aL:20,A:"#4E77A0",B:"#4E77A0",r:"inline",C:"#4E77A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#4E77A0",G:"#F4F9FF",w:"<center><div><br></div><div><br></div>\n\n\n\u2022 Develop your marketing plan and materials.<div><br></div><div>\u2022 Create invitations.</div></center>\n\n",aB:[{timelineIdentifier:"12",type:8}],x:"visible",I:"Solid",a:777,J:"Solid"},"3":{c:720,d:55,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"2",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"10",type:3}],a:15,b:86},"21":{b:139,z:"17",K:"Solid",c:401,L:"Solid",d:238,M:5,e:"1.000000",N:5,O:5,g:"#000000",P:5,j:"absolute",k:"div",aI:20,l:"0deg",aJ:20,m:"#002447",n:"#004A94",aK:20,aL:20,A:"#4E77A0",B:"#4E77A0",r:"inline",C:"#4E77A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#4E77A0",G:"#F4F9FF",w:"<center><div><br></div><div><br></div><center><br></center><center><br></center>\n\n\n\u2022 Implement your marketing plan.<br>\n<br>\n</center><center><div>\u2022 Introduce your theme and</div><div>preview future events.</div></center>\n\n",aB:[{timelineIdentifier:"20",type:8}],x:"visible",I:"Solid",a:777,J:"Solid"},"29":{o:"content-box",h:"1",x:"visible",a:792,q:"100% 100%",b:243,j:"absolute",r:"inline",c:27,k:"div",z:"16",d:46,aB:[{type:8,timelineIdentifier:"19"}]},"4":{c:720,d:55,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"3",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"12",type:3}],a:12,b:153},"14":{b:139,z:"13",K:"Solid",c:401,L:"Solid",d:238,M:5,e:"1.000000",N:5,O:5,g:"#000000",P:5,j:"absolute",k:"div",aI:20,l:"0deg",aJ:20,m:"#002447",n:"#004A94",aK:20,aL:20,A:"#4E77A0",B:"#4E77A0",r:"inline",C:"#4E77A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#4E77A0",G:"#F4F9FF",w:"<center><div><br></div><div><br></div>\n\n\n\u2022 Attend the EOs\u2019 Workshop and the GLC.<div><br></div><div>\u2022 Finalize your program and marketing plan.</div></center>\n\n",aB:[{timelineIdentifier:"15",type:8}],x:"visible",I:"Solid",a:777,J:"Solid"},"5":{c:340,d:55,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"4",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"15",type:3}],a:70,b:215},"6":{c:205,d:55,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"5",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"19",type:3}],a:67,b:279},"30":{o:"content-box",h:"1",x:"visible",a:792,q:"100% 100%",b:243,j:"absolute",r:"inline",c:27,k:"div",z:"18",d:46,aB:[{type:8,timelineIdentifier:"20"}]},"23":{b:139,z:"19",K:"Solid",c:401,L:"Solid",d:238,M:5,e:"1.000000",N:5,O:5,g:"#000000",P:5,j:"absolute",k:"div",aI:20,l:"0deg",aJ:20,m:"#002447",n:"#004A94",aK:20,aL:20,A:"#4E77A0",B:"#4E77A0",r:"inline",C:"#4E77A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#4E77A0",G:"#F4F9FF",w:"<center><div><br></div><div><br></div><center><br></center><center><br></center>\n\n\n\u2022 Compare budgeted to actual costs.</center>\n\n",aB:[{timelineIdentifier:"22",type:8}],x:"visible",I:"Solid",a:777,J:"Solid"},"7":{c:475,d:55,I:"Solid",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"6",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"20",type:3}],a:277,b:342},"8":{c:480,d:55,I:"Solid",r:"inline",e:"0.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",aB:[{timelineIdentifier:"22",type:3}],a:277,b:406},"31":{o:"content-box",h:"1",x:"visible",a:792,q:"100% 100%",b:243,j:"absolute",r:"inline",c:27,k:"div",z:"20",d:46,aB:[{type:8,timelineIdentifier:"22"}]},"24":{aV:8,w:"Touch each Key Task to see how to implement",x:"visible",a:153,Z:"break-word",b:1,j:"absolute",r:"inline",z:"23",k:"div",aS:8,aT:8,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:16,y:"preserve",aU:8,G:"#263C8E",v:"bold"},"17":{b:139,z:"21",K:"Solid",c:401,L:"Solid",d:238,M:5,e:"1.000000",N:5,O:5,g:"#000000",P:5,j:"absolute",k:"div",aI:20,l:"0deg",aJ:20,m:"#002447",n:"#004A94",aK:20,aL:20,A:"#4E77A0",B:"#4E77A0",r:"inline",C:"#4E77A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#4E77A0",G:"#F4F9FF",w:"<center><div><br></div><div><br></div>\n\n\n\u2022 Work with day chairs to confirm event details.<div><br></div><div>\u2022 Manage marketing.</div><div><br></div><div>\u2022 Post event photos and videos.</div><div><br></div><div>\u2022 Evaluate events.</div><div><br></div><div>\u2022 Host a thank-you event for day chairs.</div></center>\n",aB:[{timelineIdentifier:"16",type:8}],x:"visible",I:"Solid",a:777,J:"Solid"}},n:"Untitled Scene",T:{"16":{d:1,i:"16",n:"ManageDayChairs",a:[{f:"2",t:0,d:0.15,i:"a",e:178,s:777,o:"17"},{f:"2",t:0,d:0.15,i:"a",e:188,s:792,o:"32"},{f:"2",t:0,d:1,i:"b",e:243,s:243,o:"32"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"16",type:7}],o:"16"},{f:"2",t:0.15,d:0.15,i:"a",e:-421,s:178,o:"17"},{f:"2",t:0.15,d:0.15,i:"a",e:-407,s:188,o:"32"}],f:30},"19":{d:1,i:"19",n:"SetDayChair",a:[{f:"2",t:0,d:0.15,i:"a",e:178,s:777,o:"18"},{f:"2",t:0,d:0.15,i:"a",e:188,s:792,o:"29"},{f:"2",t:0,d:1,i:"b",e:243,s:243,o:"29"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"19",type:7}],o:"19"},{f:"2",t:0.15,d:0.15,i:"a",e:-421,s:178,o:"18"},{f:"2",t:0.15,d:0.15,i:"a",e:-407,s:188,o:"29"}],f:30},"22":{d:1,i:"22",n:"TrackExpendatures",a:[{f:"2",t:0,d:0.15,i:"a",e:178,s:777,o:"23"},{f:"2",t:0,d:0.15,i:"a",e:188,s:792,o:"31"},{f:"2",t:0,d:1,i:"b",e:243,s:243,o:"31"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"22",type:7}],o:"22"},{f:"2",t:0.15,d:0.15,i:"a",e:-421,s:178,o:"23"},{f:"2",t:0.15,d:0.15,i:"a",e:-407,s:188,o:"31"}],f:30},"12":{d:1,i:"12",n:"Strategize",a:[{f:"2",t:0,d:0.15,i:"a",e:178,s:777,o:"13"},{f:"2",t:0,d:0.15,i:"a",e:188,s:792,o:"27"},{f:"2",t:0,d:1,i:"b",e:243,s:243,o:"27"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"12",type:7}],o:"12"},{f:"2",t:0.15,d:0.15,i:"a",e:-421,s:178,o:"13"},{f:"2",t:0.15,d:0.15,i:"a",e:-407,s:188,o:"27"}],f:30},"20":{d:1,i:"20",n:"MarketProgram",a:[{f:"2",t:0,d:0.15,i:"a",e:178,s:777,o:"21"},{f:"2",t:0,d:0.15,i:"a",e:188,s:792,o:"30"},{f:"2",t:0,d:1,i:"b",e:243,s:243,o:"30"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"20",type:7}],o:"20"},{f:"2",t:0.15,d:0.15,i:"a",e:-421,s:178,o:"21"},{f:"2",t:0.15,d:0.15,i:"a",e:-407,s:188,o:"30"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"10":{d:1,i:"10",n:"DesignYourP",a:[{f:"2",t:0,d:0.15,i:"a",e:178,s:777,o:"11"},{f:"2",t:0,d:0.15,i:"a",e:188,s:792,o:"26"},{f:"2",t:0,d:1,i:"b",e:243,s:243,o:"26"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"10",type:7}],o:"10"},{f:"2",t:0.15,d:0.15,i:"a",e:-421,s:178,o:"11"},{f:"2",t:0.15,d:0.15,i:"a",e:-407,s:188,o:"26"}],f:30},"15":{d:1,i:"15",n:"Refine",a:[{f:"2",t:0,d:0.15,i:"a",e:178,s:777,o:"14"},{f:"2",t:0,d:0.15,i:"a",e:188,s:792,o:"28"},{f:"2",t:0,d:1,i:"b",e:243,s:243,o:"28"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"15",type:7}],o:"15"},{f:"2",t:0.15,d:0.15,i:"a",e:-421,s:178,o:"14"},{f:"2",t:0.15,d:0.15,i:"a",e:-407,s:188,o:"28"}],f:30}},o:"1"}];
	
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

