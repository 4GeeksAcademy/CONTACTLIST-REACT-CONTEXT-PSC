import React, { useState } from "react"


const CrearContacto = () => {

    const [full_name, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)

    async function addContact() {
        console.log(full_name, email, phone, address)
        try {
            if(full_name === '' || email === '' || phone === '' || address === '') {
                setError('HA OCURRIDO UN PROBLEMA!!')
                setSuccess(null)
                return
            }

            const response = await fetch('https://playground.4geeks.com/contact/agendas/Agenda/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": full_name,
                    "email": email,
                    "phone": phone,
                    "address": address
                })
            })
            if (response.status === 201) {
                setFullname('')
                setEmail('')
                setPhone('')
                setAddress('')
                setError(null)
                setSuccess('Contacto guardado')
            } else {
                setError('contacto no creado')
                setSuccess(null)

            }
            

        }

        catch (error) {
            console.log(error)
        }


    }



    return (
        <> 
            {
                !!success && (
                    <div id="alertSuccess" className="alert alert-success" role="alert">
                        <h4 class="alert-heading">{success}</h4>
                        <p>El CONTACTO ha sido guardado correctamente. Puedes acceder a la informacion detallada de un contacto haciendo click en el boton de "ver contacto" que se encuentra en la parte superior.</p>
                    </div>
                )
            }
            {
                !!error && (
                    


                    <div id="alertError" className="alert alert-danger mb-3" role="alert">
                       <h4 class="alert-heading">{error}</h4>
  <p>Para guardar tu CONTACTO es necesario que completes TODOS los datos solicitados. Vuelve a intentarlo rellenando todos los campos con la informacion requerida </p>
                    </div> 
                )
            }
            <div className="contactInfo">
                <div className="mb-3 row">
                    <label htmlFor="fullname" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="fullname" value={full_name} onChange={(e) => setFullname(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="saveButton" onClick={addContact} type="button" className="btn btn-success m-auto"><i id="saveIcon" class="fa-solid fa-floppy-disk"></i><p>Guardar Contacto</p></button>
                </div>

            </div>

        </>

    );

}

export default CrearContacto;
