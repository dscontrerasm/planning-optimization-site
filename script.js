// script.js

function downloadPackagingPlan() {
    // Logic to download the packaging plan
    window.location.href = '/path/to/packaging-plan.xlsx'; // Replace with actual file path
}

function downloadBrewingPlan() {
    // Logic to download the brewing plan
    window.location.href = '/path/to/brewing-plan.xlsx'; // Replace with actual file path
}

function showPlanAttainment() {
    // Logic to show plan attainment
    alert('Showing plan attainment...');
    // You can replace this with actual logic to display data
}

function showCostImpact() {
    // Logic to show cost impact
    alert('Showing cost impact...');
    // You can replace this with actual logic to display data
}

function showPlanOnline() {
    // Redirect to the plan page
    window.location.href = 'Plan.html';
}


const planData = [
    ["Marca", "FV", "SV Destino", "VOL (HI) HG", "INICIO FV", "Horas parada", "Fecha Planeada INICIO OPERACIÓN", "Fecha Planeada FIN OPERACIÓN", "TSV", "TFV", "FECHA ENVASE", "Notas"],
    ["ESTANDAR", "FV17", "sv12", "5,400", "2/03/2025 15:35", "59", "9/03/2025 16:30", "10/03/2025 01:30", "2,52", "7,0", "12/03/2025 14:00", "Trasegar antes del FV06"],
    ["CORONA", "FV06", "sv05", "5,400", "18/02/2025 17:53", "", "10/03/2025 12:30", "10/03/2025 12:30", "3,73", "19,4", "14/03/2025 06:00", ""],
    ["ESTANDAR", "FV01", "sv16", "5,400", "3/03/2025 7:52", "", "10/03/2025 23:30", "10/03/2025 22:00", "2,94", "7,3", "13/03/2025 22:00", ""]
];


function populateTable() {
    const table = document.getElementById("planTable");

    // Loop through planData array and create table rows
    planData.forEach((rowData, rowIndex) => {
        let row = document.createElement("tr");

        rowData.forEach((cellData) => {
            let cell = rowIndex === 0 ? document.createElement("th") : document.createElement("td");
            cell.innerText = cellData;
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
}

// Run function when the page loads
document.addEventListener("DOMContentLoaded", populateTable);
