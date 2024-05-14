'use client';
import '../globals.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function Create() {
    const { push } = useRouter()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const postData = (e) => {
        e.preventDefault();
        axios.post('https://64241e5a47401740433376dd.mockapi.io/crudData',
            {
                firstName,
                lastName,
            }).then(() => {
                push('/')
            })

    }

    return (
        <>
            <p className="mb-5 text-light text-center pt-5 fs-3 fw-bold">Create item</p>
            <form >
                <div className="form-group text-start">
                    <label className="text-muted mb-3">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group text-start">
                    <label className="text-muted mb-3 mt-3">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="form-group text-start">
                </div>
                <div className='d-flex justify-content-center mt-4'>
                    <Link href="/">
                        <button
                            type="submit"
                            className="btn btn-secondary me-5"
                        >
                            Cancel
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={postData}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}
