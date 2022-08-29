import "./App.css";
import Topbar from "./Component/Topbar/Topbar";
// import AboutMe from "./Component/AboutMe/AboutMe";
import Projects from "./Component/Projects/Projects";
import MyLinks from "./Component/MyLinks/MyLinks";
import MySkill from "./Component/MySkill/MySkill";
import randomColor from "randomcolor";
import { useState } from "react";
import { MdFormatColorFill } from "react-icons/md";
import AboutMe from "./Component/AboutMe/AboutMe";

function App() {
	const [bgcolor, setBgColor] = useState("black");

	const changeColor = () => {
		setBgColor(randomColor());
	};

	return (
		<>
			<div
				style={{
					backgroundColor: bgcolor,
				}}
			>
				<button
					title="Change Theme Color"
					id="colorChange"
					className="fixed right-0 z-10"
					onClick={changeColor}
				>
					<MdFormatColorFill className="text-3xl m-5" />
				</button>

				<div className="allstars bg-slate-700">
					<div id="stars" />
					<div id="stars2" />
					<div id="stars3" />
				</div>
				<div className="max-w-screen-xl m-auto ">
					<Topbar />
					<Projects />
					<MySkill />
					<MyLinks />
					<AboutMe />
				</div>
			</div>
		</>
	);
}

export default App;
