import { useState } from "react";
import { Banner, Form, Time, Subtitle, Footer } from "./components";

function App() {
  const times = [
    {
      id: 1,
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: 2,
      name: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: 3,
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      id: 5,
      name: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      id: 6,
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: 7,
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: 8,
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ];

  const [colabs, setColabs] = useState([]);

  const onSubmitNewColab = (colab) => {
    setColabs([...colabs, colab]);
  };

  return (
    <div className="App">
      <Banner />
      <Form onSubmit={(colab) => onSubmitNewColab(colab)} times={times} />
      <Subtitle />
      {times.map((time) => (
        <Time
          key={time.id}
          name={time.name}
          primaryColor={time.primaryColor}
          secondaryColor={time.secondaryColor}
          colabs={colabs.filter((colab) => colab.time === time.name)}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
