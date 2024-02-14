import { useState } from "react";
import "./style-demo.css"
//  Style Binding Example
// export function StyleDemo() {
//     const [nameError, setNameError] = useState({display : 'block', color : 'red'});
//     const [elementColor, setElementColor] = useState({border : '1px solid red'})
//     function handleNameError(e) {
//         if (e.target.value ==='') {
//             setNameError({display:'block', color : 'red'})
//             setElementColor({border : '1px solid red'});
//         } else {
//             setNameError({display : 'none'})
//             setElementColor({border : '1px solid green'});
//         }
//     }
//     return (
//         <div className="container-fluid">
//             <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text" style={elementColor} onChange={handleNameError}/></dd>
//                 <dd style={nameError}>Input Required</dd>
//             </dl>
//         </div>
//     );
// }

// CLass binding Example
// export function StyleDemo() {
//     const [nameError, setNameError] = useState('invalid-style');
//     const [required, setRequired] = useState('d-block text-danger')
//     function handleNameError(e) {
//         if (e.target.value ==='') {
//            setNameError('invalid-style');
//            setRequired('d-block text-danger')
//         } else {
//             setNameError('valid-style');
//             setRequired('d-none')
//         }
//     }
//     return (
//         <div className="container-fluid">
//             <dl>
//                 <dt>User Name</dt>
//                 <dd><input type="text" className={nameError} onChange={handleNameError}/></dd>
//                 <dd className={required}>Input Required</dd>
//             </dl>
//         </div>
//     );
// }

// Style Binding Another example.



export function StyleDemo(){


    const [theme, setTheme] = useState('bg-light text-dark');
    const [btnStyle, setBtnStyle] = useState('btn btn-dark w-100');

    function ThemeChange(e){
        if(e.target.checked){
            setTheme('bg-dark text-white');
            setBtnStyle('btn btn-light w-100');
        } else {
            setTheme('bg-light text-dark');
            setBtnStyle('btn btn-dark w-100');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <form className={theme}>
                <div className="form-switch">
                    <input type="checkbox" onChange={ThemeChange} className="form-check-input" /> <label className="form-check-label"> Dark Mode </label>
                </div>
                <h2 className="bi bi-person-fill" style={{fontWeight : 'unset', fontSize : 'unset', display : 'unset'}}>User Login</h2> <span>Hello</span>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                </dl>
                <button className={btnStyle}>Login</button>
            </form>
        </div>
    )
}