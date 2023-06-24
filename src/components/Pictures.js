import Frame from "./Frame";

const Pictures = () => {
  const records = [
    {
      id: 1,
      route: "apple",
      position: "div-1",
      url: "bg-[url('../src/img/apple.jpeg')]",
      bg: "bg-center",
    },
    {
      id: 2,
      route: "banana",
      position: "div-2 md:col-start-3",
      url: "bg-[url('../src/img/banana.jpeg')]",
      bg: "bg-center",
    },
    {
      id: 3,
      route: "peach",
      position: "div-3",
      url: "bg-[url('../src/img/peach.jpeg')]",
      bg: "bg-center",
    },
    {
      id: 4,
      route: "dragonfruit",
      position: "div-4",
      url: "bg-[url('../src/img/dragonfruit.jpeg')]",
      bg: "bg-center",
    },
    {
      id: 5,
      route: "guava",
      position: "div-5",
      url: "bg-[url('../src/img/guava.jpeg')]",
      bg: "bg-right",
    },
    {
      id: 6,
      route: "papaya",
      position: "div-6 md:col-start-2",
      url: "bg-[url('../src/img/papaya.jpeg')]",
      bg: "bg-center",
    },
    {
      id: 7,
      route: "passionfruit",
      position: "div-7 md:col-start-4",
      url: "bg-[url('../src/img/passionfruit.jpeg')]",
      bg: "bg-center",
    },
    {
      id: 8,
      route: "pomegranate",
      position: "div-8",
      url: "bg-[url('../src/img/pomegranate.jpeg')]",
      bg: "bg-center",
    },
    {
      id: 9,
      route: "rambutan",
      position: "div-9 md:col-start-3",
      url: "bg-[url('../src/img/rambutan.jpeg')]",
      bg: "bg-left",
    },
    {
      id: 10,
      route: "strawberry",
      position: "div-10 md:col-start-3",
      url: "bg-[url('../src/img/strawberry.jpeg')]",
      bg: "bg-center",
    },
  ];
  const items = records.map((record) => {
    return (
      <>
        <Frame
          key={record.id}
          position={record.position}
          route={record.route}
          gambar={record.url}
          bg={record.bg}
        />
      </>
    );
  });
  return <>{items}</>;
};

export default Pictures;
