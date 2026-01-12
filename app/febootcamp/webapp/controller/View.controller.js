sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/library",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/Text"
], function (Controller, coreLibrary, Dialog, Button, mobileLibrary, Text) {
	"use strict";

	// shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	// shortcut for sap.m.DialogType
	var DialogType = mobileLibrary.DialogType;

	// shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;

    return Controller.extend("sap.m.sample.DialogMessage.C", {

		/* onPress: function (evt) {
			MessageToast.show("This button is working, yey!");
		} */
        onHello: function () {
			if (!this.oDefaultMessageDialog) {
				this.oDefaultMessageDialog = new Dialog({
					type: DialogType.Message,
					title: "Hello world",
					content: new Text({ text: "Nice to meet you!" }),
					beginButton: new Button({
						type: ButtonType.Emphasized,
						text: "OK",
						press: function () {
							this.oDefaultMessageDialog.close();
						}.bind(this)
					})
				});
			}

			this.oDefaultMessageDialog.open();
        },

		onNavToPage2 : function () {
			this.getOwnerComponent().getTargets().display("TargetPage2", {
				fromTarget : "View"
			});
		}

	});
});