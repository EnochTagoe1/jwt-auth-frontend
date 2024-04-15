import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Car from "./Car";

const API = import.meta.env.VITE_BASE_URL;

function Cars() {
    const { user } = useOutletContext();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`${API}/api/cars/user/${user.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {console.log(data)
        setCars(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="Cars">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Click to Login</th>
              
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => {
              return <Car key={car.id} car={car} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Cars;