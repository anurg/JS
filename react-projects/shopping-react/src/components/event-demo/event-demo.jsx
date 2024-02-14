
export function EventDemo() {
    function InsertClick(...args) {
        var [e,msg,no] = args;
        // document.write(`
        //     Object Id : ${e.target.id} <br>
        //     Class Name: ${e.target.className} <br>
        //     X Position : ${e.clientX} <br>
        //     `
        // )
        document.write( `
            ${e.target.className} <br>
        ${msg} <br>
        ${no}
        `)
}
    return (
        <div className="container-fluid">
            <button id="btnInsert" onClick={(e)=>InsertClick(e,'Welcome', 10)} className="btn btn-success mt-4">Insert</button>
        </div>
    );
}