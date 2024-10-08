// src/components/hero/Teste.jsx

import React, { useEffect, useState } from 'react';
import { fetchData } from '../../API/localApi';

const Teste = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Nombre de composant {data.Navbar.components.length }</h1>
      {data.Navbar.components.map((e) => {
        const Component = e.component;
        return (
          <div key={e.id}>
            <br /> <br />
            <h3>ID: {e.id}</h3>
            <Component />
          </div>
        );
      })}
    </div>
  );
};

export default Teste;
