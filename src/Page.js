class Page {
	constructor() {

	}

	static getParameter(key) {
		let parameters = getParameters();
		if (parameters[key]) {
			return parameters[key];
		}
		return undefined;
	}

	static getParameters() {
		var searchParams = {},
			search = window.location.search.substring(1); // substring to remove the ?

		if (search) {
			search = search.split('&');
			for (var i in search) {
				if (search.hasOwnProperty(i) && i !== '') {
					var pair = search[i].split('=');
					pair[0] = decodeURIComponent(pair[0]);
					pair[1] = decodeURIComponent(pair[1]);
					searchParams[pair[0]] = pair[1];
				}
			}
		}

		return searchParams;
	}

	static getTopOfElement(elem) {
		return window.pageYOffset + elem.getBoundingClientRect().top;
	}

	static getMiddleOfElement(elem) {
		return window.pageYOffset + elem.getBoundingClientRect().top + (elem.clientHeight / 2);
	}

	static getBottomOfElement(elem) {
		return window.pageYOffset + elem.getBoundingClientRect().top + elem.clientHeight;
	}

	static getTopOfWindow() {
		return window.scrollY || document.documentElement.scrollTop;
	}

	static getBottomOfWindow() {
		return Page.getTopOfWindow() + window.innerHeight;
	}
}

export default Page;
