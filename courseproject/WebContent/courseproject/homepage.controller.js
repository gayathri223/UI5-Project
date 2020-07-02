sap.ui.controller("courseproject.homepage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf courseproject.homepage
*/
	onInit: function() {
		var oData = {
			name: [{
				icon: "sap-icon://loan",
				Subject:"Bit Coin",
			    Type:"Beginner"
            },
			{
				icon: "sap-icon://upload-to-cloud",
			    Subject:"Cloud Computing",
			    Type:"Beginner"	
			},
			{
				icon: "sap-icon://horizontal-combination-chart",
				Subject:"Data Analytics",
			    Type:"Beginner"
			}
			]
			
		};
		
		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf courseproject.homepage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf courseproject.homepage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf courseproject.homepage
*/
//	onExit: function() {
//
//	}

});