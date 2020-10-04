import React from "react";
import { Burger } from "./Burger";
import { MobileNavFlyout } from "./MobileNavFlyout";
import { MobileMenuHeader } from "./MobileNavStyles";

const MobileNav = ({ open, setOpen }) => {
	return (
		<>
			<MobileMenuHeader>
				<Burger open={open} setOpen={setOpen} />
                <h1>Melissa Mondot</h1>
			</MobileMenuHeader>
			<MobileNavFlyout open={open} setOpen={setOpen} />
		</>
	);
};

export default MobileNav;
