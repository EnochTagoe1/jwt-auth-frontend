import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
//import Reviews from './Reviews'


function CarDetails() {
    const API = import.meta.env.VITE_BASE_URL;
    // console.log(API)
  const [car, setCar] = useState({
    make: "",
    model: "",
    make_year: "",
    color: "",
    cylinders: "",
    price: "",
    image_path: "",
    is_favorite: false});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => setCar(data))
      .catch((error) => console.error(error));
  }, [id]);
  console.log(car, "car")
  function deleteCar() {
    fetch(`${API}/api/cars/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/dashboard`))
      .catch((error) => console.error(error));
  }

  return (
    <article>
      <h3>
        {car.is_favorite ? <span>⭐️</span> : null} {car.name}
      </h3>
      <h5>
        
        {car.make} {car.model}  
        
       
      </h5>
      <h6>{car.user_id}</h6>
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
          <Link to={`/dashboard`}>
          <button className="btn btn-sm btn-light rounded">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/cars/${id}/edit`}>
          <button className="btn btn-sm btn-light rounded">Edit</button>
          </Link>
        </div>
        <div>
        <button onClick={deleteCar} className="btn btn-sm btn-light rounded">Delete</button>
        </div>
        <div>{car.model}</div>
      </div>
      {/* <Reviews /> */}
    </article>
  );
}  

export default CarDetails;