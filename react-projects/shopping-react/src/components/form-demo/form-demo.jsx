import { useState } from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

// export function FormDemo() {
//     const formik = useFormik({
//         initialValues: {
//             UserId: '',
//             Password: '',
//             Age: 0,
//             Gender: '',
//             City: ''
//         },
//         validate: ValidateUser,
//         onSubmit: (values)=>{
//             alert(JSON.stringify(values));
//         }
//     });
//     function ValidateUser(FormData) {
//         var errors = {UserId:'', Password:'', Age:'', Gender:'', City: ''};
//             if (FormData.UserId ===''){
//                 errors.UserId = "User Id Required";
//             } else {
//                 if (FormData.UserId.length<4) {
//                     errors.UserId = "User Id too Short";
//                 }
//             }
//             if (FormData.City=="-1") {
//                 errors.City =" Please select your City."
//             }
//             return errors;
//     }
//     return (
//         <div className="container-fluid border shadow-lg w-25">
//             <form onSubmit={formik.handleSubmit}>
//                 <h2>Register User</h2>
//                 <dl>
//                     <dt>User Id</dt>
//                     <dd><input type="text" onChange={formik.handleChange} name="UserId"/></dd>
//                     <dd className="text-danger">{formik.errors.UserId}</dd>
//                     <dt>Password</dt>
//                     <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
//                     <dt>Age</dt>
//                     <dd><input type="number" onChange={formik.handleChange} name="Age" /></dd>
//                     <dd>
//                         <input type="radio" name="Gender" value="Male" onChange={formik.handleChange} /> <label>Male</label>
//                         <input type="radio" name="Gender" value="Female" onChange={formik.handleChange} /> <label>Female</label>
//                     </dd>
//                     <dt>City</dt>
//                     <dd>
//                         <select  onChange={formik.handleChange} name="City">
//                             <option value="-1">Your City</option>
//                             <option value="Delhi">Delhi</option>
//                             <option value="Hyd">Hyd</option>
//                         </select>
//                     </dd>
//                     <dd className="text-danger">{formik.errors.City}</dd>
//                 </dl>
//                 <button className="btn btn-primary" >Register</button>
//             </form>
//         </div>
//     );
// }

// Yup Demo
// export function FormDemo() {
//     const formik = useFormik({
//             initialValues: {
//                 UserId: '',
//                 Password: '',
//                 Age: 0,
//                 Gender: '',
//                 City: ''
//             },
//             validationSchema: yup.object({
//                 UserId: yup.string().required("User Id Required.").min(4,"Min 4 Required."),
//                 Age: yup.number().required("Age must be enetered.").min(15,"Min Age 15 years").max(30,"Max Age 30"),
//                 Password: yup.string().required("Password Required.").matches(/(?=.*[A-Z]\w{4,15})/,"Password 4 to 15, atleast 1 Uppercase!")
//             })
//     });
//     return (
//                 <div className="container-fluid border shadow-lg w-25">
//                     <form onSubmit={formik.handleSubmit}>
//                         <h2>Register User</h2>
//                         <dl>
//                             <dt>User Id</dt>
//                             <dd><input type="text" onBlur={formik.onBlur} onChange={formik.handleChange} name="UserId"/></dd>
//                             <dd className="text-danger">{formik.errors.UserId}</dd>
//                             <dt>Password</dt>
//                             <dd><input type="password" onBlur={formik.onBlur} onChange={formik.handleChange} name="Password" /></dd>
//                             <dd className="text-danger">{formik.errors.Password}</dd>
//                             <dt>Age</dt>
//                             <dd><input type="number" onChange={formik.handleChange} name="Age" /></dd>
//                             <dd className="text-danger">{formik.errors.Age}</dd>
//                             <dd>
//                                 <input type="radio" name="Gender" value="Male" onChange={formik.handleChange} /> <label>Male</label>
//                                 <input type="radio" name="Gender" value="Female" onChange={formik.handleChange} /> <label>Female</label>
//                             </dd>
//                             <dt>City</dt>
//                             <dd>
//                                 <select  onChange={formik.handleChange} name="City">
//                                     <option value="-1">Your City</option>
//                                     <option value="Delhi">Delhi</option>
//                                     <option value="Hyd">Hyd</option>
//                                 </select>
//                             </dd>
//                             <dd className="text-danger">{formik.errors.City}</dd>
//                         </dl>
//                         <button className="btn btn-primary" >Register</button>
//                     </form>
//                 </div>
//             );
//         }

