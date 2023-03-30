'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';

export default function Read() {
    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('https://64241e5a47401740433376dd.mockapi.io/crudData')
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
    }

    const getData = () => {
        axios.get('https://64241e5a47401740433376dd.mockapi.io/crudData')
            .then((response) => {
                setAPIData(response.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://64241e5a47401740433376dd.mockapi.io/crudData/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <>
            <div className='table_container '>
                <table className="table bg-light rounded-3 table-hover">
                    <thead>
                        <tr className='text-muted'>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {APIData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>
                                        <Link href="/update">
                                            <button
                                                onClick={() => setData(data)}
                                                className='btn btn-secondary'>
                                                Update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => onDelete(data.id)}
                                            className='btn btn-danger'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Link href="/create">
                <button
                    className='btn btn-light fw-bold'>
                    Add
                </button>
            </Link>
        </>
    )
}