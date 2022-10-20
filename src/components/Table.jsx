import React, { useContext } from 'react';
import Context from '../context/context';

export default function Table() {
  const { data, inputNameFilter } = useContext(Context);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.filter((el) => el.name.toUpperCase()
            .includes(inputNameFilter.toUpperCase()))
            // .filter((elem) => elem.resuts.toUpperCase().includes(coluna.toUpperCase()))
            .map((e) => (
              <tr key={ e.name }>
                <td>{e.name}</td>
                <td>{e.rotation_period}</td>
                <td>{e.orbital_period}</td>
                <td>{e.diameter}</td>
                <td>{e.climate}</td>
                <td>{e.gravity}</td>
                <td>{e.terrain}</td>
                <td>{e.surface_water}</td>
                <td>{e.population}</td>
                <td>
                  {e.films
                    .map((filme, index) => <p key={ index }>{filme}</p>)}
                </td>
                <td>{e.created}</td>
                <td>{e.edited}</td>
                <td>{e.url}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}
