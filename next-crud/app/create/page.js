'use client';
import '../globals.css'
import { useState } from 'react';
import { redirect } from 'next/dist/server/api-utils';
import axios from 'axios';
import Link from 'next/link';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const postData = (e) => {
        e.preventDefault();
        axios.post('https://64241e5a47401740433376dd.mockapi.io/crudData',
            {
                firstName,
                lastName,
            })
            
    }

    return (
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
                <button
                    type="submit"
                    className="btn btn-secondary me-5"
                    onClick={() => redirect('/')}
                >
                    Cancel
                </button>
                <Link href="/"><button
                    type="submit"
                    className="btn btn-primary"
                    onClick={postData}
                >
                    Submit
                </button>
                </Link>
                
            </div>
        </form>
    )
}
