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
		// page number from binding path: "/pages/1 => 1"
			var getPageNumber = R.pipe(R.split("/"), R.last),
			// selected item
			 oItem = oEvent.getParameter("listItem"),
			 // page num of selected item
			iPageNum = getPageNumber(oItem.getBindingContextPath());
			// nav to page
			this.navTo("page", {pagenum: iPageNum});
		},

	});
});
