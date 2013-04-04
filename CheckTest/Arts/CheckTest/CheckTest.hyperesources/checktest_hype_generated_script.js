//	HYPE.documents["CheckTest"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "CheckTest.hyperesources";
	var documentName = "CheckTest";
	var documentLoaderFilename = "checktest_hype_generated_script.js";
	var mainContainerID = "checktest_hype_container";

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
	
	var resources = {"3":{n:"BackArrow.png",p:1},"1":{n:"OrangeCheckedButton.png",p:1},"4":{n:"StartProcedureButton.png",p:1},"2":{n:"ForewardArrow.png",p:1},"0":{n:"GreyUncheckedButton.png",p:1},"5":{n:"SubmitButton.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#272A2F",v:{"55":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"58":{o:"content-box",h:"2",x:"visible",a:512,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"53":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459},"61":{o:"content-box",h:"3",x:"visible",a:-189,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"56":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"59":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"54":{aV:8,w:"Let's get the store ready for the day.<div><span style=\"color: rgb(255, 255, 255); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(39, 42, 47); \"><br></span></div><div><span style=\"color: rgb(255, 255, 255); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(39, 42, 47); \">Press the arrow and check off each step as completed.</span><div><div><br><div>Be sure to submit once you're done.</div></div></div></div>",x:"visible",a:16,Z:"break-word",b:237,j:"absolute",r:"inline",c:594,z:"2",aS:8,aT:8,d:577,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"75":{o:"content-box",h:"4",x:"visible",a:0,q:"100% 100%",b:38,j:"absolute",r:"inline",c:640,k:"div",z:"13",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"}},n:"01 Copy 2",T:{"15":{d:0.1,i:"15",n:"CheckButton",a:[{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"15"}],o:"15"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"62"},{x:1,p:"600px",c:"#272A2F",v:{"13":{o:"content-box",h:"0",x:"visible",a:243,q:"100% 100%",b:40,j:"absolute",r:"inline",c:153,k:"div",z:"9",d:152},"8":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459},"4":{aV:8,w:"Turn on all lights in both the front and back rooms",x:"visible",a:16,Z:"break-word",b:237,j:"absolute",r:"inline",c:594,z:"2",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"14":{o:"content-box",h:"1",x:"visible",a:243,q:"100% 100%",b:39,j:"absolute",r:"inline",c:153,z:"10",k:"div",d:152,aA:[{type:8,timelineIdentifier:"15"}],e:"0.000000",aP:"pointer"},"9":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"17":{o:"content-box",h:"2",x:"visible",a:512,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"5":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"6":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"10":{c:100,d:100,I:"None",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:11,b:524},"18":{o:"content-box",h:"3",x:"visible",a:-189,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"}},n:"01",T:{"15":{d:0.19,i:"15",n:"CheckButton",a:[{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"14"},{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"15"}],o:"15"},{f:"2",t:0.1,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"14"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"},{x:2,p:"600px",c:"#272A2F",v:{"39":{o:"content-box",h:"3",x:"visible",a:-27,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"34":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"37":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"32":{aV:8,w:"Make sure windows secure and lock properly",x:"visible",a:16,Z:"break-word",b:237,j:"absolute",r:"inline",c:594,z:"2",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"35":{o:"content-box",h:"1",x:"visible",a:243,q:"100% 100%",b:39,j:"absolute",r:"inline",c:153,z:"10",k:"div",d:152,aA:[{type:8,timelineIdentifier:"15"}],e:"0.000000",aP:"pointer"},"30":{o:"content-box",h:"0",x:"visible",a:243,q:"100% 100%",b:40,j:"absolute",r:"inline",c:153,k:"div",z:"9",d:152},"38":{c:100,d:100,I:"None",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:11,b:524},"33":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"36":{o:"content-box",h:"2",x:"visible",a:512,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"31":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459}},n:"01 Copy",T:{"15":{d:0.19,i:"15",n:"CheckButton",a:[{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"35"},{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"15"}],o:"15"},{f:"2",t:0.1,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"35"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"40"},{x:3,p:"600px",c:"#272A2F",v:{"47":{c:100,d:100,I:"None",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:11,b:524},"42":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"50":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459},"45":{o:"content-box",h:"1",x:"visible",a:243,q:"100% 100%",b:39,j:"absolute",r:"inline",c:153,z:"10",k:"div",d:152,aA:[{type:8,timelineIdentifier:"15"}],e:"0.000000",aP:"pointer"},"48":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"43":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"46":{o:"content-box",h:"0",x:"visible",a:243,q:"100% 100%",b:40,j:"absolute",r:"inline",c:153,k:"div",z:"9",d:152},"41":{o:"content-box",h:"3",x:"visible",a:-27,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"49":{o:"content-box",h:"2",x:"visible",a:506,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"44":{aV:8,w:"Get day's register start cash from back room safe",x:"visible",a:6,Z:"break-word",b:237,j:"absolute",r:"inline",c:616,z:"2",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"}},n:"01 Copy Copy",T:{"15":{d:0.19,i:"15",n:"CheckButton",a:[{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"45"},{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"15"}],o:"15"},{f:"2",t:0.1,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"45"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"51"},{x:4,p:"600px",c:"#272A2F",v:{"65":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459},"68":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"63":{c:100,d:100,I:"None",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"7",k:"div",D:"#A0A0A0",a:11,b:524},"71":{o:"content-box",h:"2",x:"visible",a:506,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"66":{o:"content-box",h:"1",x:"visible",a:243,q:"100% 100%",b:39,j:"absolute",r:"inline",c:153,z:"10",k:"div",d:152,aA:[{type:8,timelineIdentifier:"15"}],e:"0.000000",aP:"pointer"},"69":{o:"content-box",h:"0",x:"visible",a:243,q:"100% 100%",b:40,j:"absolute",r:"inline",c:153,k:"div",z:"9",d:152},"64":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"72":{aV:8,w:"Load registers 1 and 2 with starting cash and record in register log",x:"visible",a:6,Z:"break-word",b:237,j:"absolute",r:"inline",c:616,z:"2",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"67":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"70":{o:"content-box",h:"3",x:"visible",a:-27,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"}},n:"01 Copy Copy Copy",T:{"15":{d:0.19,i:"15",n:"CheckButton",a:[{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"66"},{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"15"}],o:"15"},{f:"2",t:0.1,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"66"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"73"},{x:5,p:"600px",c:"#272A2F",v:{"78":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459},"86":{aV:8,w:"You've completed<div>this procedure</div>",x:"visible",a:170,Z:"break-word",b:47,j:"absolute",r:"inline",z:"14",k:"div",aS:8,aT:8,s:"Verdana,Tahoma,Geneva,Sans-Serif",F:"right",t:44,y:"preserve",aU:8,G:"#FF9900",v:"bold"},"81":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"76":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"79":{o:"content-box",h:"3",x:"visible",a:-25,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"82":{aU:8,G:"#FFFFFF",c:594,aV:8,r:"inline",d:499,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Y:"56px",Z:"break-word",w:"You're ready to start the day.<div><br></div><div>Touch the submit button below to record your completion of the Opening Rediness checklist</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:16,b:205},"77":{o:"content-box",h:"2",x:"visible",a:716,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"85":{o:"content-box",h:"5",x:"visible",a:0,q:"100% 100%",b:716,j:"absolute",r:"inline",c:640,k:"div",z:"13",d:152,aA:[{type:8,timelineIdentifier:"kTimelineDefaultIdentifier"}],aP:"pointer"},"80":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"98":{aU:8,G:"#FF9900",c:490,aV:8,r:"inline",d:106,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:44,Z:"break-word",v:"bold",w:"Checklist has been<div>submitted</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"15",aS:8,aT:8,a:644,F:"right",b:737}},n:"01 Copy 2 Copy",T:{"15":{d:0.1,i:"15",n:"CheckButton",a:[{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"15"}],o:"15"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.15,i:"a",e:-642,s:0,o:"85"},{f:"2",t:0,d:0.15,i:"a",e:118,s:644,o:"98"},{f:"2",t:0,d:0.15,i:"b",e:737,s:737,o:"98"},{f:"2",t:0,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"kTimelineDefaultIdentifier"}],o:"kTimelineDefaultIdentifier"}],f:30}},o:"84"}];
	
	var javascripts = [{name:"PlayVid001",source:"function(hypeDocument, element, event) {\nvar myAudio = document.getElementById(\"video001\"); \nmyAudio.play();\t\t\n\t\n\t\n\t\n}",identifier:"12"}];
	
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

