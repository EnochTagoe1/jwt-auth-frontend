import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//import Reviews from './Reviews'


function CarDetails() {
    const API = import.meta.env.VITE_BASE_URL;
    console.log(API)
  const [car, setCar] = useState({
    make: "",
    model: "",
    make_year: "",
    color: "",
    cylinders: "",
    price: "",
    image_path: "",
    is_favorite: fals});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/cars/${id}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch((error) => console.error(error));
  }, [id]);

  function deleteCar() {
    fetch(`${API}/cars/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/cars`))
      .catch((error) => console.error(error));
  }

  return (
    <article>
      <h3>
        {car.is_favorite ? <span>⭐️</span> : null} {car.name}
      </h3>
      <h5>
        
          
        
       
      </h5>
      <h6>{car.user}</h6>
      <p>{car.make}</p>
      <p>{car.model}</p>
      <p>{car.make_year}</p>
      <p>{car.color}</p>
      <p>{car.cylinders}</p>
      <p>{car.price}</p>
      <p>{car.image_path}</p>
      <p>{car.is_favorite}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/cars`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/cars/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={deleteCar}>Delete</button>
        </div>
      </div>
      {/* <Reviews /> */}
    </article>
  );
}

export default CarDetails;