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
				pathForPage = R.pipe(R.toString, R.concat(sPagesPath + "/"));

			// set the pages model as the default on the view
			this.oView.setModel(oPagesModel);
			// create a page for each entry in the page model and add to the carousel
			var sPageBindingPath = pathForPage(0);
			// get page data
			var oPageData = this.oView.getModel().getProperty(sPageBindingPath);
			// create page
			var oPage = this.createPage(oPageData.id, sPageBindingPath);
			// get carousel
			var oCarousel = this.getView().byId("detail-carousel");
			// add pages to the carousel
			oCarousel.addPage(oPage);
		},

		// ********************************************************* //
		// private
		// ******************************************************* //

		/**
		 * Creates a page control from a fragment and binds the view model
		 * @param    {string} sFragmentName
		 * @param    {string} sBindingPath
		 * @return   {sap.m.Page}
		 * @memberof Detail
		 */
		createPage: function (sFragmentName, sBindingPath) {
			// get page ui from fragment
			var oPage = this.getXmlFragment(sFragmentName);
			// add the fragment as a dependent of the view so view model can be accessed
			this.oView.addDependent(oPage);
			// bind context of the page to the view model
			oPage.bindElement({path: sBindingPath});
			// return the page control
			return oPage;
		},

	});
});
