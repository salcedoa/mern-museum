import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/events">Exhibitions</Link></li>
					<li><Link to="/collection">Collection</Link></li>
					<li><Link to="/shop">Shop</Link></li>
					<li><Link to="/support">Support Us</Link></li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
};

export default Layout;