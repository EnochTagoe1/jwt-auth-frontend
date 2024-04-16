import { Link } from "react-router-dom";

// "make": "BENZ",
// "model": "MAYBACH",
// "make_year": 1987,
// "color": "SILVER",
// "cylinders": "12CYL",
// "price": 120000,
// "image_path": "imageurl",
// "is_favorite": false

function Car({ car }) {
  return (
    <tr>
      <td>
        {car.is_favorite ? (
          <span>🏎️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "pointer" }}>
        {/* <a href={car.url} target="_blank" rel="noreferrer"> */}
        <Link to={`/cardetails/${car.id}`}>
          {car.make} {car.model} {car.make_year}
          ✏️</Link>
        {/* </a> */}
      </td>
      {/* <td>
      </td> */}
    </tr>
  );
}

export default Car;