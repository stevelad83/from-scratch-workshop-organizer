/* Imports */
// this will check if we have a user and set signout link if it exists
import { fetchWorkshops, signOutUser } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

/* Get DOM Elements */
const signOutBtn = document.getElementById('sign-out-link');
const workshopsContainer = document.getElementById('workshop-container');
/* State */
let workshopList = [];

/* Events */
window.addEventListener('load', async () => {
    workshopList = await fetchWorkshops();
    displayWorkshops();
});

signOutBtn.addEventListener('click', () => {
    signOutUser();
});
/* Display Functions */
function displayWorkshops() {
    workshopList.innerHTML = '';
    for (let workshop of workshopList) {
        workshopsContainer.append(renderWorkshop(workshop));
    }
}
