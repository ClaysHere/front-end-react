import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
import Navbar from "./Navbar";

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
      bg: "bg-red-200 text-slate-700",
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
      bg: "bg-yellow-200 text-slate-700",
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
      bg: "bg-orange-200 text-slate-700",
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
      bg: "bg-slate-300 text-slate-700",
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
      bg: "bg-green-300 text-slate-700",
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
      bg: "bg-orange-200 text-slate-700",
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
      bg: "bg-yellow-200 text-slate-700",
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
      bg: "bg-red-300 text-slate-700",
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
      bg: "bg-slate-200 text-slate-700",
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
      bg: "bg-red-300 text-slate-700",
    },
  ];
  let ada = false;
  const pages = Datas.map((data) => {
    return (
      <Route
        key={data.id}
        path={`/${data.path}`}
        element={
          <>
            {ada ? <Navbar bg={data.bg} /> : null}
            <Fruits
              id={data.id}
              nama={data.nama}
              img={data.image}
              desk1={data.desc1}
              desk2={data.desc2}
              desk3={data.desc3}
              bg={data.bg}
            />
          </>
        }
      />
    );
  });
  const location = useLocation();

  return (
    <AnimatePresence>
      {ada ? null : <Navbar />}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home visibility="visible" pad="md:pt-28" />}
        />
        {pages}
      </Routes>
    </AnimatePresence>
  );
};

export default FruitData;
