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

		navBack : function () {
			var oHistory = sap.ui.core.routing.History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			// The history contains a previous entry
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var bReplace = true; // otherwise we go backwards with a forward history
				this.navTo("");
			}
		},

		// *******************************************
		// Text helpers
		// *******************************************

		/**
		* log message
		* @see {@link Base.getText}
		* @param    {string} sKey - i18n key. If i18n key not exist, return the key as the message
		* @param    {string} sLevel
		* @memberof Base
		*/
		log: function (sKey, sLevel) {
			// global method for writing to a log
			// default error level
			sLevel = sLevel || "E";
			// look up level text
			var mLevel  = {
				E: "Error",
				I: "Information",
				S: "Success",
				W: "Warning"
			},
			// get message text from i18n key - not passing args here - instead use this.log(this.getText(sKey, aArgs), sLevel)
			sMsg = this.getText(sKey);
			// there's probably a UI5 way of doing this, until I look that up, use console.log
			console.log(mLevel[sLevel], ": ", sMsg);
		},

		/**
		* look up i18n text for key
		* @param    {string} sKey - i18n key. If key not found, sKey is returned
		* @param    {string[]} aArgs - arguments passed to Bundle.getText
		* @return   {string}
		* @memberof Base
		*/
		getText : function (sKey, aArgs) {
			// set the bundle if not already
			if (!this.oBundle) {
				this.oBundle = this.getView()
				.getModel("i18n")
				.getResourceBundle();
			}
			// return the text for the given key
			// aArgs is an array of strings to replace {n} placeholders in the i18n text
			return this.oBundle.getText(sKey, aArgs);
		},

		/**
		* show message toast for i18n key
		* @param    {string} sKey - i18n key - If i18n key not exist, return the key as the message
		* @param    {string} aArgs - arguments passed to getText
		* @memberof Base
		*/
		toast : function (sKey, aArgs) {
			MessageToast.show(this.getText(sKey, aArgs));
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

		getXmlFragment : function(sFragmentName) {
			// access elements on the fragment with sap.ui.core.Fragment.byId(sFragmentName, <elementId>)
			var sObjectName = "o" + sFragmentName;
			if (!this[sObjectName]) {
				this[sObjectName] = sap.ui.xmlfragment({
					sId: sFragmentName,
					fragmentName : this.sRootNamespace + ".fragments." + sFragmentName,
					oController : this
				});
				this.getView().addDependent(this[sObjectName]);
			}
			return this[sObjectName];
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
