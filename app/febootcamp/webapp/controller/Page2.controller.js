sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("febootcamp.controller.Page2", {

    onNavBack: function () {
			this.getOwnerComponent().getTargets().display("TargetView", {
				fromTarget : "Page2"
			});
    }

  });
});