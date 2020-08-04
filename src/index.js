async function main(){
    const result = await fetch("https://api.spacexdata.com/v4/launches/past")
    const data = await result.json()

    const body = document.querySelector("body")
    const table = document.createElement("table")
    let header_row = table.insertRow(0)
    let cell1 = header_row.insertCell(0);
    let cell2 = header_row.insertCell(1);
    let cell3 = header_row.insertCell(2);
    let cell4 = header_row.insertCell(3);
    cell2.innerHTML = 'NAME'
    cell1.innerHTML = 'FLIGHT NUMBER'
    cell3.innerHTML = 'LOCAL DATE'
    cell4.innerHTML = 'DETAILS'
    data.forEach(api_element => {
        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell2.innerHTML = api_element.name
        cell1.innerHTML = api_element.flight_number
        cell3.innerHTML = api_element.date_local
        cell4.innerHTML = api_element.details
        // el.innerHTML = '<td>'+row.date_local+'</td>'+'<td>'+row.name+'</td>'
        
    });
    body.appendChild(table)

    console.log(data)
}

main()