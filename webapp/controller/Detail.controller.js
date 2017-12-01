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
		* Sets pages model as view model
		* Creates carousel pages from fragments and pages model data
		* @memberof Detail
		*/
		onInit: function () {
			// call base controller init
			Controller.prototype.onInit.apply(this, arguments);
			// vars...
			var oPagesModel = this.getOwnerComponent().getModel("pages"),
			sPagesPath = "/pages",
			aPageData = oPagesModel.getProperty(sPagesPath),
			// carousel control
			oCarousel = this.getView().byId("detail-carousel"),
			// ...and fns...
			// combine index and pages path like: 1 => "/pages/1"
			pathForPage = R.pipe(R.toString, R.concat(sPagesPath + "/")),
			// create a page from a fragment and bind data from the pages model
			createPage = function (sFragmentName, sBindingPath) {
				// get page ui from fragment
				var oPage = this.getNewXmlFragment(sFragmentName);
				// bind context of the page to the view model
				oPage.bindElement({path: sBindingPath});
				// return the page control
				return oPage;
				// bind this controller so getXmlFragment can be acccessed
			}.bind(this);

			// set the pages model as the default on the view
			this.oView.setModel(oPagesModel);

			// create a page for each entry in pages model and add to carousel
			aPageData.forEach((x, i) => oCarousel.addPage(
				createPage(x.fragmentName, pathForPage(i))
			));

			// routing handler
			this.oRouter.attachRouteMatched(this.onRouteMatched, this);
		},

		/**
		 * set the routing path to the page number of the new page
		 * carousel only provides the id of the active page, not the index which makes it a bit fiddly
		 * @memberof Detail
		 */
		onCarouselPageChanged: function (oEvent) {
			// get the page number from the binding path of the active page control
			var oCarousel = this.oView.byId("detail-carousel"),
			// page controls
			aPages = oCarousel.getPages(),
			// control Id of active page
			sPageControlId = oEvent.getParameter("newActivePageId"),
			// active page control
			oActivePage = R.find(R.propEq("sId", sPageControlId), aPages),
			// binding path of page control like: "/pages/1"
			sPagePath = oActivePage.getBindingContext().getPath(),
			// page number from end of binding path
			sPageNum = this.getPageNumber(sPagePath);

			// nav to page
			this.navTo("page", {pagenum: sPageNum});
		},

		/**
		 * route matched handler
		 * Sets carousel page based on route pagenu
		 * @param    {[type]} oEvent
		 * @return   {[type]}
		 * @memberof
		 */
		onRouteMatched: function (oEvent) {
			var oParams = oEvent.getParameters(),
			iPageNum = oParams.arguments.pagenum,
			oCarousel = this.oView.byId("detail-carousel");

			// set the active page of the carousel by page number
			oCarousel.setActivePage(oCarousel.getPages()[iPageNum]);
		},

	});
});
