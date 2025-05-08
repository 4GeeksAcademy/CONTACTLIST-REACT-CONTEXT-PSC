import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<ul id="navBar" className="nav justify-content-center">
			<li className="nav-item">
				<Link id="viewButton" className="btn btn-primary m-3" to="/"><i id="viewContact" class="fa-solid fa-address-card"></i><h1>Ver Contactos</h1></Link>
			</li>
			<li className="nav-item">
				<Link id="addButton" className="btn btn-primary m-3" to="/add"><i id="addContact" class="fa-solid fa-plus"></i><h1>Agregar nuevo</h1></Link>
			</li>
		</ul>


	);
};