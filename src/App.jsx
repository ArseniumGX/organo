import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  Banner,
  Form,
  Time,
  Subtitle,
  Footer,
  ModalNewTime
} from "./components";

function App() {
  const [modalVisibilidade, setModalVisibilidade] = useState("none");

  const modalOpen = () => {
    setModalVisibilidade(modalVisibilidade === "none" ? "flex" : "none");
  };

  const [times, setTimes] = useState([
    {
      id: uuid(),
      name: "Programação",
      color: "#57C278"
    },
    {
      id: uuid(),
      name: "Front End",
      color: "#82CFFA"
    },
    {
      id: uuid(),
      name: "Data Science",
      color: "#A6D157"
    },
    {
      id: uuid(),
      name: "DevOps",
      color: "#E06B69"
    },
    {
      id: uuid(),
      name: "UX e Design",
      color: "#DB6EBF"
    },
    {
      id: uuid(),
      name: "Mobile",
      color: "#FFBA05"
    },
    {
      id: uuid(),
      name: "Inovação e Gestão",
      color: "#FF8A29"
    }
  ]);

  const [colaboradores, setcolaboradores] = useState([]);

  const onSubmitNewColaborador = (colaborador) => {
    setcolaboradores([...colaboradores, colaborador]);
  };

  const onSumitNewTime = (time) => {
    setTimes([...times, { id: uuid(), ...time }]);
  };

  const deleteColaborador = (id) => {
    setcolaboradores(
      colaboradores.filter((colaborador) => id !== colaborador.id)
    );
  };

  const changeColors = (color, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.color = color;
        }
        return time;
      })
    );
  };

  useEffect(() => {
    console.info({ colaboradores, modalVisibilidade, times });
  });

  return (
    <div className="App">
      <Banner />
      <ModalNewTime
        onSumitNewTime={onSumitNewTime}
        modalOpen={modalOpen}
        visibilidadeModal={modalVisibilidade}
      />
      <Form
        onSubmit={(colaborador) => onSubmitNewColaborador(colaborador)}
        times={times}
        modalOpen={modalOpen}
        modalVisibilidade={modalVisibilidade}
      />
      <Subtitle />
      {times.map((time) => (
        <Time
          key={time.id}
          time={time}
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
