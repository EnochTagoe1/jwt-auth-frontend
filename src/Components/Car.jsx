import { Link } from "react-router-dom";



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
      <td style={{ cursor: "alias" }}>
        <a href={car.url} target="_blank" rel="noreferrer">
          {car.name}
        </a>
      </td>
      <td>
        <Link to={`/car/${car.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Car;