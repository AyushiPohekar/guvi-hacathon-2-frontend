import { Equipments } from "./Equipments";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

 function Equipmentlist() {
    const API="https://62a970daec36bf40bdb78cff.mockapi.io";
    const [equipmentlist, setEquipmentlist] = useState([]);

  const allEquipments = () => {
    fetch(`${API}/equipments`, { method: "GET" })
      .then((data) => data.json())
      .then((eqs) => setEquipmentlist(eqs));
  };

  useEffect(() => allEquipments(), []);
  return(
    <div className="equipment-list">
    {equipmentlist.map((eq) => (
      <Equipments equipment={eq} key={eq.id}
       id={eq.id} />
    ))}
  </div>
  )
}
export default Equipmentlist ;