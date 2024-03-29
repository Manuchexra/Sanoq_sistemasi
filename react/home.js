import React, { useEffect, useState } from 'react';
import axios from 'axios';

function lessonsList() {
  const [lessonss, setlessons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/lessons/')
      .then(response => {
        setlessons(response.data);
      });
  }, []);

  return (
    <ul>
      {lessonss.map(lessonss => (
        <li key={lessonss.id}>{lessonss.theme}</li>
      ))}
    </ul>
  );
}

export default lessonsList;