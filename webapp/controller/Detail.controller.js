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
		* @memberof Detail
		*/
		onInit: function () {
			// call base controller init
			Controller.prototype.onInit.apply(this, arguments);
			var oPagesModel = this.getOwnerComponent().getModel("pages"),
			sPagesPath = "/pages",
			aPageData = oPagesModel.getProperty(sPagesPath),
			// combine index and pages path like: 1 => "/pages/1"
			pathForPage = R.pipe(R.toString, R.concat(sPagesPath + "/")),
			// carousel control
			oCarousel = this.getView().byId("detail-carousel"),
			// create a page from a fragment and bind data from the pages model
			createPage = function (sFragmentName, sBindingPath) {
				// get page ui from fragment
				var oPage = this.getXmlFragment(sFragmentName);
				// add the fragment as a dependent of the view so view model can be accessed
				this.oView.addDependent(oPage);
				// bind context of the page to the view model
				oPage.bindElement({path: sBindingPath});
				// return the page control
				return oPage;
			}.bind(this);

			// set the pages model as the default on the view
			this.oView.setModel(oPagesModel);

			// create a page for each entry in pages model and add to carousel
			aPageData.forEach((x, i) => oCarousel.addPage(
				createPage(x.fragmentName, pathForPage(i))
			));

		},

	});
});
