/* global Log, Module, MM */
/* Magic Mirror
 * Module: MMM-admin-interface
 *
 * By ItayXD
 * GPL-3.0 Licensed.
 */
Module.register( "MMM-Admin-Interface", {
	requiresVersion: "2.0.0",

	defaults: {

		// no config options at the moment
	},

	start: function() {
		Log.info( "Starting module: " + this.name );
	},
	notificationReceived: function( notification, payload, sender ) {
		if ( notification === "schema" && payload && typeof ( payload ) === "object" ) {
			Log.log( this.name + " recieved schema from " + sender.name );
			this.sendSocketNotification(notification, payload);
		}
	},
} );
