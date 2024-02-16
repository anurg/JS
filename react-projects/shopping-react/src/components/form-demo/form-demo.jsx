import { useState } from "react";
import { useFormik } from "formik";

export function FormDemo() {
    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: '',
            Age: 0,
            Gender: '',
            City: ''
        },
        onSubmit: (values)=>{
            alert(JSON.stringify(values));
        }
    });

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserId"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Age" /></dd>
                    <dd>
                        <input type="radio" name="Gender" value="Male" onChange={formik.handleChange} /> <label>Male</label>
                        <input type="radio" name="Gender" value="Female" onChange={formik.handleChange} /> <label>Female</label>
                    </dd>
                    <dt>City</dt>
                    <dd>
                        <select  onChange={formik.handleChange} name="City">
                            <option>Your City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary" >Register</button>
            </form>
        </div>
    );
}

