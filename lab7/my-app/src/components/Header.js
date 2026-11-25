import { useState } from "react";

function Header() {
  const [clicked, setClicked] = useState(null);

  let style = {};
  if (clicked === true) {
    style = { backgroundColor: "blue", color: "white" };
  } else if (clicked === false) {
    style = { backgroundColor: "lime", color: "black" };
  }

  return (
    <header>
      <h1>Сторінка про автора</h1>
      <h2
        className="clickable"
        style={style}
        onClick={() => setClicked(!clicked)}
      >
        Жила Іван Дмитрович
      </h2>
    </header>
  );
}

export default Header;