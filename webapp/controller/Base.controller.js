sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {

	"use strict";

	/**
	* Base controller
	* @class Base
	*/
	return Controller.extend("mud.4ever.controller.Base", {

		oBundle: null,
		oView: null,
		oRouter: null,
		sRootNamespace: "mud.4ever",

		// *******************************************
		// Lifecycle functions
		// *******************************************

		onInit: function () {
			this.oView = this.getView();
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},

		// *******************************************
		// Routing helpers
		// *******************************************

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		navTo : function () {
			var oRouter = this.getRouter();
			return oRouter.navTo.apply(oRouter, arguments);
		},

		// *******************************************
		// Fragment helpers
		// *******************************************
		/**
		* Creates a new control from a fragment.
		* If you want to just reuse a fragment without recreating it, see getXmlFragment
		* @param    {[type]} sFragmentName
		* @return   New controls from fragment
		* @memberof Base
		*/
		getNewXmlFragment: function (sFragmentName) {
			// access elements on the fragment with sap.ui.core.Fragment.byId(sFragmentName, <elementId>)
			return sap.ui.xmlfragment({
				sId: sFragmentName,
				fragmentName: this.sRootNamespace + ".fragments." + sFragmentName,
				oController: this
			});
		},

		// *******************************************
		// generic helpers
		// *******************************************

		/**
		* page number from binding path: "/pages/1 => 1"
		* @memberof Base
		*/
		getPageNumber: R.pipe(R.split("/"), R.last)

	});
});
