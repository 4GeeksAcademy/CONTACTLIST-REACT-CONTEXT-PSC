import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<ul className="nav justify-content-center">
			<li className="nav-item">
				<Link to="/demo">
				<button type="button" className="btn btn-primary m-3">Ver Contactos</button>
				</Link>
			</li>
			<li className="nav-item">
				<Link to="/add">
				<button type="button" className="btn btn-primary m-3">Agregar Contacto</button>
				</Link>
			</li>
		</ul>


	);
};