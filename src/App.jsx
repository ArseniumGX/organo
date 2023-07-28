import { useState } from "react";
import { Banner, Form, Time, Subtitle, Footer } from "./components";

function App() {
  const [times, setTimes] = useState([
    {
      id: 1,
      name: "Programação",
      color: "#57C278"
    },
    {
      id: 2,
      name: "Front End",
      color: "#82CFFA"
    },
    {
      id: 3,
      name: "Data Science",
      color: "#A6D157"
    },
    {
      id: 5,
      name: "DevOps",
      color: "#E06B69"
    },
    {
      id: 6,
      name: "UX e Design",
      color: "#DB6EBF"
    },
    {
      id: 7,
      name: "Mobile",
      color: "#FFBA05"
    },
    {
      id: 8,
      name: "Inovação e Gestão",
      color: "#FF8A29"
    }
  ]);

  const [colabs, setColabs] = useState([]);

  const onSubmitNewColab = (colab) => {
    setColabs([...colabs, colab]);
  };

  const deleteColab = (colab) => {
    console.info(colab);
  };

  const changeColors = (color, timeName) => {
    setTimes(
      times.map((time) => {
        if (time.name === timeName) {
          time.color = color;
        }
        return time;
      })
    );
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
          color={time.color}
          colabs={colabs.filter((colab) => colab.time === time.name)}
          onDelete={deleteColab}
          onChangeColor={changeColors}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
