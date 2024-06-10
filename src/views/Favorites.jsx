import React, { useContext } from 'react';
import { FotosContext } from "../context/ContextFotos";
import IconHeart from '../components/IconHeart';

const Favorites = () => {
  const { fotos } = useContext(FotosContext);
  const favoriteFotos = fotos.filter(foto => foto.liked);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoriteFotos.map((foto, index) => (
          <div
            className="photo"
            style={{ backgroundImage: `url(${foto.src.tiny})` }}
            key={index}
          >
            <IconHeart filled={foto.liked} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
