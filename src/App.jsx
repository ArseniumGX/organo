import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  Banner,
  Form,
  Time,
  Subtitle,
  Footer,
  Modal,
  NewTime
} from "./components";

function App() {
  const [acao, setAcao] = useState("");
  const [modalVisibilidade, setModalVisibilidade] = useState("none");
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
  const [colaboradores, setColaboradores] = useState([]);

  const modalOpenOrClose = () => {
    setModalVisibilidade(modalVisibilidade === "none" ? "flex" : "none");
  };

  const addColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const addTime = (time) => {
    setTimes([...times, { id: uuid(), ...time }]);
  };

  const favAction = (id) =>
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorite = !colaborador.favorite;
        return colaborador;
      })
    );

  const deleteColaborador = (id) => {
    setColaboradores(
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
    colaboradores.length === 0 &&
      Array.isArray(JSON.parse(localStorage.getItem("colaboradores"))) &&
      JSON.parse(localStorage.getItem("colaboradores")).length > 0 &&
      setColaboradores(JSON.parse(localStorage.getItem("colaboradores")));
  }, []);

  useEffect(() => {
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores.length, colaboradores, times.length]);

  return (
    <div className="App">
      <Banner />
      <Modal
        modalOpenOrClose={modalOpenOrClose}
        visibilidadeModal={modalVisibilidade}
      >
        {acao === "NOVO" && (
          <NewTime
            onSumitNewTime={addTime}
            modalOpenOrClose={modalOpenOrClose}
          />
        )}
      </Modal>
      <Form
        onSubmit={(colaborador) => addColaborador(colaborador)}
        times={times}
        modalOpenOrClose={modalOpenOrClose}
        modalVisibilidade={modalVisibilidade}
        acao={setAcao}
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
          favoriteAction={favAction}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
