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
			sap.m.MessageToast.show(R.add(1, 1));

			// set the pages model as the default on the view
			var oModel = this.getOwnerComponent().getModel("pages");
			this.oView.setModel(oModel);

			// get carousel
			var oCarousel = this.getView().byId("detail-carousel");
			// get fragment and bind data
			var oPageData = this.oView.getModel().getProperty("/pages")[0];
			var oPage = this.getXmlFragment(oPageData.id);
			// add the fragment as a dependent of the view so view model can be accessed
			this.oView.addDependent(oPage);
			// bind context of the page to the view model
			oPage.bindElement({path: "/pages/0"});

			// add pages to the carousel
			oCarousel.addPage(oPage);
		}

	});
});
