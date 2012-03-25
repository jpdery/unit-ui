/*
---

name: Unit.UI

description: Binds units to selectors.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Unit

provides:
	- Unit.UI

...
*/

(function() {

Unit.UI = new Class({

	Extends: Unit,

	Implements: [
		Events,
		Options
	],

	element: null,

	initialize: function(element) {
		this.element = element;
		this.setupUnit();
		this.setup();
		return this;
	},

	setup: function() {

	}

});

Unit.UI.attach = function(selectors, unit) {
	window.addEvent('domready', function() {
		if (typeof selectors === 'array' ||
			typeof selectors === 'string') {
			selectors = selectors.join(',');
			document.getElements(selector).each(function(element) {
				new unit(element);
			});
		} else {
			new (selectors && typeof selectors === 'object' ? selector : unit)(window);
		}
	}
};

})();