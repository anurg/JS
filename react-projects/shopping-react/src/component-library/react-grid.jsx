
// export function ReactGrid(props) {
//     return (
//         <table className={`table table-hover caption-top ${props.theme}`}>
//             <caption>{props.caption}</caption>
//             <thead>
//                 {
//                     props.fields.map(field=><th key={field}>{field}</th>)
//                 }
//             </thead>
//             <tbody>
//                 {
//                     props.data.map(item=><tr key={item}>
//                         {
//                             Object.keys(item).map(key=><td key={key}>{item[key]}</td>)
//                         }
//                     </tr>
//                     )
//                 }
//             </tbody>
//         </table>
        
//     );
// }

export function ReactGrid(props) {
    if (props.layout==="Grid") {
        return (
            <>
                <table className="table table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Preview</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Iphone</td>
                            <td>55000</td>
                            <td><img src="iphone-15.jpg" width="200px" height="200px" /></td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    } else if (props.layout==="Card") {
        return (
            <>
                <div className="card m-2 p-2" style={{width:"200px"}}>
                    <img src="iphone-15.jpg" className="card-image-top" height="200px" />
                    <div className="card-header">
                        <h3>Iphone 15</h3>
                    </div>
                    <div className="card-body">
                        Price: 55000
                    </div>

                </div>
            </>
        )
    }
    
}