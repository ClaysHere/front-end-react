import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Fruits from "./Fruits";
import apel from "../img/apple.jpeg";
import banana from "../img/banana.jpeg";
import peach from "../img/peach.jpeg";
import dragonfruit from "../img/dragonfruit.jpeg";
import guava from "../img/guava.jpeg";
import papaya from "../img/papaya.jpeg";
import passionfruit from "../img/passionfruit.jpeg";
import pomegranate from "../img/pomegranate.jpeg";
import rambutan from "../img/rambutan.jpeg";
import strawberry from "../img/strawberry.jpeg";

const FruitData = () => {
  const Datas = [
    {
      id: "01",
      nama: "Apple",
      path: "apple",
      image: apel,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-red-500",
    },
    {
      id: "02",
      nama: "Banana",
      path: "banana",
      image: banana,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-yellow-400",
    },
    {
      id: "03",
      nama: "Peach",
      path: "peach",
      image: peach,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-orange-300",
    },
    {
      id: "04",
      nama: "Dragon Fruit",
      path: "dragonfruit",
      image: dragonfruit,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-slate-300",
    },
    {
      id: "05",
      nama: "Guava",
      path: "guava",
      image: guava,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-green-500",
    },
    {
      id: "06",
      nama: "Papaya",
      path: "papaya",
      image: papaya,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-orange-500",
    },
    {
      id: "07",
      nama: "Passion Fruit",
      path: "passionfruit",
      image: passionfruit,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-yellow-500",
    },
    {
      id: "08",
      nama: "Pomegranate",
      path: "pomegranate",
      image: pomegranate,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-red-600",
    },
    {
      id: "09",
      nama: "Rambutan",
      path: "rambutan",
      image: rambutan,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-slate-200",
    },
    {
      id: "10",
      nama: "Strawberry",
      path: "strawberry",
      image: strawberry,
      desc1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      desc3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad, odit tempora rerum delectus quos et accusamus repellendus vitae ab fugit saepe natus nostrum labore aliquam, qui quidem a quasi?",
      bg: "bg-red-600",
    },
  ];
  const pages = Datas.map((data) => {
    return (
      <Route
        key={data.id}
        path={`/${data.path}`}
        element={
          <Fruits
            id={data.id}
            nama={data.nama}
            img={data.image}
            desk1={data.desc1}
            desk2={data.desc2}
            desk3={data.desc3}
            bg={data.bg}
          />
        }
      />
    );
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              text1="Tugas Pra UAS"
              text2="Kelompok CodePhile"
              text3="Instagram"
              text4="Gitlab"
              text5="Github"
            />
          }
        />
        {pages}
      </Routes>
    </BrowserRouter>
  );
};

export default FruitData;
