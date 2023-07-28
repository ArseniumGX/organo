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

  const [colaboradores, setcolaboradores] = useState([]);

  const onSubmitNewColaborador = (colaborador) => {
    setcolaboradores([...colaboradores, colaborador]);
  };

  const deleteColaborador = (colaborador) => {
    console.info(colaborador);
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
      <Form
        onSubmit={(colaborador) => onSubmitNewColaborador(colaborador)}
        times={times}
      />
      <Subtitle />
      {times.map((time) => (
        <Time
          key={time.id}
          timeName={time.name}
          color={time.color}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.name
          )}
          onDelete={deleteColaborador}
          onChangeColor={changeColors}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
