import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export function Equipments({ equipment,id }) {
  const navigate=useNavigate();
  return (
    <div className="equipment-container">
      <img
        src={equipment.img}
        alt={equipment.name}
        className="equipment-picture" />
      <h2 className="equipment-name">{equipment.name}</h2>

      <div className="detail-button">
       
      <Button variant="contained" onClick={()=>navigate(`/equipments/${id}`)}>View Details</Button>

      </div>
    </div>
  );
}