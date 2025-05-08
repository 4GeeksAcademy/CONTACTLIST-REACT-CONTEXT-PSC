import React, { useState } from "react"


const CrearContacto = () => {

    const [full_name, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

   async function addContact() {

    if (e.key === 'onClick') {

        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/Agenda'), {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'}    
            }
            
        } catch (error) {
            
        }
    }


    }

    return (
        <>
            <div className="mb-3 row">
                <label for="fullname" className="col-sm-2 col-form-label">Full Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="fullname" value={email} onChange={(e) =>setFullname(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="email" value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="phone" className="col-sm-2 col-form-label">Phone</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="phone" value={phone} onChange={(e) =>setPhone(e.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="address" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="address" value={address} onChange={(e) =>setAddress(e.target.value)}/>
                </div>
            </div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button onClick={handleClick} type="button" className="btn btn-success m-auto">Guardar Contacto</button>
            </div>



        </>

    );

}

export default CrearContacto;
