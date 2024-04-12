import { useState, useEffect } from "react";
import Car from "./Car";

const API = import.meta.env.VITE_BASE_URL;

function Cars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`${API}/cars`)
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
              {/* <th></th> */}
              <th>Click to Login</th>
              {/* <th>See this car</th> */}
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