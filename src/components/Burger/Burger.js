// import React, { useState, useEffect } from "react";
import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./BurgerStyles.js";

const Burger = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired
};

export default Burger;
