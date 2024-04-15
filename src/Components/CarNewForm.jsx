import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function CarNewForm() {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    make: "",
    model: "",
    make_year: "",
    color: "",
    cylinders: "",
    price: "",
    image_path: "",
    is_favorite: false});


  // Add a car. Redirect to the index view.
  const addCar = () => {
    fetch(`${API}/cars`, {
      method: "POST",
      body: JSON.stringify(car),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/cars`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setCar({ ...car, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setCar({ ...car, is_favorite: !car.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCar();
  };

  return (
    <div className="container">
      <h2>Add New Car</h2>
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
    </div>
  );
  

 
}

export default CarNewForm;