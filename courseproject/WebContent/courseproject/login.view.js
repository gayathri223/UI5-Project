sap.ui.jsview("courseproject.login", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf courseproject.login
	*/
	getControllerName: function() {
		return "courseproject.login";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf courseproject.login
	*/
	createContent: function(oController) {
		$.sap.require("sap.ui.layout.form.SimpleForm");
		//		var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
		//		var oMessageManager = sap.ui.getCore().getMessageManager();

		//		oMessageManager.registerMessageProcessor(oMessageProcessor);

		var oSimpleForm = new sap.ui.layout.form.SimpleForm({
			content: [
				new sap.m.VBox({
					items: [
						new sap.m.Input(this.createId("nameId"), {
							placeholder: "UserId"
						}).addStyleClass("inputCss"),
						new sap.m.Input("passwordID", {
							placeholder: "Password",
							type: "Password"
						}).addStyleClass("inputCss"),
						new sap.m.Button({
							text: "Login",
							type: "Emphasized",
							press: [oController.goToSecondPage, oController]
						}).addStyleClass("btnClass")
					]
				}).addStyleClass("vBoxForm")
			]
		}).addStyleClass("newForm");

		

		//		oMessageManager.addMessages(
		//			new sap.ui.core.message.Message({
		//				message: "UserId must have digits",
		//				type: sap.ui.core.MessageType.Error,
		//				target: "/UserId",
		//				processor: oMessageProcessor
		//			})
		//		)

		var oPage = new sap.m.Page({
			title: "Login",
			content: [
				oSimpleForm
			]
		});
		return oPage;
	}

});