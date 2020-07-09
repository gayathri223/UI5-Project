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
	
	forgotPassword: function(oEvent){
		app.to("idSecond2");
		
	},

	validateInput: function(oAction) {
		var oText = sap.ui.getCore().byId(this.createId("nameId")).getValue();
		var oPassword = sap.ui.getCore().byId("passwordID").getValue();
		var regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})";
		var mailregex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/;

		if (oText.trim() === "" || !oText.match(mailregex)) {
			this.byId("nameId").setValueState("Error");
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.error("Please enter valid userid in your input field", {
				title: "Error",
				onClose: null,
				styleClass: "",
				actions: sap.m.MessageBox.Action.Close,
				emphasizedAction: null,
				initialFocus: null,
				textDirection: sap.ui.core.TextDirection.Inherit
			});
		} else{
			this.byId("nameId").setValueState("None");
		}if(oPassword.trim() === "" || !oPassword.match(regex)) {
			sap.ui.getCore().byId("passwordID").setValueState("Error");
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.error("Please enter valid password in your input field",{
				title: "Error",
				onClose: null,
				styleClass: "",
				actions: sap.m.MessageBox.Action.Close,
				emphasizedAction: null,
				initialFocus: null,
				textDirection: sap.ui.core.TextDirection.Inherit
			});
		}else{
			sap.ui.getCore().byId("passwordID").setValueState("None");
		}
		var oUserIdValue = sap.ui.getCore().byId(this.createId("nameId")).getValueState();
		var oPasswordValue = sap.ui.getCore().byId("passwordID").getValueState();
		
			if(oPasswordValue === "None" && oUserIdValue === "None"){
			app.to("idSecond1");
			}
		

	},
	
	validateRegister: function(oAction) {
		var oInput = sap.ui.getCore().byId("fNameid").getValue();
		var oEmail = sap.ui.getCore().byId("emailid").getValue()
		var oPassword = sap.ui.getCore().byId("password").getValue();
		var regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})";
		var mailregex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/;
		var that = this;

		if (oInput.trim() === "") {
			this.byId("fNameid").setValueState("Error");
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.error("Please enter valid name in your input field", {
				title: "Error",
				onClose: null,
				styleClass: "",
				actions: sap.m.MessageBox.Action.Close,
				emphasizedAction: null,
				initialFocus: null,
				textDirection: sap.ui.core.TextDirection.Inherit
			});
		} else{
			this.byId("fNameid").setValueState("None");
		}
		if (oEmail.trim() === "" || !oEmail.match(mailregex)) {
			this.byId("emailid").setValueState("Error");
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.error("Please enter valid email in your input field", {
				title: "Error",
				onClose: null,
				styleClass: "",
				actions: sap.m.MessageBox.Action.Close,
				emphasizedAction: null,
				initialFocus: null,
				textDirection: sap.ui.core.TextDirection.Inherit
			});
		} else{
			this.byId("emailid").setValueState("None");
		}if(oPassword.trim() === "" || !oPassword.match(regex)) {
			sap.ui.getCore().byId("password").setValueState("Error");
			jQuery.sap.require("sap.m.MessageBox");
			sap.m.MessageBox.error("Please enter valid password in your input field",{
				title: "Error",
				onClose: null,
				styleClass: "",
				actions: sap.m.MessageBox.Action.Close,
				emphasizedAction: null,
				initialFocus: null,
				textDirection: sap.ui.core.TextDirection.Inherit
			});
		}else{
			sap.ui.getCore().byId("password").setValueState("None");
		}
		}

	//goToSecondPage: function(oEvent) {
	//	var oInputValue = sap.ui.getCore().byId(this.createId("nameId")).getValue();
	//	var oPasswordValue = sap.ui.getCore().byId("passwordID").getValue();
	//	if (oInputValue !== "" && oPasswordValue !== "") {
	//		app.to("idSecond1");
	//	}
	//}
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