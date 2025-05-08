import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

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

	async function deleteContact(id) {

		try {
			const response = await fetch(`https://playground.4geeks.com/contact/agendas/Agenda/contacts/${id}`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' }

			})

			if (response.status === 204) {
				obtenerContacto()
			}

		} catch (error) {
			console.log(error)
		}


	}


	useEffect(() => {
		obtenerContacto()
	}, [])


	return (

		<div id="directory" className="mt-5">
			<ul className="list-group">
				{lista.map((contacto, index) => (
					<table id="directoryInfo" key={index} className="list-group-item">
						<tr>
							<th rowSpan={4}><img src="https://static.thenounproject.com/png/58663-200.png" /></th>
							<th className="fs-2">{contacto.name} </th>
						</tr>
						<tr>
							<th><i class="fa-1x float-end mx-3 fa-solid fa-envelope"></i></th>
							<td className="fs-4 ">{contacto.email}</td>
						</tr>
						<tr>
							<th><i class="fa-1x float-end mx-3 fa-solid fa-square-phone"></i></th>
							<td className="fs-4">{contacto.phone}</td>
						</tr>
						<tr>
							<th><i class="fa-2x float-end mx-3 fa-solid fa-location-dot"></i></th>
							<td className="fs-4">{contacto.address}</td>
						</tr>
						<div className="btn-group float-end">
							<Link className="btn btn-info icono" to={`/editContact/${contacto.id}`}><i class="fa-solid fa-pen-to-square"></i></Link>
							<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target={"#exampleModal" + contacto.id}>
								<i class="fa-solid fa-trash"></i>
							</button>
							<div class="modal fade" id={"exampleModal" + contacto.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLabel">ADVERTENCIA</h5>
											<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div class="modal-body">
											<p>¿Esta seguro que desea eliminar el contact? una vez eliminado el contacto los datos no podran ser recuperados</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Volver</button>
											<button className="btn btn-danger  icono" data-bs-dismiss="modal" onClick={() => deleteContact(contacto.id)}>Eliminar</button>
										</div>
									</div>
								</div>
							</div>
							{/* 							
 */}						</div>

					</table>

				))}

			</ul>

		</div>
	);
};

export default Home