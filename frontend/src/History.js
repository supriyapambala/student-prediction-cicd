import React, { useEffect, useState } from "react";
import axios from "axios";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/history")
      .then((res) => setHistory(res.data));
  }, []);

  return (
    <div>
      <h2>Prediction History</h2>
      <table border="1">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Prediction</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item._id}>
              <td>{item.fileName}</td>
              <td>{item.prediction}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
