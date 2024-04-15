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

//   return (
//     <div className="Edit">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           value={car.name}
//           type="text"
//           onChange={handleTextChange}
//           placeholder="Name of Website"
//           required
//         />
//         <label htmlFor="url">URL:</label>
//         <input
//           id="url"
//           type="car
//           pattern="http[s]*://.+"
//           required
//           value={car.url}
//           placeholder="http://"
//           onChange={handleTextChange}
//         />
//         <label htmlFor="category">Category:</label>
//         <input
//           id="category"
//           type="text"
//           name="category"
//           value={car.category}
//           placeholder="educational, inspirational, ..."
//           onChange={handleTextChange}
//         />
//         <label htmlFor="is_favorite">Favorite:</label>
//         <input
//           id="is_favorite"
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           checked={car.is_favorite}
//         />
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           name="description"
//           value={car.description || ""}
//           onChange={handleTextChange}
//           placeholder="Describe why you selected this song"
//         />
//         <br />

//         <input type="submit" />
//       </form>
//       <Link to={`/cars/${id}`}>
//         <button>Nevermind!</button>
//       </Link>
//     </div>
//   );
}

export default CarEditForm;