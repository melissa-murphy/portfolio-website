import React from "react";
import { Image } from "../atoms";
import tehMissa from "../../imgs/melissa-murphy-img.jpg";

const Headshot = props => {
	return <Image src={tehMissa} height={10} borderRadius={100} />;
};

export default Headshot;