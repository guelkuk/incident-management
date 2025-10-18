import './MyIncident.scss'
import React, {useState} from 'react'

const MyIncident = () => {
    const [search, setSearch] = useState('');
    console.log(search)

    const incidents = [
        { id: 1, title: 'Network down', category: 'Network', status: 'Open', assignedTo: 'Alice', createdAt: '2025-10-10' },
        { id: 2, title: 'Email not working', category: 'Software', status: 'In Progress', assignedTo: 'Bob', createdAt: '2025-10-12' },
        { id: 3, title: 'Printer offline', category: 'Hardware', status: 'Resolved', assignedTo: 'Charlie', createdAt: '2025-10-14' },
    ];

    const filtered = incidents.filter(inc =>
        inc.title.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className='myincident-page'>
            <h1>My-Incident Page</h1>
            <h4>Here you can view, edit or delete your assigned incidents.</h4>

            <div className='search-top'>
                <input type="text" onChange={(e) =>
                    setSearch(e.target.value) } placeholder="Search by title..."/>
            </div>
            <table className="incident-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Assigned To</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {filtered.map(inc => (
                    <tr key={inc.id}>
                        <td>{inc.title}</td>
                        <td>{inc.category}</td>
                        <td>{inc.status}</td>
                        <td>{inc.assignedTo}</td>
                        <td>{inc.createdAt}</td>
                        <td>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default MyIncident