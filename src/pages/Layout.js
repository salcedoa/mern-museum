import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.png';
import menuIcon from '../assets/menu.png';

const Layout = () => {
	return (
		<>
			<nav>
				<div className="nav-content-wrapper laptop-center">
					<Link to={"/"}>
						<img src={logo} alt="logo for museum of human history" id="logo" />
					</Link>

					<img src={menuIcon} alt="menu icon" id="menu-icon" />

					<ul className="menu-links">
						<li><Link to="/">Home</Link></li>
						<li><Link to="/events">Exhibitions</Link></li>
						<li><Link to="/collection">Collection</Link></li>
						<li><Link to="/shop">Shop</Link></li>
						<li><Link to="/support">Support Us</Link></li>
						<li><Link to="/book"/></li>
					</ul>
				</div>
			</nav>

			<Outlet />

			<footer>
				<p>©{new Date().getFullYear()} <a href="https://salcedoa.github.io">Andreas Salcedo</a></p>
				<p><a href="https://www.flaticon.com/free-icons/bangkok" title="bangkok icons">Bangkok icons created by Wichai.wi - Flaticon</a></p>
			</footer>
		</>
	);
};

export default Layout;