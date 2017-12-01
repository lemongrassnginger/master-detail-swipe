sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	/**
	* @class pages
	*/
	return {

		/**
		* Initialise pages model
		* @return   {[type]}
		* @memberof pages
		*/
		createPagesModel: function () {
			return new JSONModel({
				pages: [
					{
						fragmentName: "simple-msg",
						title: "Message from me",
						text: "Sorry you're leaving!"
					},
					{
						fragmentName: "simple-msg",
						title: "Message to you",
						text: "Thanks for all the fish"
					}
				]
			});
		}

	};
});
