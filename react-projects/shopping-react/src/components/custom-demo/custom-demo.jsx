import { ReactGrid } from "../../component-library/react-grid";

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

export function CustomDemo() {
    return (
        <div className="container-fluid">
            <h2>Custom Demo</h2>
           <ReactGrid layout="Card"/>
        </div>
    );
}