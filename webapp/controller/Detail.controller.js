sap.ui.define([
	"mud/4ever/controller/Base.controller"
], function (Controller) {

	"use strict";

	/**
	* Detail controller
	* @class Detail
	*/
	return Controller.extend("mud.4ever.controller.Detail", {

	// ********************************************************* //
	// lifecycle
	// ******************************************************* //

	/**
	 * Runs on Controller "init" event
	 * @return   {[type]}
 	 * @memberof Detail
	 */
	onInit: function () {
		// call base controller init
		Controller.prototype.onInit.apply(this, arguments);

		// set the pages model as the default on the view
		var oModel = this.getOwnerComponent().getModel("pages");
		this.oView.setModel(oModel);

		// get carousel
		var oCarousel = this.getView().byId("detail-carousel");
		// get id from model
		var sId = this.oView.getModel().getProperty("/pages")[1].id;
		// add pages to the carousel
		oCarousel.addPage(this.getXmlFragment(sId));
	},

	});
});
