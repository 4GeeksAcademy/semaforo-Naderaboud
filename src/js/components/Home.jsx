import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { render } from "react-dom";
import { TrafficLight } from "./TrafficLight";
import { use } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")

	useEffect(() => {
		console.log("Color changed to:", color);
	}, [color]);

	return (
		<>
			<div className="traffic-top">

			</div>
			<div className="traffic-light-container">

				<TrafficLight color={color} onSetColor={setColor} />

			</div>
		</>
	);
};

export default Home;
