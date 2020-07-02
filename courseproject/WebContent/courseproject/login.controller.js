sap.ui.controller("courseproject.login", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf courseproject.login
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf courseproject.login
*/
//	onBeforeRendering: function() {
//
//	},

goToSecondPage: function(oEvent){
	var oInputValue = sap.ui.getCore().byId(this.createId("nameId")).getValue();
	var oPasswordValue = sap.ui.getCore().byId("passwordID").getValue();
	if(oInputValue !== "" && oPasswordValue !== ""){
		app.to("idSecond1");
	}
}
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf courseproject.login
*/
//	onAfterRendering: function() {
 //        
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf courseproject.login
*/
//	onExit: function() {
//
//	}

});