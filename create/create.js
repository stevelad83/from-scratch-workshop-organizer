import { fetchWorkshops } from '../fetch-utils.js';

const workshopSelectEl = document.getElementById('workshop-select');

window.addEventListener('load', async () => {
    const workshops = await fetchWorkshops();
    console.log(workshops);

    for (let workshop of workshops) {
        const option = document.createElement('option');
        option.value = workshop.id;
        option.textContent = workshop.name;
        workshopSelectEl.append(option);
    }
});
