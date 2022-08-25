import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  const handleInpuntChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => handleInpuntChange(e)}
      />
      <input type="submit" value="Agregar"/>
    </form>
  );
}
