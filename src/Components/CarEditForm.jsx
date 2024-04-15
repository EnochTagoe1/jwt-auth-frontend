import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function CarEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState({
    
      make: "",
      model: "",
      make_year: "",
      color: "",
      cylinders: "",
      price: "",
      image_path: "",
      is_favorite: false

  });



  const handleTextChange = (event) => {
    setCar({ ...car, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCar({ ...car, is_favorite: !car.is_favorite });
  };

  // Update a car. Redirect to show view
  const updateCar = () => {
    // console.log(`${API}/cars/${id}`);

    fetch(`${API}/cars/${id}`, {
      method: "PUT",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate(`/cars/${id}`))
      .catch((error) => console.error("catch", error));
  };

  // On page load, fill in the form with the car data.
  useEffect(() => {
    fetch(`${API}/cars/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCar(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCar();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="make" className="form-label">Make</label>
          <input type="text" className="form-control" id="make" value={car.make} onChange={handleTextChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="model" className="form-label">Model</label>
          <input type="text" className="form-control" id="model" value={car.model} onChange={handleTextChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="make_year" className="form-label">Make Year</label>
          <input type="text" className="form-control" id="make_year" value={car.make_year} onChange={handleTextChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">Color</label>
          <input type="text" className="form-control" id="color" value={car.color} onChange={handleTextChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="cylinders" className="form-label">Cylinders</label>
          <input type="text" className="form-control" id="cylinders" value={car.cylinders} onChange={handleTextChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" className="form-control" id="price" value={car.price} onChange={handleTextChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="image_path" className="form-label">Image Path</label>
          <input type="text" className="form-control" id="image_path" value={car.image_path} onChange={handleTextChange} />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="is_favorite" checked={car.is_favorite} onChange={handleCheckboxChange} />
          <label className="form-check-label" htmlFor="is_favorite">Is Favorite</label>
        </div>
        <button type="submit" className="btn btn-primary">Add Car</button>
      </form>
      <Link to={`/cars/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default CarEditForm;