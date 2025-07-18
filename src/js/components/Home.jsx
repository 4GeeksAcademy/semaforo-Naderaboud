import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")

	const onSelectLight = (lightColor) => {

		switch (lightColor) {
			case lightColor === "red":
			setColor("red")
				break;
			case lightColor === "yellow":
			setColor("yellow")

				break;
			case lightColor === "green":
			setColor("green")

				break;
			default:
				break;
		}
	}

	return (
		<>
			<div className="traffic-top">

			</div>
			<div className="traffic-light-container">

				<div className={"btn btn-danger light red " + (color === "red" ? "selected": "")} onClick={onSelectLight("red")}></div>
				<div className={"btn btn-warning light yellow "+ (color === "yellow" ? "selected": "")}></div>
				<div className={"btn btn-success light green " + (color === "green" ? "selected": "")}></div>


			</div>
		</>
	);
};

export default Home;