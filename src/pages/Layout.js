import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.png';

const Layout = () => {
	return (
		<>
			<nav>
				<Link to={"/"}>
					<img src={logo} alt="logo for museum of human history" id="logo" />
				</Link>

				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/events">Exhibitions</Link></li>
					<li><Link to="/collection">Collection</Link></li>
					<li><Link to="/shop">Shop</Link></li>
					<li><Link to="/support">Support Us</Link></li>
					<li><Link to="/book"/></li>
				</ul>
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