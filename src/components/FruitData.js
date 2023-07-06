import { Route, Routes, useLocation } from "react-router-dom";
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
      desc: "Apples are fruits that grow on apple trees (Malus domestica) from the Rosaceae family. Apple trees are deciduous fruit trees that have woody stems and vary in height from 2 meters to 12 meters. Apples are typically round in shape and come in various colors, including red, green, yellow, or a combination of these colors. Apples have several seeds inside them. The flesh of an apple is usually crisp and juicy, with a sweet or tart taste depending on the variety.",
      origin:
        "Apples originated from Central Asia, particularly Kazakhstan, around 10,000 years ago. From there, apples spread worldwide through trade and exploration. Ancient Romans introduced apple cultivation to Europe, while European immigrants brought apple seeds to North America. Since then, apples have been continuously developed and cultivated into the various varieties we know today. Apples remain a popular fruit and are widely consumed around the world.",
      variety:
        "There are thousands of different apple varieties worldwide. Some popular varieties include Golden Delicious, Granny Smith, Red Delicious, Gala, Fuji, Honeycrisp, and Pink Lady. Each variety has distinct characteristics in terms of taste, texture, and storage capability.",
      bg: "bg-red-200 text-slate-700",
    },
    {
      id: "02",
      nama: "Banana",
      path: "banana",
      image: banana,
      desc: "Bananas are fruits that originate from banana plants and have thick skin that is typically yellow or green. The flesh of a banana is white to yellow, sweet, and soft. Bananas are rich in nutrients such as vitamin C, vitamin B6, potassium, and fiber. They can be eaten ripe or unripe. Consuming bananas can aid in digestion, maintain fluid balance, and provide energy. Bananas are commonly used in various foods and hold cultural significance.",
      origin:
        "Bananas originated from the tropical regions of Southeast Asia. Banana plants have been cultivated for thousands of years in countries like Indonesia, Malaysia, and the Philippines. Bananas come from the wild banana species Musa acuminata and Musa balbisiana. Bananas have played a significant role in human history and are now widely consumed worldwide. They also hold cultural significance. Apart from being a nutritious food source, bananas are used for various purposes, such as raw material for textiles, building materials, and even as traditional medicinal ingredients in some cultures.",
      variety: `There are numerous different varieties of bananas, each with varying characteristics and flavors. Some popular banana varieties include Cavendish bananas, Gros Michel bananas (also known as "Raja" bananas), Raja Nangka bananas, Manzano bananas, Plantain bananas, Blue Java bananas, Lady Finger bananas (also known as "Susu" bananas), and many more. Each variety has its own distinct taste, texture, and uses.`,
      bg: "bg-yellow-200 text-slate-700",
    },
    {
      id: "03",
      nama: "Peach",
      path: "peach",
      image: peach,
      desc: "The peach fruit comes from the Prunus persica tree, which belongs to the Rosaceae family. Peaches have soft, juicy flesh, a distinctive sweet taste, and smooth skin. They are round in shape with a central groove resembling a hollow on one side. There are various peach varieties with different skin colors, including orange, pink, yellow, and white. Peaches usually have a hard stone in the center that protects the seed. The fruit typically ripens in the summer, particularly from June to August in the northern hemisphere. During the harvest season, peaches are abundantly available. Peaches are commonly consumed fresh as a refreshing and sweet snack. They are also used in various dishes and processed products such as pies, cakes, jams, yogurt, ice cream, and beverages like juices and smoothies. Peaches are also frequently used in both sweet and savory cuisines.",
      origin:
        "Peaches originated from the Western and Central regions of Asia, particularly the mountainous areas of southwestern China. Wild peaches were first cultivated by ancient Chinese civilizations around 2,000 BCE. From there, the peach fruit spread to various regions in Asia and later reached Europe through the Silk Road. Peaches were also brought to North America by European colonizers in the 16th and 17th centuries. Peaches are a popular fruit and widely consumed worldwide.",
      variety:
        "There are various different peach varieties found worldwide. Some popular peach varieties include Elberta, Redhaven, O'Henry, Georgia Belle, Hale, Red Baron, White Lady, Snow King, Snow Angel, Fire Bright, Arctic Jay, and many more. Each variety has its own unique taste and texture.",
      bg: "bg-orange-200 text-slate-700",
    },
    {
      id: "04",
      nama: "Dragon Fruit",
      path: "dragonfruit",
      image: dragonfruit,
      desc: "Dragon fruit, also known as pitaya, is a tropical fruit with brightly colored, spiky skin and white or red flesh. It has a soft, sweet taste and a distinctive aroma. Dragon fruit is rich in water, fiber, vitamins, minerals, and antioxidants. The fruit can be consumed fresh or used as an addition to fruit salads, juices, or smoothies. It originates from Central and South America.",
      origin:
        "Dragon fruit, also known as pitaya, originates from the tropical regions of Central America and South America. It was initially found in areas such as Mexico, Costa Rica, Colombia, and Ecuador. From there, dragon fruit spread to Southeast Asian countries like Vietnam, Thailand, and Indonesia, as well as to other parts of the world. The introduction of dragon fruit to various regions around the world occurred through trade and exploration by humans. The fruit captured people's attention due to its unique appearance and its rich nutritional content. Dragon fruit has become a popular fruit in many countries due to its delicious taste and health benefits.",
      variety:
        "There are several varieties of dragon fruit that are commonly distinguished by the color of their skin. The red and white varieties are the most common. Additionally, there is a yellow variety, which tends to be rarer. Some popular varieties include the Red Dragon Fruit (Hylocereus undatus), White Dragon Fruit (Hylocereus undatus), Super Red Dragon Fruit (Hylocereus costaricensis), Yellow Dragon Fruit (Hylocereus megalanthus), Purple Haze Dragon Fruit (Hylocereus polyrhizus), and Physical Graffiti Dragon Fruit (Hylocereus undatus x Hylocereus polyrhizus).",
      bg: "bg-slate-300 text-slate-700",
    },
    {
      id: "05",
      nama: "Guava",
      path: "guava",
      image: guava,
      desc: "Guava, also known as Psidium guajava, is a tropical fruit with green skin when young and yellow or pinkish when ripe. The flesh of the fruit can be white or red, sweet with a touch of acidity. Guava is rich in vitamin C, fiber, and antioxidants. It can be eaten fresh or used in various dishes such as juices, smoothies, jams, and fruit salads. In addition to the fruit flesh, guava leaves also have health benefits and are used in traditional medicine.",
      origin:
        "Guava fruit originates from Central and South America, where guava plants have existed for thousands of years. The plant has a long history in the native cultures of the region. Subsequently, Spanish explorers brought guava to Asia and Africa during the colonial era. From there, guava spread to various parts of the world through trade and colonization. Guava has adapted well to various tropical and subtropical climates and is now a popular cultivated plant in many countries.",
      variety:
        "There are many different varieties of guava fruit, with some of the most common being white-fleshed guava, red-fleshed guava, crystal guava, jelly guava, and red-skinned guava. Additionally, there are various guava varieties that grow in different tropical and subtropical regions worldwide, each with slightly different characteristics and flavors.",
      bg: "bg-green-300 text-slate-700",
    },
    {
      id: "06",
      nama: "Papaya",
      path: "papaya",
      image: papaya,
      desc: "Papaya is a tropical fruit that has an elongated shape with smooth and thin skin. When ripe, the skin turns yellow-orange. The fruit has soft and juicy flesh, with a sweet taste and slight acidity. Papaya is rich in vitamin C, vitamin A, fiber, potassium, and magnesium. Papaya also contains the enzyme papain, which is beneficial for digestion. Papaya has health benefits such as aiding in digestion, boosting the immune system, and protecting the body from free radical damage.",
      origin:
        "Papaya fruit originated from Central and South America, with its estimated origin in Mexico and Central America. The papaya plant has been cultivated by the Maya and Aztec civilizations for thousands of years. Subsequently, papaya was brought by Spanish explorers to various parts of the world during the era of exploration in the 16th century. Papaya thrives in warm climates with stable temperatures, making it a popular and extensively cultivated fruit in various tropical countries.",
      variety:
        "There are several common varieties of papaya fruit that are often found. Some popular varieties include Hawaiian papaya, Mexican papaya, Maradol papaya, Solo papaya, Strawberry papaya, Golden papaya, and others. Each variety has unique characteristics such as size, shape, color, and flavor of the fruit.",
      bg: "bg-orange-200 text-slate-700",
    },
    {
      id: "07",
      nama: "Passion Fruit",
      path: "passionfruit",
      image: passionfruit,
      desc: "The passion fruit has a wrinkled skin that is dark purple or yellow. Inside, it contains seeds surrounded by juicy, yellow or orange flesh. Passion fruit has a unique taste, a combination of sweetness and tartness, with a distinctive aroma. It originates from Central and South America. Passion fruit is rich in nutrients, such as vitamin C and fiber. The fruit can be consumed fresh or processed into juice, jam, or used as an addition in various dishes.",
      origin:
        "Passion fruit originated from South America and was introduced to Europe in the 16th century. Subsequently, it spread to various countries around the world. The fruit is popular for its unique taste and aroma. Passion fruit is used in a variety of foods and beverages. It is also associated with the concepts of passion and beauty. Passion fruit comes from the Passiflora edulis plant, which grows in tropical and subtropical regions. In the 19th century, passion fruit cultivation began to flourish in various countries, such as South Africa, Australia, India, and Hawaii. Some passion fruit varieties are cultivated for commercial production due to their attractive fruit quality and high demand. Passion fruit is often used in the production of juices, sauces, ice creams, desserts, and fruit-based beverages. The passion fruit plant is also grown as an ornamental plant due to its beautiful flowers. Additionally, several other Passiflora species have fruits similar to passion fruit, such as Passiflora quadrangularis (purple passion fruit) and Passiflora ligularis (yellow passion fruit). Both of these species also have a history of cultivation and usage similar to P. edulis.",
      variety:
        "There are various different varieties of passion fruit with differences in color, size, and taste characteristics. Some popular varieties include Purple Passion Fruit, Yellow Passion Fruit, Blue Passion Fruit, Red Passion Fruit, Golden Passion Fruit, Sweet Passion Fruit, and others.",
      bg: "bg-yellow-200 text-slate-700",
    },
    {
      id: "08",
      nama: "Pomegranate",
      path: "pomegranate",
      image: pomegranate,
      desc: "The pomegranate fruit has a round shape with thick and tough skin. The skin is usually dark red to purple, but there are also varieties with yellow or white skin. Inside, there are numerous small red seeds enclosed in juicy pulp. Each individual seed of a pomegranate is called an aril, which provides a distinctive sweet and tart flavor.",
      origin:
        "The pomegranate fruit is believed to have originated from a wide region, including Iran, India, and the Mediterranean area. Throughout history, pomegranate has been regarded as a symbol of eternity, fertility, and health. The fruit has a long and rich history in the culture and religion of various civilizations. Pomegranate has been cultivated and consumed for thousands of years. Some historical records indicate that pomegranate trees have existed since ancient times. In ancient Egypt, pomegranate was believed to symbolize immortality and fertility. Pomegranate is also mentioned in ancient mythology, where it is associated with the goddess Demeter and fertility.",
      variety:
        "There are several different varieties of pomegranate with unique characteristics. Some popular varieties include Wonderful, Hicaznar, Mollar de Elche, Red Globe, Angel Red, Early Foothill, Nana, Parfianka, and Red Silk. Each variety has slightly different taste, size, and color.",
      bg: "bg-red-300 text-slate-700",
    },
    {
      id: "09",
      nama: "Rambutan",
      path: "rambutan",
      image: rambutan,
      desc: `Rambutan is a fruit that is characterized by its spiky and colorful skin, which can be red or yellow. In the Indonesian language, "rambutan" comes from the word "rambut," meaning "hair," because its spiky skin resembles hair. The fruit has a sweet taste with a refreshing hint of acidity. Rambutan is a spiky fruit with translucent white flesh that is sweet and refreshing. The flesh is soft and juicy, with a seed in the center. Rambutan is popular as a fresh fruit and is used in various dishes and beverages. It grows on rambutan trees in tropical regions.`,
      origin: `Rambutan fruit originates from tropical regions in Southeast Asia, particularly Indonesia and Malaysia. The name "rambutan" comes from the Malay language, referring to the soft spines resembling hair on the fruit's skin. Rambutan has spread to other Southeast Asian countries and is also cultivated in countries beyond the region. Rambutan cultivation has experienced rapid growth to meet market demands.`,
      variety:
        "There are several varieties of rambutan fruit that can be found, especially in Southeast Asia. Some common rambutan varieties in Indonesia include red rambutan, yellow rambutan, green rambutan, rapiah rambutan, binjai rambutan, and many more.",
      bg: "bg-slate-200 text-slate-700",
    },
    {
      id: "10",
      nama: "Strawberry",
      path: "strawberry",
      image: strawberry,
      desc: "Strawberries are small, bright red fruits with a surface covered in tiny pits. They have a sweet and slightly acidic taste that is refreshing. The fruit has a soft yet firm texture and is commonly consumed fresh or used in various dishes such as juices, jams, cakes, and ice creams. Strawberries are also rich in nutrients and offer health benefits, and they are known for their distinctive aroma.",
      origin:
        "Strawberries originated from North America. The strawberry plant was first discovered in Virginia, United States. Wild populations of this plant have existed since prehistoric times, and strawberries have been an important part of the Native American diet for thousands of years. Later, when European colonists arrived in North America in the 17th century, they began cultivating and cultivating the strawberry plants found there. Through selection and breeding, new varieties that were larger and sweeter were developed. From North America, the cultivation of strawberries spread to Europe and then to the rest of the world. Today, strawberries are one of the most popular and widely consumed fruits in various parts of the world.",
      variety:
        "There are many strawberry varieties that have been developed and cultivated worldwide. Some popular varieties include Albion, Camarosa, Sweet Charlie, Seascape, Wild Strawberry, Ostara, and many more. Each variety has unique characteristics such as size, flavor, and harvest season.",
      bg: "bg-red-300 text-slate-700",
    },
  ];
  const pages = Datas.map((data) => {
    return (
      <Route
        key={data.id}
        path={`/${data.path}`}
        element={
          <div className={`${data.bg}`}>
            <Fruits
              id={data.id}
              nama={data.nama}
              img={data.image}
              desc={data.desc}
              origin={data.origin}
              variety={data.variety}
              bg={data.bg}
            />
          </div>
        }
      />
    );
  });
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home visibility="visible" pad="md:pt-28" />}
        />
        {pages}
      </Routes>
    </>
  );
};

export default FruitData;
