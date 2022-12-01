import { createParticipant, fetchWorkshops } from '../fetch-utils.js';

const workshopSelectEl = document.getElementById('workshop-select');
const form = document.querySelector('.add-participant-form');

window.addEventListener('load', async () => {
    const workshops = await fetchWorkshops();

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
    const newParticipant = {
        name: participantData.get('participant-name'),
        contact_info: participantData.get('participant-contact'),
        workshop_id: participantData.get('workshop-attending'),
    };

    // grabbing data from form, pass it to createParticipant function to add to DB
    await createParticipant(newParticipant);

    // reset form
    form.reset();
    // redirect to workshop page
    location.replace('../workshops/');
});
