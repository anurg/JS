
export function NavBar(props){
    return (
        <nav className= {`p-3 d-flex justify-content-between border boredr-1 border-secondary ${props.ThemeName} `} >
            <div className="h3">{props.BrandName}</div>
            <div>
            {
                props.MenuItems.map(item=><span className="me-4" key={item}>{item}</span>)
            }
            </div>
            <div>
                <span className="bi bi-search me-3"></span>
                <span className="bi bi-heart me-3"></span>
                <span className="bi bi-person me-3"></span>
                <span className="bi bi-cart3 me-3"></span>
            </div>
        </nav>
    );
}