sap.ui.define([
	"mud/4ever/controller/Base.controller"
], function (Controller) {

	"use strict";

	/**
	* Master controller
	* @class Master
	*/
	return Controller.extend("mud.4ever.controller.Master", {

		// ********************************************************* //
		// lifecycle
		// ******************************************************* //

		/**
		* Runs on Controller "init" event
		* @return   {[type]}
		* @memberof Master
		*/
		onInit: function () {
			// call base controller init
			Controller.prototype.onInit.apply(this, arguments);
		},

		/**/
		onMasterSelect: function (oEvent) {
			// selected item
			var oItem = oEvent.getParameter("listItem"),
			// page num of selected item
			iPageNum = this.getPageNumber(oItem.getBindingContextPath());

			// nav to page
			this.navTo("page", {pagenum: iPageNum});
		},

	});
});
