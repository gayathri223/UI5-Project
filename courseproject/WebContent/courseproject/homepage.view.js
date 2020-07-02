sap.ui.jsview("courseproject.homepage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf courseproject.homepage
	*/
	getControllerName: function() {
		return "courseproject.homepage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf courseproject.homepage
	*/
	createContent: function(oController) {
		var oTileTemp = new sap.m.StandardTile({
			icon: "{icon}",
			title: "{Subject}",
			info: "{Type}"
		})



		var oTileCont = new sap.m.TileContainer({

		});
		var oButton = new sap.m.Button({
			icon: "sap-icon://log",
			press: function(oEvent) {
				app.back();
			},
			text: "Logout"
		});
		var oHeader = new sap.m.Bar({ contentRight: [oButton], contentMiddle: [new sap.m.Label({ text: "Courses" })] });
		oTileCont.bindAggregation("tiles", "/name", oTileTemp);
		var oPage = new sap.m.Page({
			content: [
				oHeader,
				oTileCont
			]
		});
		return oPage;
	}

});