// TODO: MUST SEND A MESSAGE TO CONTENT SCRIPT, SO IT CAN HIGHLIGHT CERTAIN "TABLE" ELEMENTS FROM DOM". NOT WORKING YET.

class RelatedTableManager{
	constructor(){
		this.highlighted=false;
	}

	highlightTableElements(tab){
		/*if (this.highlighted){
			console.log("Sending message to ContentScript, waiting for unhighlighting");
			browser.tabs.sendMessage(tab.id, {"message": "unhighlightTableElements"});
		}else{*/
			console.log("Sending message to ContentScript, waiting for highlighting");
			browser.tabs.sendMessage(tab.id, {"message": "highlightTableElements"});
		//}
	}
}


var manager = new RelatedTableManager();

browser.browserAction.onClicked.addListener(function(tab) {
	manager.highlightTableElements(tab);
});

