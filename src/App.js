import React, { useState } from 'react';
import './App.css';

const images = {
  nature: ['nature1.jpg', 'nature2.jpg', 'nature3.jpg'],
  city: ['city1.jpg', 'city2.jpg', 'city3.jpg'],
  animals: ['animals1.jpg', 'animals2.jpg', 'animals3.jpg'],
};

function App() {
  const [category, setCategory] = useState('nature');
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <h1>Galeria zdjęć</h1>

      <div className="buttons">
        <button onClick={() => setCategory('nature')}>Natura</button>
        <button onClick={() => setCategory('city')}>Miasto</button>
        <button onClick={() => setCategory('animals')}>Zwierzęta</button>
      </div>

      <div className="gallery">
        {images[category].map((img, idx) => (
          <img
            key={idx}
            src={`${process.env.PUBLIC_URL}/images/${img}`}
            alt={img}
            className="thumbnail"
            onClick={() => setSelectedImage(`${process.env.PUBLIC_URL}/images/${img}`)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Powiększone" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default App;
