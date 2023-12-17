import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState(null);
  const [columns, setColumns] = useState(null);
  const id = 1;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=1`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setColumns(Object.keys(data[0]));
      });
  }, []);

  return (
    <div className="container">
      <h1>Table</h1>
      <table className="table">
        <thead>
          <tr>
            {columns?.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              <td>{row.postId}</td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
