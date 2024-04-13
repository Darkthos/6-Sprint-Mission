// export async function getReviews() {
//   const response = await fetch("https://panda-market-api.vercel.app/product");
//   const body = await response.json();
//   return body;
// }
import React from "react";
import ReactDOM from "react-dom/client";
// import "swagger-ui-react/swagger-ui.css";
// import { App } from "~App.jsx";

export default function Swagger() {
  const url = "https://panda-market-api.vercel.app/products";
  console.log(url);
  return <Swagger url={url} />;
}
