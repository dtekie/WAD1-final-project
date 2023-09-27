import React from "react";

const Footer = () => {
  console.log("Rendering Footer");
  return (
    <footer>
      <h3>&copy; 2023 MIU. All rights reserved.</h3>
    </footer>
  );
};

export default React.memo(Footer);
