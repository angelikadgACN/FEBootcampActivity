sap.ui.define([
	"sap/ui/core/mvc/Controller",
    'sap/ui/model/BindingMode',
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/Text",
    "sap/ui/model/json/JSONModel",
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format'
], function (
	Controller,
	BindingMode,
	Dialog,
	Button,
	mobileLibrary,
	Text,
	JSONModel,
    FlattenedDataset,
    ChartFormatter,
    Format) {
	"use strict";

	// shortcut for sap.m.ButtonType
	var ButtonType = mobileLibrary.ButtonType;

	// shortcut for sap.m.DialogType
	var DialogType = mobileLibrary.DialogType;

    return Controller.extend("febootcamp.controller.View", {

		/* onPress: function (evt) {
			MessageToast.show("This button is working, yey!");
		} */
        
		dataPath : "febootcamp/model/mockdata.json",

		oVizFrame: null,

        onInit: function () {
            // Apply chart formatting
            Format.numericFormatter(ChartFormatter.getInstance());
            var formatPattern = ChartFormatter.DefaultPattern;

            // Set the model with the necessary data for the revenue bar graph
            var oModel = new JSONModel({
                "createdData": [
					{"month": "Jan", "created": 100},
					{"month": "Feb", "created": 200},
					{"month": "Mar", "created": 150},
					{"month": "Apr", "created": 250},
					{"month": "May", "created": 300},
					{"month": "Jun", "created": 120},
					{"month": "Jul", "created": 400},
					{"month": "Aug", "created": 500},
					{"month": "Sep", "created": 600},
					{"month": "Oct", "created": 700},
					{"month": "Nov", "created": 800},
					{"month": "Dec", "created": 900}
  				]
            });
            oModel.setDefaultBindingMode("OneWay"); 
            this.getView().setModel(oModel);

            // Get VizFrame and configure properties
            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
            oVizFrame.setVizProperties({
                plotArea: {
                    dataLabel: {
                        formatString: formatPattern.SHORTFLOAT_MFD2,
                        visible: true
                    }
                },
                valueAxis: {
                    label: {
                        formatString: formatPattern.SHORTFLOAT
                    },
                    title: {
                        visible: false
                    }
                },
                categoryAxis: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false,
                    text: 'Created Data Monthly'
                }
            });

            // Create the dataset for the bar chart using FlattenedDataset
            var oDataset = new FlattenedDataset({
                data: {
                    path: "/createdData"
                },
                dimensions: [{
                    name: 'Month',
                    value: '{month}'
                }],
                measures: [{
                    name: 'Created Data',
                    value: '{created}'
                }]
            });

            // Set the dataset to the VizFrame
            oVizFrame.setDataset(oDataset);

            // Connect popover (if required)
            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(formatPattern.STANDARDFLOAT);
        },

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