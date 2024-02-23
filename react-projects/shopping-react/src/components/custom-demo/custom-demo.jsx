import { ReactGrid } from "../../component-library/react-grid";
import { useState } from "react";
import { Login } from "../login/login"
import { Register } from "../register/register";
// export function CustomDemo() {
//     return (
//         <div className="container-fluid">
//             <h2>Custom Demo</h2>
//             <ReactGrid caption="Products Update-23-02-2024" fields={["Name", "Price"]} theme="table-primary"
//             data={[{Name: "TV", Price: 45000},{Name: "Mobile", Price: 15000}]}/>

//             <hr size="4" color="red" shade="noshade" />
//             <ReactGrid caption="Employee Details" theme="table-warning" fields={["FirstName", "LastName", "Salary","Designation"]}
//             data={[{FirstName: "Anurag", LastName: "Bhatt", Salary: 500000, Designation: "JGM"}]} />
//         </div>
//     );
// }

// export function CustomDemo() {
//     const [layout,setLayout] = useState("Grid");
//     function handleLayoutChange(e) {
//         setLayout(e.target.value);
//     }
//     return (
//         <div className="container-fluid">
//             <h2>Custom Demo</h2>
//             <div className="w-25">
//                 <select className="form-select" onChange={handleLayoutChange}>
//                     <option key="-1">Select Layout</option>
//                     <option key="Grid">Grid</option>
//                     <option key="Card">Card</option>
//                 </select>
//             </div>
//            <ReactGrid layout={layout}/>
//         </div>
//     );
// }

export function CustomDemo() {
        const [component, setComponent] =useState("");
        
        function handleLoginClick() {
            setComponent(<Login />);
        }
        function handleRegisterClick() {
            setComponent(<Register />);
        }
        return (
            <div className="container-fluid">
                <h2>Home</h2>
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleRegisterClick}>Register</button>
                <div className="mt-3">
                    {component}
                </div>
            </div>
        );
    }