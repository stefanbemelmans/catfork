import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
  
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

    <div className="catPicComponent m-2 p-2">
      <div className="catPic">
        <img className="h-100 w-100" src={catPicUrl} alt="logo" />
      </div>
      <button className="btn-class" onClick={() => getCatPic(setCatPicUrl)}>
        New Cat
      </button>
    </div>
    // Trying bootstrap grid...it's only 2 components, breakpoints will do I think.

    // <Container>
    // <Row>
    //   <Col xs={12} sm={6} p-2>
    //     <Image src={catPicUrl} rounded className="catpic" />
    //   </Col>
    //   <Col  xs={12} sm={6}>
    //   <button className="btn-class" onClick={() => getCatPic(setCatPicUrl)}>
    //     New Cat
    //   </button>
    //     {/* <Image src="holder.js/171x180" roundedCircle /> */}
    //   </Col>
      // <Col xs={6} md={4}>
        // <Image src="holder.js/171x180" thumbnail />
      // </Col> 
  //   </Row>
  // </Container>

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
