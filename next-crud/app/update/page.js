'use client';
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";
import Link from "next/link";

export default function Update() {
    const { push } = useRouter();
    const [user,setUser]= useState({id:null,firstName:"",lastName:""})

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setUser({id:params.get("id"),firstName:params.get("firstName"),lastName:params.get("lastName")})
    }, [user.firstName])

    const [firstName2, setFirstName2] = useState('');
    const [lastName2, setLastName2] = useState('');

    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`https://64241e5a47401740433376dd.mockapi.io/crudData/${user.id}`, {
            firstName: firstName2,
            lastName: lastName2,
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
                            placeholder={user.firstName}
                            onChange={(e) => setFirstName2(e.target.value)}
                        />
                    </div>

                    <div className="form-group text-start">
                        <label className="text-muted mb-3 mt-3">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder={user.lastName}
                            onChange={(e) => setLastName2(e.target.value)}
                        />
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
