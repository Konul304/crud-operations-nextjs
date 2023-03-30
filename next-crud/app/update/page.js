'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function Update() {
    const { push } = useRouter()
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
    }, []);

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`https://64241e5a47401740433376dd.mockapi.io/crudData/${id}`, {
            firstName,
            lastName,
        }).then(() => {
            push('/')
        })
    }

    return (
        <>
            <div>
                <p className="mb-5 text-light text-center pt-5 fs-3 fw-bold">Update item</p>
                <form className="mt-5" >
                    <div className="form-group text-start ">
                        <label className="text-muted mb-3">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group text-start">
                        <label className="text-muted mb-3 mt-3">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group text-start">
                    </div>

                    <div className='d-flex justify-content-center mt-4'>
                        <Link href="/"><button
                            type="submit"
                            className="btn btn-secondary me-5"
                        >
                            Cancel
                        </button></Link>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={updateAPIData}
                        >
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}