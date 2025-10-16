import './NewIncident.scss'
import React from 'react'
import { useForm } from "react-hook-form";

const   NewIncident = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);

    return(
        <div><h1>Add new Incident</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    User-ID:
                    <input type="number" />
                </label>
                <label>
                    Title:
                    <input type="text" />
                </label>
                <label>
                    Description:
                    <input type="text" />
                </label>
                <label>
                    Category
                    <select>
                        <option value="Network">Network</option>
                        <option value="Software">Software</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Security">Security</option>
                        <option value="Access">Access</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select>
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                    </select>
                </label>
                <label>
                    Assign to:
                    <input type="text" />
                </label>
                <label>
                    Created at:
                    <input type="Date" />
                </label>
                <label>
                    Updated at:
                    <input type="Date" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default NewIncident