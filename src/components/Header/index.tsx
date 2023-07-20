import React from "react";

const Header: React.FC = () => {
  return(
    <header>
      <h1>FICTSHOP</h1>
        <div>
          <input type="text" />
          <button>search</button>
        </div>
        <div>
          <button>CART</button>
        </div>
    </header>
  )
}

export default Header;