import { useRef } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import "../Styles/Navbar.css"
import logo from '../Images/Group 12.png'
import CategoriesForProps from "./Categories/CategoriesForProps";
import Categories from "./Categories/CategoriesData";

function Navbar() {
	const navRef = useRef();
	const showNavbar = () => {
	navRef.current.classList.toggle("responsive_nav");
	};


	return (
	<header 
		style={{
			boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
		}}>
      <div >
      <button 
            style={{
                color:'white',
                fontSize: '1.2em',
                display:'flex',
                gap:'2em'

            }}className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
            <img
            width='24em'
            alt='logo' 
            src ={logo}/>
            
          <h3 className="h3-for-navbar">HydraExpress</h3>
      </div>	
      <nav className="nav-bar" ref={navRef}>

      {Categories.map((e)=>{
       return (
       <CategoriesForProps 
       icon = {e.icon}
       name={e.name}/>
     );})}
			
				<button
            className="nav-btn nav-close-btn"
					  onClick={showNavbar}>
					  <FaTimes />
				</button>
			</nav>
      <h6  className="cart-search-user">
				<span className="utton">
					<FaShoppingCart className="utton" />
				</span>
                <span className="utton">
					<FaSearch className="utton" />
				</span>
                <span className="utton">
					<FaUser  className="utton"/>
				</span>
			</h6>
		
    
		</header>
	);
}

export default Navbar;