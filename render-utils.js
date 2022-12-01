import { deleteParticipant, fetchWorkshops } from './fetch-utils.js';
import { displayWorkshops, pullFromDatabase } from './workshops/app.js';

export function renderWorkshop(workshop) {
    const workshopEl = document.createElement('div');
    const workshopNameEl = document.createElement('h3');
    const participantsEl = document.createElement('div');

    workshopNameEl.textContent = workshop.name;
    for (let participant of workshop.participants) {
        participantsEl.append(renderParticipant(participant));
    }
    if (workshop.participants.length < 1) {
        participantsEl.append(renderParticipant({ name: '', contact_info: 'no participants' }));
    }
    workshopEl.classList.add('workshop');
    participantsEl.classList.add('participants-list');

    workshopEl.append(workshopNameEl, participantsEl);
    return workshopEl;
}

export function renderParticipant(participant) {
    const participantEl = document.createElement('div');
    const participantName = document.createElement('p');
    const participantContact = document.createElement('p');

    participantName.textContent = participant.name;
    participantContact.textContent = participant.contact_info;
    participantName.classList.add('participant-name');
    participantContact.classList.add('participant-contact');
    participantEl.append(participantName, participantContact);

    participantEl.addEventListener('click', async () => {
        await deleteParticipant(participant.id);
        await pullFromDatabase();
        displayWorkshops();
    });

    return participantEl;
}
