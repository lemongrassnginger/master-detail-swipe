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
		sap.m.MessageToast.show("Hello!! :)");
	},

	});
});
