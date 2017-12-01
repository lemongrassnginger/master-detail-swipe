sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/m/routing/RouteMatchedHandler",
	"mud/4ever/model/pages",
	"mud/4ever/lib/ramda.min"
], function (UIComponent, JSONModel, RouteMatchedHandler, PagesModel, R) {
	"use strict";

return UIComponent.extend("mud.4ever.Component", {
		metadata : {
			manifest : "json"
		},

		init : function() {

			// TODO: how to load local json models from the model directory?

			// set device model
			var bIsPhone = sap.ui.Device.system.phone;
			var oDeviceModel = new JSONModel({
				isPhone : bIsPhone,
				isNoPhone : !bIsPhone,
				splitAppMode : bIsPhone ? "HideMode" : "ShowHideMode",
				listItemType : bIsPhone ? "Active" : "Inactive"
			});
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			// pages model
			this.setModel(PagesModel.createPagesModel(), "pages");

			// call the super init - calling this after models are declared makes models available in the onInit methods of controllers. Not sure why. Doesn't seem to work for i18n defined models
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

			new sap.m.routing.RouteMatchedHandler(this.getRouter());
			this.getRouter().initialize();
		},

	});
});
