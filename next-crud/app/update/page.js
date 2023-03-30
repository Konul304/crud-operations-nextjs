'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default function Update() {
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
        })
    }

    return (
        <>
            <div>
                <form >
                    <div className="form-group text-start">
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

                    <div className='d-flex justify-content-center'>
                        <button
                            type="submit"
                            className="btn btn-secondary me-5"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>
                        <Link href="/"><button
                            type="submit"
                            className="btn btn-primary"
                            onClick={updateAPIData}
                        >
                            Submit
                        </button></Link>
                        
                    </div>
                </form>
            </div>
        </>
    )
}