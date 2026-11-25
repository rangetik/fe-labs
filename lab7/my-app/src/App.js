import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsCard from "./components/GoodsCard";

const goods = [
  { id: 1, name: "Яблуко",   price: 15, image: "/goods/apple.jpg" },
  { id: 2, name: "Груша",    price: 20, image: "/goods/pear.jpg" },
  { id: 3, name: "Виноград", price: 25, image: "/goods/grape.jpg" },
  { id: 4, name: "Персик",   price: 18, image: "/goods/peach.jpg" },
  { id: 5, name: "Банан",    price: 30, image: "/goods/banana.jpg" },
  { id: 6, name: "Апельсин", price: 22, image: "/goods/orange.jpg" },
];

function App() {
  return (
    <div>
      {/* Завдання 1: лаба 4 на React */}
      <Header />
      <Content />
      <Image src="/img/city.jpg" alt="Фото міста Одеса" />

      {/* Завдання 2: галерея товарів */}
      <h2 className="gallery-title">Галерея товарів</h2>
      <div className="gallery">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;