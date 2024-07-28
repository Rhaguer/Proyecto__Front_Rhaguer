import "./HeroesCard.css";

export const HeroesCard = ({ id, nombre, tipo, origen, descripcion }) => {
  const imgSrc = `/assets/heroes/${id}.jpg`;

  return (
    <div className="card text-white bg-dark mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={imgSrc}
            className="card-img"
            alt={nombre}
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Nombre: {nombre}</h5>
            <p className="card-text">Tipo: {tipo}</p>
            <p className="card-text">Origen: {origen}</p>
            <p className="card-text">Descripción: {descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
