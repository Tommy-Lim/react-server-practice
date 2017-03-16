
import React from "react";

export default class UserPage {
	handleRoute(next) {
		// Kick off data requests here.
		return next();
	}

	getElements() {
		return <div>This is User.</div>
	}
}
