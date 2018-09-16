/* global Log, Module, MM */
/* Magic Mirror
 * Module: iMirror-interface
 *
 * Quelle von ItalyXD geändert durch Zare90
 * GPL-3.0 Licensed.
 */
Module.register( "iMirror-Interface", {
	requiresVersion: "2.0.0",

	defaults: {

		// no config options at the moment
	},

	start: function() {
		Log.info( "Starting module: " + this.name );
	},
	notificationReceived: function( notification, payload, sender ) {
		let message = sender ? (
			this.name + " received a module notification: " + notification + " from sender: " + sender.name
			) : (
			this.name + " received a system notification: " + notification );
		Log.log( message );
		if ( notification === "schema" && payload && typeof ( payload ) === "object" ) {
			Log.log( this.name + " recieved schema from " + sender.name );
			this.sendSocketNotification( notification, payload );
		}
	},
} );
