/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Axios from "axios";
const dotenv = require("dotenv");
dotenv.config();

const serverCatString = "https://shielded-eyrie-66484.herokuapp.com/api/getCat"

export const CatPicComponent = () => {
  const [catPicUrl, setCatPicUrl] = useState("");

  useEffect(() => {
    if (!catPicUrl) {
      console.log("setting CatPic in UseEffect");
      getCatPic(setCatPicUrl);
    }
  });

  return (
    <Container className="mb-1">
      <Row className="catPicComponent">
        <Col xs={12} sm={6} className="text-center">
          <Image src={catPicUrl} alt="ServerCat is sending a cat... wait for it..." className="m-1 catPic" />
        </Col>
        <Col xs={12} sm={6} className="text-center">
          <button className="btn-class" onClick={() => getCatPic(setCatPicUrl)}>
            New Cat
          </button>
        </Col>
      </Row>
    </Container>
  );
};
// Pass in the setCatPicUrl Hook

async function getCatPic(setCatPicUrl) {
  var response = await Axios(serverCatString)
  console.log(response, "response from serverCat")
  setCatPicUrl(response.data);
}
