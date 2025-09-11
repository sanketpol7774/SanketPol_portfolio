import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(prev => !prev); // toggle true/false
  };

  return (
    <nav className="navbar">
      {/* Left */}
      <div className="left_nav">
        <h2>Sanket Pol</h2>
      </div>

      {/* Right */}
      <div className="right_nav">
        <a href="#hero">Home</a>
        <a href="#about_main">About</a>
        <a href="#projects">Projects</a>
        <a href="#about_main">Skills</a>
        <a href="#footar">Contact</a>
      </div>

      {/* Menu */}
      <div className="menu">
        <button onClick={toggleCart} id="btn">
          <AiOutlineMenu />
        </button>

        {showCart && (
          <div className="cart">
            <a href="#hero">Home</a>
            <a href="#about_main">About</a>
            <a href="#projects">Projects</a>
            <a href="#about_main">Skills</a>
            <a href="#footar">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
