import React from "react";
import { Dashboard } from "../../screens/Main/Dashboard";
import { Products } from "../../screens/Main/Products";
import { Contact } from "../../screens/Main/Contact";
import { Blog } from "../../screens/Main/Blog";
import { ScreenComponent } from "../../models/enums/ScreenComponents";

export const NavScreenBuilder = (screen: ScreenComponent) => {
	switch (screen) {
		case ScreenComponent.Dashboard:
			return Dashboard;
		case ScreenComponent.Products:
			return Products;
		case ScreenComponent.Contact:
			return Contact;
		case ScreenComponent.Blog:
			return Blog;
		default:
			throw new Error(`Unsupported screen component: ${screen}`);
	}
};
