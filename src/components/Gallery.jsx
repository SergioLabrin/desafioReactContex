import { FotosContext } from "../context/ContextFotos";
import { useContext } from "react";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { fotos, setFotos } = useContext(FotosContext);

  const toggleLike = (index) => {
    const updatedFotos = fotos.map((foto, idx) => {
      if (idx === index) {
        return { ...foto, liked: !foto.liked };
      }
      return foto;
    });
    setFotos(updatedFotos);
  };


  return (
    <div>
      
      <div className="gallery grid-columns-5 p-3">
        {fotos.map((foto, index) => (
          <div
            className="photo"
            style={{ backgroundImage: `url(${foto.src.tiny})` }}
            key={index}
          >
            <IconHeart filled={foto.liked} onClick={()=> toggleLike(index)}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

