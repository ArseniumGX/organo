import { useState } from "react";
import { Banner, Form } from "./components";

function App() {
	const [colabs, setColabs] = useState([]);

	const onSubmitNewColab = (colab) => {
		console.info(colab);
		setColabs([...colabs, colab]);
	};

	return (
		<div className="App">
			<Banner />
			<Form onSubmit={(colab) => onSubmitNewColab(colab)} />
		</div>
	);
}

export default App;
