sap.ui.require([
	"sap/m/Text"
], function (Text) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a text UI element that displays a hardcoded text string
		new Text({text: "Hola, mi nombre es Victor Hernández"}).placeAt("content");
	});
});