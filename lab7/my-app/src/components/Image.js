import { useState } from "react";

function Image({ src, alt }) {
  const [images, setImages] = useState([600]);

  const add = () => setImages([...images, 600]);

  const resizeLast = (delta) => {
    if (images.length === 0) return;
    const last = images[images.length - 1];
    const width = Math.min(1200, Math.max(100, last + delta));
    setImages([...images.slice(0, -1), width]);
  };

  const remove = () => setImages(images.slice(0, -1));

  return (
    <section>
      <div className="images">
        {images.map((width, index) =>
          index === 0 ? (
            <a key={index} href="https://omr.gov.ua/" target="_blank" rel="noreferrer">
              <img src={src} alt={alt} width={width} />
            </a>
          ) : (
            <img key={index} src={src} alt={alt} width={width} />
          )
        )}
      </div>
      <div className="buttons">
        <button onClick={add}>Додати</button>
        <button onClick={() => resizeLast(50)}>Збільшити</button>
        <button onClick={() => resizeLast(-50)}>Зменшити</button>
        <button onClick={remove}>Видалити</button>
      </div>
    </section>
  );
}

export default Image;