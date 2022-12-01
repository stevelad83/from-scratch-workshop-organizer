import { fetchWorkshops } from '../fetch-utils.js';

const workshopSelectEl = document.getElementById('workshop-select');
const form = document.querySelector('.add-participant-form');

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

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const participantData = new FormData(form);

    // grabbing data from form, pass it to createParticipant function to add to DB

    // reset form

    // redirect to workshop page
});
