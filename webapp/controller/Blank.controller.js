sap.ui.define([
	"mud/4ever/controller/Base.controller"
], function (Controller) {

	"use strict";

	/**
	* Blank controller
	* @class Blank
	*/
	return Controller.extend("mud.4ever.controller.Blank", {

	// ********************************************************* //
	// lifecycle
	// ******************************************************* //

	/**
	 * Runs on Controller "init" event
	 * @return   {[type]}
 	 * @memberof Blank
	 */
	onInit: function () {
		sap.m.MessageToast.show("Hello!! :)");
	},

	});
});
