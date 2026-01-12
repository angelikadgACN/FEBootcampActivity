sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "febootcamp/model/models"
], (UIComponent, JSONModel, models) => {
    "use strict";

    return UIComponent.extend("febootcamp.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            
            this.setModel(models.createDeviceModel(), "device");
            
            // Mockdata model
           // var oMockModel = new JSONModel();
          //  oMockModel.loadData("model/mockdata.json");
           // this.setModel(oMockModel, "mock");

            // enable routing
            this.getRouter().initialize();
        }
    });
});