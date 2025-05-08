import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const [lista, setLista] = useState([])

	async function obtenerContacto() {

		try {
			const response = await fetch('https://playground.4geeks.com/contact/agendas/Agenda')

			console.log(response)
			if (response.status === 404) {
				return
			}

			const data = await response.json()
			console.log(data)

			setLista(data.contacts)
		}
		catch (error) {
			console.log(error)
		}


	}

	useEffect(() => {
		obtenerContacto()
	}, [])


	return (
		<div className="text-center mt-5">
			<ul className="list-group">
				{lista.map((contacto, id) => (
					<li key={id} className="list-group-item">
						{contacto.name}
					</li>

				))}

			</ul>

		</div>
	);
};

export default Home