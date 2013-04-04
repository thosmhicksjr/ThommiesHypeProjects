//	HYPE.documents["ShortBook"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "ShortBook.resources";
	var documentName = "ShortBook";
	var documentLoaderFilename = "shortbook_hype_generated_script.js";
	var mainContainerID = "shortbook_hype_container";

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
	if(typeof HYPE_150 == "undefined") {
		if(typeof window.HYPE_150_DocumentsToLoad == "undefined") {
			window.HYPE_150_DocumentsToLoad = new Array();
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=150';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_150_DocumentsToLoad.push(HYPE_DocumentLoader);
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
	
	var hypeDoc = new HYPE_150();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",S:"i",aI:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",aZ:"i",X:"i",A:"c",bK:"f",Y:"bM",B:"c",aL:"i",C:"c",bL:"f",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};
	
	var resources = {"10":{n:"control_bar.png",p:1},"2":{n:"moby-dick.jpg",p:1},"15":{n:"quiz-1.png",p:1},"3":{n:"button-1.png",p:1},"11":{n:"next_sm.png",p:1},"4":{n:"whale2.png",p:1},"16":{n:"quiz_sm.png",p:1},"5":{n:"whale3.png",p:1},"12":{n:"previous_sm.png",p:1},"17":{n:"quiz_sm.png",p:1},"6":{n:"boat.png",p:1},"13":{n:"sm_background.png",p:1},"7":{n:"boat_lg.png",p:1},"18":{n:"quiz.png",p:1},"0":{n:"button.png",p:1},"8":{n:"ahab.png",p:1},"14":{n:"quiz_sm-1.png",p:1},"1":{n:"divider.png",p:1},"9":{n:"Moby%20Dick%20vs%20The%20Final%20Count%20Down.mp4"}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"39":{o:"content-box",h:"3",x:"visible",a:280,q:"100% 100%",b:830,j:"absolute",r:"inline",c:215,z:"27",k:"div",d:81,aB:[{type:1,transition:1,sceneSymbol:1}],e:"1.000000",aP:"pointer"},"7":{o:"content-box",h:"1",x:"visible",a:43,q:"100% 100%",b:93,j:"absolute",r:"inline",c:681,k:"div",z:"6",d:2},"11":{aU:8,G:"#333333",c:221,aV:8,r:"inline",d:42,e:"0.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:50,Y:"50px",Z:"break-word",v:"normal",w:"Next",j:"absolute",x:"visible",k:"div",y:"preserve",aB:[{type:1,transition:1,sceneSymbol:3}],z:"20",aS:8,aT:8,a:264,F:"center",b:795},"4":{o:"content-box",h:"0",x:"visible",a:236,q:"100% 100%",b:770,j:"absolute",r:"inline",c:283,z:"19",k:"div",d:107,aB:[{type:0}],e:"0.000000"},"40":{aU:8,G:"#333333",c:159,aV:8,r:"inline",d:28,e:"1.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:36,Y:"50px",Z:"break-word",v:"normal",w:"Let's start",j:"absolute",x:"visible",k:"div",y:"preserve",aB:[{type:1,transition:1,sceneSymbol:1}],z:"28",aS:8,aT:8,a:304,b:840},"35":{o:"content-box",h:"2",x:"visible",a:40,q:"100% 100%",b:97,j:"absolute",r:"inline",c:688,k:"div",z:"25",d:688},"79":{o:"content-box",h:"13",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:768,k:"div",z:"4",d:926},"8":{aU:8,G:"#797879",c:267,aV:8,r:"inline",d:29,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:48,Y:"21px",Z:"break-word",w:"Moby Dick",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:259,b:46},"36":{aU:8,G:"#797879",c:210,aV:8,r:"inline",d:29,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:24,Y:"21px",Z:"break-word",w:"by: Herman Melville",j:"absolute",x:"visible",k:"div",y:"preserve",z:"26",aS:8,aT:8,a:275,b:795}},n:"Start",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"12"},{x:1,p:"600px",c:"#D6D6D4",v:{"57":{o:"content-box",h:"10",x:"visible",a:7,q:"100% 100%",b:870,j:"absolute",r:"inline",c:752,k:"div",z:"29",d:48},"80":{o:"content-box",h:"13",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:768,k:"div",z:"4",d:926},"58":{o:"content-box",h:"11",x:"visible",a:634,q:"100% 100%",b:873,j:"absolute",r:"inline",c:118,k:"div",z:"30",d:41,aB:[{type:1,transition:1,sceneSymbol:1}]},"60":{aV:8,w:"2 of 25",x:"visible",a:342,Z:"break-word",b:876,j:"absolute",r:"inline",z:"32",k:"div",aS:8,aT:8,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:24,y:"preserve",aU:8,G:"#FFFFFF"},"27":{o:"content-box",h:"1",x:"visible",a:43,q:"100% 100%",b:76,j:"absolute",r:"inline",c:681,k:"div",z:"6",d:2},"48":{o:"content-box",w:"",h:"7",x:"hidden",a:768,q:"100% 100%",b:393,j:"absolute",r:"inline",c:651,z:"28",k:"div",d:438,aY:"0",aB:[{timelineIdentifier:"47",type:8}],f:"0deg"},"44":{o:"content-box",w:"",h:"5",x:"visible",a:784,q:"100% 100%",b:103,j:"absolute",r:"inline",c:726,z:"26",k:"div",d:387,aB:[{timelineIdentifier:"41",type:8}]},"33":{aU:8,bB:0,c:447,G:"#333333",aV:8,r:"inline",d:757,e:"1.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",bC:0,t:14,Y:"30px",Z:"break-word",v:"normal",w:"<p class=\"reading\"></p><p></p><p>Call me Ishmael. Some years ago\u2014never mind how long precisely\u2014having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\u2019s hats off\u2014then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.</p><p>There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs\u2014commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.</p><p>Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall,&nbsp;</p><p></p><p></p>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:"21",aS:8,aT:8,a:38,bA:"#000000",b:87},"59":{o:"content-box",h:"12",x:"visible",a:16,q:"100% 100%",b:875,j:"absolute",r:"inline",c:118,k:"div",z:"31",d:41,aB:[{type:1,transition:1,sceneSymbol:2}]},"28":{aU:8,G:"#797879",c:706,aV:8,r:"inline",d:29,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:18,Y:"21px",Z:"break-word",w:"Moby Dick<div><b>Chapter 1: Loomings</b></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:38,b:16},"45":{o:"content-box",h:"6",x:"visible",a:506,q:"100% 100%",b:532,j:"absolute",r:"inline",c:235,k:"div",z:"27",d:159,aB:[{timelineIdentifier:"47",type:3}]},"30":{aU:8,G:"#333333",c:221,aV:8,r:"inline",d:42,e:"0.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:50,Y:"50px",Z:"break-word",v:"normal",w:"Next",j:"absolute",x:"visible",k:"div",y:"preserve",aB:[{type:1,transition:1,sceneSymbol:3}],z:"20",aS:8,aT:8,a:264,F:"center",b:795},"29":{o:"content-box",h:"0",x:"visible",a:236,q:"100% 100%",b:770,j:"absolute",r:"inline",c:283,z:"19",k:"div",d:107,aB:[{type:0}],e:"0.000000"},"31":{p:"no-repeat",c:235,q:"100% 100%",d:121,I:"None",r:"inline",J:"None",K:"None",L:"None",h:"4",M:0,N:0,j:"absolute",x:"visible",O:0,k:"div",P:0,aB:[{timelineIdentifier:"41",type:3}],z:"25",a:506,o:"content-box",b:121}},n:"Page2",T:{"47":{d:0.06,i:"47",n:"boat_rollover",a:[{f:"2",t:0,d:0.03,i:"a",e:52,s:768,o:"48"},{f:"2",t:0.03,p:2,d:0.03,i:"Actions",e:[{}],s:[{timelineIdentifier:"47",type:7}],o:"47"},{f:"2",t:0.03,d:0.03,i:"a",e:768,s:52,o:"48"},{f:"2",t:0.06,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"47",type:7}],o:"47"}],f:30},"41":{d:0.08,i:"41",n:"whale_rollover",a:[{f:"2",t:0,d:0.05,i:"a",e:20,s:778,o:"44"},{f:"2",t:0.05,p:2,d:0.03,i:"Actions",e:[{timelineIdentifier:"41",type:7}],s:[{timelineIdentifier:"41",type:7}],o:"41"},{f:"2",t:0.05,d:0.03,i:"a",e:779,s:20,o:"44"},{f:"2",t:0.08,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"41",type:7}],o:"41"}],f:30},kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"34"},{x:2,p:"600px",c:"#D6D6D4",v:{"63":{o:"content-box",h:"12",x:"visible",a:16,q:"100% 100%",b:875,j:"absolute",r:"inline",c:118,k:"div",z:"30",d:41,aB:[{type:1,transition:1,sceneSymbol:2}]},"19":{o:"content-box",h:"0",x:"visible",a:236,q:"100% 100%",b:770,j:"absolute",r:"inline",c:283,z:"19",k:"div",d:107,aB:[{type:0}],e:"0.000000"},"53":{b:491,z:"27",K:"Solid",c:90,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aM:"53_hover",D:"#A0A0A0",aN:"53_pressed",t:13,F:"center",G:"#000000",aP:"pointer",w:"Close",aB:[{timelineIdentifier:"51",type:8},{type:4,javascriptOid:"54"}],x:"visible",I:"Solid",a:897,y:"preserve",J:"Solid"},"64":{aV:8,w:"3 of 25",x:"visible",a:342,Z:"break-word",b:876,j:"absolute",r:"inline",z:"31",k:"div",aS:8,aT:8,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:24,y:"preserve",aU:8,G:"#FFFFFF"},"81":{o:"content-box",h:"13",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:768,k:"div",z:"4",d:926},"86":{o:"content-box",h:"15",p:"no-repeat",x:"visible",a:784,q:"100% 100%",b:46,j:"absolute",r:"inline",c:698,z:"33",k:"div",d:806,aB:[{type:8,timelineIdentifier:"85"}]},"17":{o:"content-box",h:"1",x:"visible",a:43,q:"100% 100%",b:76,j:"absolute",r:"inline",c:681,k:"div",z:"6",d:2},"61":{o:"content-box",h:"10",x:"visible",a:7,q:"100% 100%",b:870,j:"absolute",r:"inline",c:752,k:"div",z:"28",d:48},"49":{o:"content-box",h:"8",x:"visible",a:501,q:"100% 100%",b:195,j:"absolute",r:"inline",c:238,k:"div",z:"25",d:161,aB:[{timelineIdentifier:"51",type:3}]},"23":{aU:8,bB:0,c:447,G:"#333333",aV:8,r:"inline",d:737,e:"1.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",bC:0,t:14,Y:"30px",Z:"break-word",v:"normal",w:"<p class=\"reading\"></p><p></p><p></p><p>It is quite as much as I can do to take care of myself, without taking care of ships, barques, brigs, schooners, and what not. And as for going as cook,\u2014though I confess there is considerable glory in that, a cook being a sort of officer on ship-board\u2014yet, somehow, I never fancied broiling fowls;\u2014though once broiled, judiciously buttered, and judgmatically salted and peppered, there is no one who will speak more respectfully, not to say reverentially, of a broiled fowl than I will. It is out of the idolatrous dotings of the old Egyptians upon broiled ibis and roasted river horse, that you see the mummies of those creatures in their huge bakehouses the pyramids.</p><p>No, when I go to sea, I go as a simple sailor, right before the mast, plumb down into the fore-castle, aloft there to the royal mast-head. True, they rather order me about some, and make me jump from spar to spar, like a grasshopper in a May meadow. And at first, this sort of thing is unpleasant enough. It touches one\u2019s sense of honor, particularly if you come of an old established family in the land, the Van Rensselaers, or Randolphs, or Hardicanutes. And more than all, if just previous to putting your hand into the tar-pot, you have been lording it as a country schoolmaster, making the tallest boys stand in awe of you. The transition is a keen one, I assure you, from a schoolmaster to a sailor, and requires a strong decoction of Seneca and the Stoics to enable you to grin and bear it. But even this wears off in time.</p><p>What of it, if some old hunks of a sea-captain orders me to get a broom&nbsp;</p><p></p><p></p><p></p>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:"21",aS:8,aT:8,a:38,bA:"#000000",b:94},"18":{aU:8,G:"#797879",c:706,aV:8,r:"inline",d:29,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:18,Y:"21px",Z:"break-word",w:"Moby Dick<div><b>Chapter 1: Loomings</b></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:38,b:16},"62":{o:"content-box",h:"11",x:"visible",a:634,q:"100% 100%",b:873,j:"absolute",r:"inline",c:118,k:"div",z:"29",d:41,aB:[{type:1,transition:1,sceneSymbol:1}]},"20":{aU:8,G:"#333333",c:221,aV:8,r:"inline",d:42,e:"0.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:50,Y:"50px",Z:"break-word",v:"normal",w:"Next",j:"absolute",x:"visible",k:"div",y:"preserve",aB:[{type:1,transition:1,sceneSymbol:3}],z:"20",aS:8,aT:8,a:264,F:"center",b:795},"52":{aR:"0",x:"visible",i:"video1",a:784,b:86,j:"absolute",bE:[{type:"video/mp4",filename:"9"}],c:518,z:"26",aO:"1",d:389,k:"video",aB:[],aQ:"0",aH:"0"},"84":{o:"content-box",h:"14",p:"no-repeat",x:"visible",a:501,q:"100% 100%",b:557,j:"absolute",r:"inline",c:238,z:"32",k:"div",d:274,aB:[{type:3,timelineIdentifier:"85"}]}},n:"Page3",T:{"51":{d:0.21,i:"51",n:"ahab",a:[{f:"2",t:0,d:0.09,i:"a",e:118,s:784,o:"52"},{f:"2",t:0,d:0.09,i:"a",e:326,s:897,o:"53"},{f:"2",t:0.09,p:2,d:0.12,i:"Actions",e:[{}],s:[{timelineIdentifier:"51",type:7}],o:"51"},{f:"2",t:0.09,d:0.12,i:"a",e:897,s:326,o:"53"},{f:"2",t:0.09,d:0.08,i:"a",e:784,s:118,o:"52"},{f:"2",t:0.21,p:2,d:0,i:"Actions",s:[{timelineIdentifier:"51",type:7}],o:"51"}],f:30},"53_pressed":{d:1,i:"53_pressed",n:"53_pressed",a:[{f:"2",t:0,d:1,i:"g",e:"#990000",s:"#F0F0F0",o:"53"}],f:30},kTimelineDefaultIdentifier:{d:239.04,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{t:0,p:1,i:"Video Track",d:239.04,o:"52",f:"2"}],f:30},"85":{d:0.06,i:"85",n:"quiz_timeline",a:[{f:"2",t:0,d:0.03,i:"a",e:43,s:784,o:"86"},{f:"2",t:0.03,p:2,d:0.03,i:"Actions",e:[{type:7,timelineIdentifier:"85"}],s:[{type:7,timelineIdentifier:"85"}],o:"85"},{f:"2",t:0.03,d:0.03,i:"a",e:784,s:43,o:"86"},{f:"2",t:0.06,p:2,d:0,i:"Actions",s:[{type:7,timelineIdentifier:"85"}],o:"85"}],f:30},"53_hover":{d:1,i:"53_hover",n:"53_hover",a:[{f:"2",t:0,d:1,i:"g",e:"#999999",s:"#F0F0F0",o:"53"}],f:30}},o:"24"},{x:3,p:"600px",c:"#D6D6D4",v:{"65":{o:"content-box",h:"12",x:"visible",a:16,q:"100% 100%",b:875,j:"absolute",r:"inline",c:118,k:"div",z:"30",d:41,aB:[{type:1,transition:1,sceneSymbol:2}]},"73":{o:"content-box",h:"11",x:"visible",a:634,q:"100% 100%",b:873,j:"absolute",r:"inline",c:118,k:"div",z:"29",d:41,aB:[{type:1,transition:1,sceneSymbol:3}]},"68":{o:"content-box",h:"1",x:"visible",a:43,q:"100% 100%",b:76,j:"absolute",r:"inline",c:681,k:"div",z:"6",d:2},"71":{aU:8,bB:0,c:677,G:"#333333",aV:8,r:"inline",d:749,e:"1.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",bC:0,t:14,Y:"30px",Z:"break-word",v:"normal",w:"<p class=\"reading\"></p><p></p><p></p><p>It is quite as much as I can do to take care of myself, without taking care of ships, barques, brigs, schooners, and what not. And as for going as cook,\u2014though I confess there is considerable glory in that, a cook being a sort of officer on ship-board\u2014yet, somehow, I never fancied broiling fowls;\u2014though once broiled, judiciously buttered, and judgmatically salted and peppered, there is no one who will speak more respectfully, not to say reverentially, of a broiled fowl than I will. It is out of the idolatrous dotings of the old Egyptians upon broiled ibis and roasted river horse, that you see the mummies of those creatures in their huge bakehouses the pyramids.</p><p>No, when I go to sea, I go as a simple sailor, right before the mast, plumb down into the fore-castle, aloft there to the royal mast-head. True, they rather order me about some, and make me jump from spar to spar, like a grasshopper in a May meadow. And at first, this sort of thing is unpleasant enough. It touches one\u2019s sense of honor, particularly if you come of an old established family in the land, the Van Rensselaers, or Randolphs, or Hardicanutes. And more than all, if just previous to putting your hand into the tar-pot, you have been lording it as a country schoolmaster, making the tallest boys stand in awe of you. The transition is a keen one, I assure you, from a schoolmaster to a sailor, and requires a strong decoction of Seneca and the Stoics to enable you to grin and bear it. But even this wears off in time.</p><p>What of it, if some old hunks of a sea-captain orders me to get a broom and sweep down the decks? What does that indignity amount to, weighed, I mean, in the scales of the New Testament? Do you think the.&nbsp;<span style=\"background-color: rgb(214, 214, 212); color: rgb(51, 51, 51); font-family: 'Hoefler Text', Georgia, 'Times New Roman', serif; font-size: 14px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: 30px; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; \">I never fancied broiling fowls;\u2014though once broiled, judiciously buttered, and judgmatically salted and peppered, there is no one who will speak more respectfully, not to say reverentially, of a broiled fowl than I will. It is out of the idolatrous dotings of the old Egyptians upon broiled ibis and roasted river horse, that you see the mummies of those creatures in their huge bakehouses the pyramids.</span></p><p style=\"color: rgb(51, 51, 51); font-size: 14px; font-family: 'Hoefler Text', Georgia, 'Times New Roman', serif; font-style: normal; font-variant: normal; text-align: left; text-transform: none; text-indent: 0px; line-height: 30px; letter-spacing: normal; white-space: normal; word-spacing: 0px; background-color: rgb(214, 214, 212); \">No, when I go to sea, I go as a simple sailor, right before the mast, plumb down into the fore-castle, aloft there to the royal mast-head. True, they rather order me about some, and make me jump from spar to spar, like a&nbsp;</p><p></p><p></p><p></p>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:"21",aS:8,aT:8,a:38,bA:"#000000",b:94},"69":{o:"content-box",h:"10",x:"visible",a:7,q:"100% 100%",b:870,j:"absolute",r:"inline",c:752,k:"div",z:"28",d:48},"77":{o:"content-box",h:"0",x:"visible",a:236,q:"100% 100%",b:770,j:"absolute",r:"inline",c:283,z:"19",k:"div",d:107,aB:[{type:0}],e:"0.000000"},"72":{aU:8,G:"#797879",c:706,aV:8,r:"inline",d:29,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:18,Y:"21px",Z:"break-word",w:"Moby Dick<div><b>Chapter 1: Loomings</b></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:38,b:16},"67":{aV:8,w:"4 of 25",x:"visible",a:342,Z:"break-word",b:876,j:"absolute",r:"inline",z:"31",k:"div",aS:8,aT:8,s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:24,y:"preserve",aU:8,G:"#FFFFFF"},"75":{aU:8,G:"#333333",c:221,aV:8,r:"inline",d:42,e:"0.000000",s:"'Hoefler Text',Georgia,'Times New Roman',serif",t:50,Y:"50px",Z:"break-word",v:"normal",w:"Next",j:"absolute",x:"visible",k:"div",y:"preserve",aB:[{type:1,transition:1,sceneSymbol:3}],z:"20",aS:8,aT:8,a:264,F:"center",b:795},"82":{o:"content-box",h:"13",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:768,k:"div",z:"4",d:926}},n:"Page4",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30},"66_pressed":{d:0,i:"66_pressed",n:"66_pressed",a:[],f:30}},o:"78"}];
	
	var javascripts = [{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById('video1').pause();\n}",identifier:"54"}];
	
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

