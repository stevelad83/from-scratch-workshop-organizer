export function renderWorkshop(workshop) {
    const workshopEl = document.createElement('div');
    const workshopNameEl = document.createElement('h3');
    const participantsEl = document.createElement('div');

    workshopNameEl.textContent = workshop.name;
    for (let participant of workshop.participants) {
        participantsEl.append(renderParticipant(participant));
    }

    workshopEl.append(workshopNameEl, participantsEl);
    return workshopEl;
}

export function renderParticipant(participant) {
    const participantEl = document.createElement('div');
    const participantName = document.createElement('p');
    const participantContact = document.createElement('p');

    participantName.textContent = participant.name;
    participantContact.textContent = participant.contact_info;
    participantEl.append(participantName, participantContact);

    return participantEl;
}
