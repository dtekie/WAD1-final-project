import React from "react";

const Footer = () => {
  return (
    <footer>
      <h3>&copy; 2023 MIU. All rights reserved.</h3>
    </footer>
  );
};

export default React.memo(Footer);
// export default React.memo(function Footer() {
//   return (
//     <footer>
//       <h3>&copy; 2023 MIU. All rights reserved.</h3>
//     </footer>
//   );
// });
