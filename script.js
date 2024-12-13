// script.js

// Данные для таблицы
const data = [
    { elektri: "N дома", energy: "N дома", area: "12/1/2024" },
    { elektri: "Elektri 2", energy: 1215, area: 1489 },
    { elektri: "Elektri 4", energy: 5300, area: 1040 },
    { elektri: "Elektri 6", energy: 4346, area: 1759 },
    { elektri: "Elektri 10", energy: 20800, area: 972 },
    { elektri: "Elektri 12", energy: 4800, area: 923 },
    { elektri: "Elektri 14", energy: 1259, area: 963 },
    { elektri: "Elektri 16", energy: 12493, area: 1026 },
    { elektri: "Elektri 18", energy: 0, area: 853 },
    { elektri: "Elektri 20", energy: 2202, area: 993 },
    { elektri: "Elektri 24", energy: 2016, area: 1038 },
    { elektri: "Elektri 26", energy: 5505, area: 982 },
    { elektri: "Elektri 28", energy: 0, area: 976 },
    { elektri: "Elektri 30", energy: 60, area: 1026 },
    { elektri: "Elektri 32", energy: 6755, area: 887 },
    { elektri: "Elektri 34", energy: 7824, area: 1001 },
    { elektri: "Elektri 36", energy: 22671, area: 902 },
    { elektri: "Elektri 38", energy: 658, area: 981 },
    { elektri: "Elektri 40", energy: 3252, area: 987 },
    { elektri: "Elektri 42", energy: 12000, area: 956 },
    { elektri: "Elektri 44", energy: 4620, area: 982 },
    { elektri: "Elektri 46", energy: 9508, area: 933 },
    { elektri: "Elektri 48", energy: 2250, area: 1026 },
    { elektri: "Elektri 50", energy: 8298, area: 874 },
    { elektri: "Elektri 51", energy: 1532, area: 654 },
    { elektri: "Elektri 52", energy: 25658, area: 1367 },
    { elektri: "Elektri 56", energy: 9003, area: 1127 },
    { elektri: "Elektri 58", energy: 2678, area: 1045 },
    { elektri: "Elektri 60", energy: 0, area: 961 },
    { elektri: "Elektri 62", energy: 280, area: 870 },
    { elektri: "Elektri 64", energy: 2275, area: 1015 },
    { elektri: "Elektri 66", energy: 20456, area: 956 },
    { elektri: "Elektri 68", energy: 8446, area: 881 },
    { elektri: "Elektri 70", energy: 3546, area: 965 },
    { elektri: "Elektri 72", energy: 0, area: 928 },
    { elektri: "Elektri 74", energy: 13883, area: 1025 },
    { elektri: "Elektri 76", energy: "", area: 781 },
    { elektri: "Elektri 78", energy: 3070, area: 1129 },
    { elektri: "Elektri 80", energy: 1100, area: 980 },
    { elektri: "Elektri 82", energy: 10170, area: 1452 },
    { elektri: "Elektri 84", energy: 249718, area: 1340 },
];

// Функция для создания таблицы
function createTable(data) {
    const tableBody = document.querySelector('#electricityTable tbody');
    tableBody.innerHTML = ''; // Очистить существующие данные

    data.forEach(row => {
        const tr = document.createElement('tr');

        const tdElektri = document.createElement('td');
        tdElektri.textContent = row.elektri;
        tr.appendChild(tdElektri);

        const tdEnergy = document.createElement('td');
        tdEnergy.textContent = row.energy;
        tr.appendChild(tdEnergy);

        const tdArea = document.createElement('td');
        tdArea.textContent = row.area;
        tr.appendChild(tdArea);

        tableBody.appendChild(tr);
    });
}

// Функция для поиска
function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const filteredData = data.filter(row => row.elektri.toLowerCase().includes(filter));
    createTable(filteredData);
}

// Функция для сортировки по энергии
let sortDirection = true; // true - по возрастанию, false - по убыванию

function sortTable() {
    const sortedData = data.slice(); // Создаем копию массива

    sortedData.sort((a, b) => {
        // Обработка пустых значений и нечисловых данных
        const energyA = typeof a.energy === 'number' ? a.energy : parseFloat(a.energy) || 0;
        const energyB = typeof b.energy === 'number' ? b.energy : parseFloat(b.energy) || 0;
        return sortDirection ? energyA - energyB : energyB - energyA;
    });

    sortDirection = !sortDirection; // Меняем направление сортировки
    createTable(sortedData);
}

// Инициализация таблицы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    createTable(data);

    // Добавить обработчик события для поиска
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchTable);

    // Добавить обработчик события для сортировки
    const sortEnergyHeader = document.getElementById('sortEnergy');
    sortEnergyHeader.addEventListener('click', sortTable);
});
