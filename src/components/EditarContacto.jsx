import React, { useState } from "react"
import { useParams } from "react-router-dom"


const EditarContacto = () => {

    const [full_name, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const { id } = useParams()

    async function editContact(id) {
        console.log(full_name, email, phone, address)
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/Agenda/contacts/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "name": full_name,
                    "email": email,
                    "phone": phone,
                    "address": address
                })
            })
            console.log(response)

        } catch (error) {
            console.log(error)
        }


    }


    return (
        <>
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
                <button onClick={() => editContact(id)} type="button" className="btn btn-success m-auto"></button>
            </div>



        </>

    );

}

export default EditarContacto;
