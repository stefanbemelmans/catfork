import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import { CatPic } from "./CatPic";

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
          <Image src={catPicUrl} alt="logo" className="m-1 catPic" />
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
// TODO: remove url magic string
async function getCatPic(setCatPicUrl) {
  var response = await fetch(
    "https://thecatapi.com/api/images/get?format=src&size=med"
  );
  setCatPicUrl(response.url);
}
