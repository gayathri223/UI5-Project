sap.ui.jsview("courseproject.register", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf courseproject.register
	*/
	getControllerName: function() {
		return "courseproject.register";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf courseproject.register
	*/
	createContent: function(oController) {
		 $.sap.require("sap.ui.layout.form.SimpleForm");

		var oHeading = new sap.ui.layout.form.SimpleForm({
			content: [
				new sap.m.VBox({
					alignItems:"Center",
					alignContent:"Center",
					items: [
						new sap.m.Input( {
							placeholder: "Email ID"
						}),
						new sap.m.Button({
							text: "Send Password Resent",
							type: "Emphasized"
						})
						
					]
				})
			]
		});
		var oPage = new sap.m.Page({
			title: "Reset Your Password",
			showNavButton: true,
			navButtonPress: function(oEvent) {
				app.back();
			},
			content: [
				oHeading

			]
		});

		return oPage;

	}

});