// form State Demo

// export function FormDemo() {
//     const formik = useFormik({
//         initialValues: {
//             Phone: ''
//         },
//         validationSchema: yup.object({
//             Phone: yup.string().required("Phone No required.").matches(/\+91\d{10}/,"Invalid mobile Number")
//         })
//     })
//     return (
//         <div className="container-fluid border shadow-lg w-25">
//             <form onSubmit={formik.handleSubmit}>
//                 <h2>Register User</h2>
//                 <dl>
//                     <dt>Mobile</dt>
//                     {/* <dd><input type="text" name="Phone" onBlur={formik.handleBlur} onChange={formik.handleChange} /></dd> */}
//                     <dd><input type="text" name="Phone" {...formik.getFieldProps("Phone")} /></dd>
//                     <dd className="text-danger">{formik.errors.Phone}</dd>
//                 </dl>
//                 <button className="btn btn-primary">Register</button>
//             </form>

//         </div>
//     );
// }

// formik components Demo
// export function FormDemo() {
//     return (
//         <div className="container-fluid">
//             <h2>Register User</h2>
//             <Formik 
//             initialValues={{CustomerName: '',Phone: ''}}
//             validationSchema={yup.object({
//                 CustomerName: yup.string().required("Customer Name Required!").min(4,"Min 4 characters") ,
//                 Phone: yup.string().required("Phone no required").matches(/\+91\d{10}/,"Invalid Mobile")
//             })}
//             onSubmit={(values)=>{
//                 JSON.stringify(values)
//             }}
//             >
//                 <Form>
//                   <dl>
//                     <dt>Customer Name</dt>
//                     <dd> <Field type="text" name="CustomerName" /> </dd>
//                     <dd className="text-danger"> <ErrorMessage name="CustomerName" /></dd>
//                     <dt>Mobile</dt>
//                     <dd><Field type="text" name="Phone" /></dd>
//                     <dd className="text-danger"><ErrorMessage name="Phone" /></dd>
//                   </dl>
//                   <button className="btn btn-primary">Register</button>
//                 </Form>
//             </Formik>
//         </div>
//     )
// }

// Formik form State Validation Demo

export function FormDemo() {
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik 
            initialValues={{CustomerName: 'John',Phone: ''}}
            validationSchema={yup.object({
                CustomerName: yup.string().required("Customer Name Required!").min(4,"Min 4 characters") ,
                Phone: yup.string().required("Phone no required").matches(/\+91\d{10}/,"Invalid Mobile")
            })}
            onSubmit={(values)=>{
                JSON.stringify(values)
            }}
            >
                {
                    formik=><Form>
                    <dl>
                      <dt>Customer Name</dt>
                      <dd> <Field type="text" name="CustomerName" /> </dd>
                      <dd className="text-danger"> <ErrorMessage name="CustomerName" /></dd>
                      <dt>Mobile</dt>
                      <dd><Field type="text" name="Phone" /></dd>
                      <dd className="text-danger"><ErrorMessage name="Phone" /></dd>
                    </dl>
                    <button disabled={!formik.isValid} className="btn btn-primary">Register</button>
                    <button className={`btn btn-success ms-2 ${(formik.dirty)?"d-inline":"d-none"}`}>Save</button>
                  </Form>
                }
            </Formik>
        </div>
    )
}