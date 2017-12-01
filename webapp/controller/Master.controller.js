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

			// attachRouteMatched
			this.oRouter.attachRouteMatched(this.onRouteMatched, this);
		},

		/**
		* route matched
		* set selected item based on routing page num
		* @param    {[type]} oEvent
		* @memberof Master
		*/
		onRouteMatched: function (oEvent) {
			var oParams = oEvent.getParameters(),
			// page numb param from routing
			iPageNum = oParams.arguments.pagenum,
			// master list control
			oList = this.oView.byId("master-list"),
			// target item based on page number id 
			oTargetItem = oList.getItems()[iPageNum];

			// select the target item #
			oList.setSelectedItem(oTargetItem);
		},

		/**
		* handelr for master list selection chagne
		* @param    {[type]} oEvent
		* @memberof Master
		*/
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
