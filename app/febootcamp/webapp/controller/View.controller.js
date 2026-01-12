sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/mvc/Controller"
], function(MessageToast, Controller) {
    "use strict";

    var PageController = Controller.extend("sap.m.sample.Button.Page", {

		onPress: function (evt) {
			MessageToast.show("This button is working, yey!");
		}
	});

	return PageController;

});