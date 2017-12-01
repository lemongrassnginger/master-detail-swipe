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
						fragmentName: "test1",
						text: "hello :D"
					},
					{
						fragmentName: "test2",
						text: "blubbblueblbublbhubebhelubhlebubluh"
					}
				]
			});
		}

	};
});
