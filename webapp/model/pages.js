sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function(JSONModel) {
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
		createPagesModel: function() {
			return new JSONModel({
				pages: [
					{
						id: "test1",
						text: "blubbblueblbublbhubebhelubhlebubluh"
					},
					{
						id: "test2",
						text: "blubbblueblbublbhubebhelubhlebubluh"
					}
				]
			});
		}

	};
});
