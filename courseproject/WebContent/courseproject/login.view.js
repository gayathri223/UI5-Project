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

		var oSimpleForm = new sap.ui.layout.form.SimpleForm({
			content: [
				new sap.m.VBox({
					justifyContent:"Center",
					alignItems:"Center",
					alignContent:"Center",
					items: [
						new sap.m.Input(this.createId("nameId"), {
							placeholder: "UserId"
						}),
						new sap.m.Input("passwordID", {
							placeholder: "Password",
							type: "Password"
						}),
						new sap.m.Link({
							text: "Forgot Password?",
							press: [oController.forgotPassword, oController]
						}).addStyleClass("linkCss"),
						new sap.m.Button({
							text: "Login",
							type: "Emphasized",
							press: [oController.validateInput, oController]
						})
						
					]
				}).addStyleClass("vBoxForm")
			]
		}).addStyleClass("newForm");
		var oRegisterForm = new sap.ui.layout.form.SimpleForm({
			content: [
				new sap.m.VBox({
					justifyContent:"Center",
					alignItems:"Center",
					alignContent:"Center",
					
					items: [
						new sap.m.Input("fNameid", {
							placeholder: "Full Name"
						}).addStyleClass("inputCss"),
						new sap.m.Input("emailid", {
							placeholder: "Email ID"
						}).addStyleClass("inputCss"),
						new sap.m.Input("password", {
							placeholder: "Password",
							type: "Password"
						}).addStyleClass("inputCss"),
						new sap.m.Button({
							text: "Join For Free",
							type: "Emphasized",
							press: [oController.validateRegister, oController]
						}).addStyleClass("btnClass")
						
					]
				})
			]
		});
		var oIcon = new sap.m.Button({
			icon: "sap-icon://sap-ui5",
			
		});
		var oButton = new sap.m.Button("link",{
			type: "Emphasized",
			text: "Join For Free",
			press: function(oEvent){
				
				var oButton = oEvent.getSource();
				
				if(!this._oPopover){
					this._oPopover = new sap.m.Popover("popover",{
						id: "pop",
						placement: sap.m.PlacementType.Bottom,
						showHeader: true,
						title: "Register To Join The Community",
						contentWidth : "250px",
						contentHeight: "350px"
					}).addStyleClass("container");
				}
				
				this._oPopover.openBy(oButton);
				
				this._oPopover.addContent(oRegisterForm);
				return("pop");
			}
		});
		var oHeader = new sap.m.Bar({ contentLeft:[oIcon], contentRight: [oButton], contentMiddle: [new sap.m.Label({ text: "Login" })] });

		


		var oPage = new sap.m.Page({
			content: [
				oHeader,
				oSimpleForm
			]
		});
		return oPage;
	}

});