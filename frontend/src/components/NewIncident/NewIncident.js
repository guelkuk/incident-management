import './NewIncident.scss'
import React from 'react'
import { useForm } from "react-hook-form";

const NewIncident = () => {
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = async values => {
        try {
            const result = await fetch('http://incident-management2-env.eba-23pdmwzk.eu-central-1.elasticbeanstalk.com/api/v1/incident', {
               method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: values.title,
                    description: values.description,
                    category: values.category,
                    status: values.status,
                    assignedTo: values.assignedTo,
                })
            });
            if (!result.ok) throw new Error('Failed to add incident');

            const newIncident = await result.json();
            console.log('Incident added:', newIncident);
            reset();
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div><h1>Add new Incident</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Title:
                    <input type="text" {...register("title", { required: true })} />
                </label>
                <label>
                    Description:
                    <input type="text" {...register("description")} />
                </label>
                <label>
                    Category
                    <select {...register("category")}  defaultValue="Network">
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
                    <select {...register("status")} defaultValue="Open">
                        <option value="Open">Open</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Closed">Closed</option>
                    </select>
                </label>
                <label>
                    Assign to:
                    <input type="text" {...register("assignedTo", { required: true })} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default NewIncident