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

	});
});
