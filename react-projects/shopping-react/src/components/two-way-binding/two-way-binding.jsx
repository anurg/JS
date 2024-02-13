import { useState } from "react";

export function TwoWayBinding() {
    const [userName,setUserName] = useState('Joh');
    const [city, setCity] = useState('-1');
    function handleNameChange(e) {
        setUserName(e.target.value);
    }
    function handleCityChange(e) {
        setCity(e.target.value);
    }
    return (
        <div className="container-fluid">
            <h3>Edit</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onChange={handleNameChange}/></dd>
                <select onChange={handleCityChange}>
                    <option key="-1">Your City</option>
                    <option key="Delhi">Delhi</option>
                    <option key="Hyderabad">Hyd</option>
                </select>
                <p>Hello ! {userName} from {city} </p>
            </dl>
        </div>
    );
}