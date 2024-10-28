import React, { useState } from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import "../App.css"

const All = () => {

  const { id } = useParams();
  return (
    <div>
      <Nav select={id} />
      <Container select={id}/>
    </div>
  );
};

export default All;
