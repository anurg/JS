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
        validate: ValidateUser,
        onSubmit: (values)=>{
            alert(JSON.stringify(values));
        }
    });
    function ValidateUser(FormData) {
        var errors = {UserId:'', Password:'', Age:'', Gender:'', City: ''};
            if (FormData.UserId ===''){
                errors.UserId = "User Id Required";
            } else {
                if (FormData.UserId.length<4) {
                    errors.UserId = "User Id too Short";
                }
            }
            if (FormData.City=="-1") {
                errors.City =" Please select your City."
            }
            return errors;
    }
    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserId"/></dd>
                    <dd className="text-danger">{formik.errors.UserId}</dd>
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
                            <option value="-1">Your City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button className="btn btn-primary" >Register</button>
            </form>
        </div>
    );
}

