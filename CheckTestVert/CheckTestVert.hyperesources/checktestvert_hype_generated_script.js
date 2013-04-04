//	HYPE.documents["CheckTestVert"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "CheckTestVert.hyperesources";
	var documentName = "CheckTestVert";
	var documentLoaderFilename = "checktestvert_hype_generated_script.js";
	var mainContainerID = "checktestvert_hype_container";

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
	
	var resources = {"3":{n:"StartProcedureButton.png",p:1},"4":{n:"SubmitButton.png",p:1},"0":{n:"OrangeCheckedButton.png",p:1},"5":{n:"CameraIcon.png",p:1},"1":{n:"ForewardArrow.png",p:1},"6":{n:"GreyUncheckedButton.png",p:1},"2":{n:"BackArrow.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#272A2F",v:{"55":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"58":{o:"content-box",h:"1",x:"visible",a:512,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"53":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459},"61":{o:"content-box",h:"2",x:"visible",a:-189,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"56":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"59":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"54":{aV:8,w:"Let's get the store ready for the day.<div><span style=\"color: rgb(255, 255, 255); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(39, 42, 47); \"><br></span></div><div><span style=\"color: rgb(255, 255, 255); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(39, 42, 47); \">Press the arrow and check off each step as completed.</span><div><div><br><div>Be sure to submit once you're done.</div></div></div></div>",x:"visible",a:16,Z:"break-word",b:237,j:"absolute",r:"inline",c:594,z:"2",aS:8,aT:8,d:577,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"75":{o:"content-box",h:"3",x:"visible",a:0,q:"100% 100%",b:38,j:"absolute",r:"inline",c:640,k:"div",z:"13",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"}},n:"01 Copy 2",T:{"15":{d:0.1,i:"15",n:"CheckButton",a:[{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"15",type:7}],o:"15"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"62"},{x:1,p:"600px",c:"#272A2F",v:{"129":{o:"content-box",h:"6",x:"visible",a:250,q:"100% 100%",b:1504,j:"absolute",r:"inline",c:153,k:"div",z:"35",d:152},"4":{aV:8,w:"Turn on all lights in both the front and back rooms",x:"visible",a:16,Z:"break-word",b:237,j:"absolute",r:"inline",c:594,z:"2",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"116":{o:"content-box",h:"2",x:"visible",a:-179,q:"100% 100%",b:1022,j:"absolute",r:"inline",c:153,k:"div",z:"27",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"13":{o:"content-box",h:"6",x:"visible",a:243,q:"100% 100%",b:40,j:"absolute",r:"inline",c:153,k:"div",z:"8",d:152},"135":{b:1869,z:"41",K:"Solid",c:605,L:"Solid",d:84,M:7,N:7,O:7,P:7,j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#A0A0A0",Y:"74px",B:"#A0A0A0",C:"#A0A0A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#A0A0A0",t:43,aA:[{type:8,timelineIdentifier:"138"},{type:4,javascriptOid:"103"}],F:"center",v:"bold",G:"#D8DCE1",aP:"pointer",w:"Close",x:"visible",I:"Solid",a:682,J:"Solid"},"141":{c:558,d:146,I:"Solid",J:"Solid",s:"Verdana,Tahoma,Geneva,Sans-Serif",K:"Solid",Y:"96px",g:"#D8DCE1",L:"Solid",t:50,aP:"pointer",M:1,v:"bold",w:"<br>",N:1,A:"#A0A0A0",x:"visible",j:"absolute",O:1,P:1,B:"#A0A0A0",C:"#A0A0A0",z:"32",k:"div",D:"#A0A0A0",aI:25,aK:25,aA:[{type:1,sceneOid:"84",transition:5}],a:14,F:"right",b:1958},"14":{o:"content-box",h:"0",x:"visible",a:243,q:"100% 100%",b:39,j:"absolute",r:"inline",c:153,z:"9",k:"div",d:152,aA:[{timelineIdentifier:"15",type:8}],e:"0.000000",aP:"pointer"},"117":{o:"content-box",h:"5",x:"visible",a:576,q:"100% 100%",b:1348,j:"absolute",r:"inline",c:59,k:"div",z:"28",d:53,aA:[{type:3,timelineIdentifier:"137"}],aP:"pointer"},"104":{aV:8,w:"Check board for messages from closing team",x:"visible",a:22,Z:"break-word",b:729,j:"absolute",r:"inline",c:594,z:"15",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"142":{aU:8,G:"#272A2F",aV:8,r:"inline",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:53,Z:"break-word",aP:"pointer",v:"bold",w:"I'm done",j:"absolute",x:"visible",aA:[{type:1,sceneOid:"84",transition:5}],k:"div",y:"preserve",z:"33",aS:8,aT:8,a:286,b:2026},"110":{c:100,d:100,I:"None",r:"inline",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>\n",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"21",k:"div",D:"#A0A0A0",a:681,b:546},"118":{c:100,d:100,I:"None",r:"inline",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>\n",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"29",k:"div",D:"#A0A0A0",a:685,b:1038},"99":{o:"content-box",h:"5",x:"visible",a:566,q:"100% 100%",b:374,j:"absolute",r:"inline",c:59,k:"div",z:"12",d:53,aA:[{type:3,timelineIdentifier:"100"}],aP:"pointer"},"105":{o:"content-box",h:"6",x:"visible",a:249,q:"100% 100%",b:532,j:"absolute",r:"inline",c:153,k:"div",z:"16",d:152},"17":{o:"content-box",h:"1",x:"visible",a:664,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"10",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"111":{b:907,z:"22",K:"Solid",c:605,L:"Solid",d:84,M:7,N:7,O:7,P:7,j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#A0A0A0",Y:"74px",B:"#A0A0A0",C:"#A0A0A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#A0A0A0",t:43,aA:[{type:8,timelineIdentifier:"136"},{type:4,javascriptOid:"103"}],F:"center",v:"bold",G:"#D8DCE1",aP:"pointer",w:"Close",x:"visible",I:"Solid",a:681,J:"Solid"},"18":{o:"content-box",h:"2",x:"visible",a:-189,q:"100% 100%",b:38,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"130":{o:"content-box",h:"0",x:"visible",a:250,q:"100% 100%",b:1503,j:"absolute",r:"inline",c:153,z:"36",k:"div",d:152,aA:[{type:8,timelineIdentifier:"145"}],e:"0.000000",aP:"pointer"},"119":{b:1389,z:"30",K:"Solid",c:605,L:"Solid",d:84,M:7,N:7,O:7,P:7,j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#A0A0A0",Y:"74px",B:"#A0A0A0",C:"#A0A0A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#A0A0A0",t:43,aA:[{type:8,timelineIdentifier:"137"},{type:4,javascriptOid:"103"}],F:"center",v:"bold",G:"#D8DCE1",aP:"pointer",w:"Close",x:"visible",I:"Solid",a:685,J:"Solid"},"106":{o:"content-box",h:"0",x:"visible",a:249,q:"100% 100%",b:531,j:"absolute",r:"inline",c:153,z:"17",k:"div",d:152,aA:[{type:8,timelineIdentifier:"143"}],e:"0.000000",aP:"pointer"},"112":{aV:8,w:"Get day's register start cash from safe in back room",x:"visible",a:26,Z:"break-word",b:1211,j:"absolute",r:"inline",c:594,z:"23",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"131":{o:"content-box",h:"1",x:"visible",a:671,q:"100% 100%",b:1502,j:"absolute",r:"inline",c:153,k:"div",z:"37",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"139":{o:"content-box",h:"1",x:"visible",a:512,q:"100% 100%",b:1954,j:"absolute",r:"inline",c:153,k:"div",z:"31",d:152,aA:[{type:1,sceneOid:"84",transition:5}],aP:"pointer"},"107":{o:"content-box",h:"1",x:"visible",a:670,q:"100% 100%",b:530,j:"absolute",r:"inline",c:153,k:"div",z:"18",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"113":{o:"content-box",h:"6",x:"visible",a:253,q:"100% 100%",b:1024,j:"absolute",r:"inline",c:153,k:"div",z:"24",d:152},"132":{o:"content-box",h:"2",x:"visible",a:-182,q:"100% 100%",b:1502,j:"absolute",r:"inline",c:153,k:"div",z:"38",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"108":{o:"content-box",h:"2",x:"visible",a:-183,q:"100% 100%",b:530,j:"absolute",r:"inline",c:153,k:"div",z:"19",d:152,aA:[{type:1,transition:4,sceneSymbol:2}],aP:"pointer"},"114":{o:"content-box",h:"0",x:"visible",a:255,q:"100% 100%",b:1023,j:"absolute",r:"inline",c:153,z:"25",k:"div",d:152,aA:[{type:8,timelineIdentifier:"144"}],e:"0.000000",aP:"pointer"},"133":{o:"content-box",h:"5",x:"visible",a:573,q:"100% 100%",b:1828,j:"absolute",r:"inline",c:59,k:"div",z:"39",d:53,aA:[{type:3,timelineIdentifier:"138"}],aP:"pointer"},"109":{o:"content-box",h:"5",x:"visible",a:572,q:"100% 100%",b:866,j:"absolute",r:"inline",c:59,k:"div",z:"20",d:53,aA:[{type:3,timelineIdentifier:"136"}],aP:"pointer"},"10":{c:100,d:100,I:"None",r:"inline",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>\n",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"13",k:"div",D:"#A0A0A0",a:675,b:54},"128":{aV:8,w:"<span style=\"color: rgb(255, 255, 255); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(39, 42, 47); \">Load registers 1 and 2 with starting cash and record in register log</span><br>",x:"visible",a:23,Z:"break-word",b:1691,j:"absolute",r:"inline",c:594,z:"34",aS:8,aT:8,d:190,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#FFFFFF",y:"preserve"},"115":{o:"content-box",h:"1",x:"visible",a:674,q:"100% 100%",b:1022,j:"absolute",r:"inline",c:153,k:"div",z:"26",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"134":{c:100,d:100,I:"None",r:"inline",e:"1.000000",J:"None",bD:"none",K:"None",L:"None",M:0,w:"<video width=\"620\" height=\"350\" controls=\"\" preload+\"auto\"=\"\" id=\"video001\">\n<source src=\"http://www.smartsitehq.com/hypetests/CheckTest/movies/ProcessStep1.mp4\" type=\"video/mp4\">\n</video>\n",N:0,A:"#A0A0A0",x:"visible",j:"absolute",O:0,P:0,B:"#A0A0A0",C:"#A0A0A0",z:"40",k:"div",D:"#A0A0A0",a:682,b:1518},"102":{b:415,z:"14",K:"Solid",c:605,L:"Solid",d:84,M:7,N:7,O:7,P:7,j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#A0A0A0",Y:"74px",B:"#A0A0A0",C:"#A0A0A0",s:"Verdana,Tahoma,Geneva,Sans-Serif",D:"#A0A0A0",t:43,aA:[{type:8,timelineIdentifier:"100"},{type:4,javascriptOid:"103"}],F:"center",v:"bold",G:"#D8DCE1",aP:"pointer",w:"Close",x:"visible",I:"Solid",a:675,J:"Solid"}},n:"01",T:{"145":{d:0.2,i:"145",n:"Checkbutton4",a:[{f:"2",t:0,d:0.11,i:"e",e:"1.000000",s:"0.000000",o:"130"},{f:"2",t:0.11,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"145"}],o:"145"},{f:"2",t:0.11,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"130"}],f:30},"138":{d:0.26,i:"138",n:"MovieIn4",a:[{f:"2",t:0,d:0.15,i:"a",e:10,s:682,o:"135"},{f:"2",t:0,d:0.15,i:"a",e:10,s:682,o:"134"},{f:"2",t:0,d:0.26,i:"b",e:1518,s:1518,o:"134"},{f:"2",t:0,d:0.26,i:"b",e:1869,s:1869,o:"135"},{f:"2",t:0.15,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"138"}],o:"138"},{f:"2",t:0.15,d:0.11,i:"a",e:678,s:10,o:"134"},{f:"2",t:0.15,d:0.11,i:"a",e:678,s:10,o:"135"}],f:30},"144":{d:0.22,i:"144",n:"Checkbutton3",a:[{f:"2",t:0,d:0.11,i:"e",e:"1.000000",s:"0.000000",o:"114"},{f:"2",t:0.11,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"144"}],o:"144"},{f:"2",t:0.11,d:0.11,i:"e",e:"0.000000",s:"1.000000",o:"114"}],f:30},"137":{d:0.26,i:"137",n:"MovieIn3",a:[{f:"2",t:0,d:0.13,i:"a",e:11,s:685,o:"119"},{f:"2",t:0,d:0.13,i:"a",e:11,s:685,o:"118"},{f:"2",t:0,d:0.26,i:"b",e:1038,s:1038,o:"118"},{f:"2",t:0,d:0.26,i:"b",e:1389,s:1389,o:"119"},{f:"2",t:0.13,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"137"}],o:"137"},{f:"2",t:0.13,d:0.13,i:"a",e:685,s:11,o:"118"},{f:"2",t:0.13,d:0.13,i:"a",e:685,s:11,o:"119"}],f:30},"143":{d:0.2,i:"143",n:"CheckButton2",a:[{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"106"},{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"143"}],o:"143"},{f:"2",t:0.1,d:0.1,i:"e",e:"0.000000",s:"1.000000",o:"106"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"100":{d:0.26,i:"100",n:"MovieIn1",a:[{f:"2",t:0,d:0.13,i:"a",e:11,s:675,o:"10"},{f:"2",t:0,d:0.13,i:"a",e:9,s:675,o:"102"},{f:"2",t:0.13,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"100"}],o:"100"},{f:"2",t:0.13,d:0.13,i:"a",e:661,s:11,o:"10"},{f:"2",t:0.13,d:0.13,i:"a",e:659,s:9,o:"102"}],f:30},"15":{d:0.19,i:"15",n:"CheckButton",a:[{f:"2",t:0,d:0.1,i:"e",e:"1.000000",s:"0.000000",o:"14"},{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"15",type:7}],o:"15"},{f:"2",t:0.1,d:0.09,i:"e",e:"0.000000",s:"1.000000",o:"14"}],f:30},"136":{d:0.25,i:"136",n:"MovieIn2",a:[{f:"2",t:0,d:0.12,i:"a",e:9,s:681,o:"111"},{f:"2",t:0,d:0.12,i:"a",e:9,s:681,o:"110"},{f:"2",t:0.12,d:0.13,i:"b",e:546,s:546,o:"110"},{f:"2",t:0.12,d:0.13,i:"b",e:907,s:907,o:"111"},{f:"2",t:0.12,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"136"}],o:"136"},{f:"2",t:0.12,d:0.13,i:"a",e:675,s:9,o:"110"},{f:"2",t:0.12,d:0.13,i:"a",e:675,s:9,o:"111"}],f:30}},o:"1"},{x:2,p:"600px",c:"#272A2F",v:{"78":{aU:8,G:"#000000",c:90,aV:8,r:"none",d:62,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Z:"break-word",w:"yes",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:100,F:"center",b:459},"86":{aV:8,w:"You've completed<div>this procedure</div>",x:"visible",a:170,Z:"break-word",b:1311,j:"absolute",r:"inline",z:"14",k:"div",aS:8,aT:8,s:"Verdana,Tahoma,Geneva,Sans-Serif",F:"right",t:44,y:"preserve",aU:8,G:"#FF9900",v:"bold"},"81":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"4",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:417,aL:25,b:317},"76":{aV:8,w:"<div style=\"text-align: center;\"><span style=\"color: rgb(0, 0, 0); font-family: Verdana, Tahoma, Geneva, sans-serif; font-size: 51px; background-color: rgb(255, 255, 255); \">no</span></div>",x:"visible",a:442,Z:"break-word",b:459,j:"absolute",r:"none",c:90,z:"6",aS:8,aT:8,d:62,k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,aU:8,G:"#000000",y:"preserve"},"79":{o:"content-box",h:"2",x:"visible",a:-25,q:"100% 100%",b:1302,j:"absolute",r:"inline",c:153,k:"div",z:"12",d:152,aA:[{type:1,sceneOid:"1",transition:4}],aP:"pointer"},"82":{aU:8,G:"#FFFFFF",c:594,aV:8,r:"inline",d:499,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:51,Y:"56px",Z:"break-word",w:"You're ready to start the day.<div><br></div><div>Touch the submit button below to record your completion of the Opening Rediness checklist</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:16,b:1469},"77":{o:"content-box",h:"1",x:"visible",a:738,q:"100% 100%",b:1282,j:"absolute",r:"inline",c:153,k:"div",z:"11",d:152,aA:[{type:1,transition:5,sceneSymbol:1}],aP:"pointer"},"85":{o:"content-box",h:"4",x:"visible",a:0,q:"100% 100%",b:1980,j:"absolute",r:"inline",c:640,k:"div",z:"13",d:152,aA:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:8}],aP:"pointer"},"80":{c:150,d:150,I:"None",r:"none",J:"None",K:"None",g:"#D8DBDF",L:"None",M:0,N:0,aI:25,A:"#D7DCDE",x:"visible",j:"absolute",O:0,P:0,B:"#D7DCDE",C:"#D7DCDE",z:"3",k:"div",D:"#D7DCDE",aJ:25,aK:25,a:77,aL:25,b:317},"98":{aU:8,G:"#FF9900",c:490,aV:8,r:"inline",d:106,s:"Verdana,Tahoma,Geneva,Sans-Serif",t:44,Z:"break-word",v:"bold",w:"Checklist has been<div>submitted</div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"15",aS:8,aT:8,a:644,F:"right",b:2001}},n:"01 Copy 2 Copy",T:{"15":{d:0.1,i:"15",n:"CheckButton",a:[{f:"2",t:0.1,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"15",type:7}],o:"15"}],f:30},"16":{d:0,i:"16",n:"Play",a:[],f:30},kTimelineDefaultIdentifier:{d:0.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:0.15,i:"a",e:-642,s:0,o:"85"},{f:"2",t:0,d:0.15,i:"a",e:118,s:644,o:"98"},{f:"2",t:0,d:0.15,i:"b",e:2001,s:2001,o:"98"},{f:"2",t:0,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"kTimelineDefaultIdentifier",type:7}],o:"kTimelineDefaultIdentifier"}],f:30}},o:"84"}];
	
	var javascripts = [{name:"PlayVid001",source:"function(hypeDocument, element, event) {\nvar myAudio = document.getElementById(\"video001\"); \nmyAudio.play();\t\t\n\t\n\t\n\t\n}",identifier:"12"},{name:"PauseVideo",source:"function(hypeDocument, element, event) {var myAudio = document.getElementById(\"video001\"); \nmyAudio.pause();\t\n\t\n}",identifier:"103"}];
	
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

