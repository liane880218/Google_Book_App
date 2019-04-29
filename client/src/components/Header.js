import React from "react";
import heroImage from "../images/books-2.jpg";

const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100%",
  height: "calc(80vw * .43333)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google Books Search</h1>
        </header>
    );
}

export default Header;