import './MyIncident.scss'
import React, {useState, useEffect } from 'react'

const MyIncident = () => {
    const [search, setSearch] = useState('');
    const [incidents, setIncidents] = useState([])
    console.log(search)

    const filtered = incidents.filter(inc =>
        inc.title.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (deletingInc) => {
        try {
            await fetch(`https://ffl6apaq3d.execute-api.eu-central-1.amazonaws.com/prod/api/v1/incident/id/${deletingInc.id}`, {
                method: 'DELETE',
            });
            const newIncidents = incidents.filter((inc) => inc !== deletingInc)
            setIncidents(newIncidents)
        } catch (err) {
            console.error("Error deleting incident:", err);
        }
    }

    useEffect(() => {
        fetch('https://ffl6apaq3d.execute-api.eu-central-1.amazonaws.com/prod/api/v1/incident')
            .then(res => res.json())
            .then(data => setIncidents(data))
            .catch(err => console.error("Error fetching incidents:", err));
    }, []);

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
                            <button className="edit-btn">Edit </button>
                            <button onClick={()=> handleDelete(inc)} className="delete-btn">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default MyIncident