/* Imports */
// this will check if we have a user and set signout link if it exists
import { fetchWorkshops, signOutUser } from '../fetch-utils.js';

/* Get DOM Elements */
const signOutBtn = document.getElementById('sign-out-link');
/* State */

/* Events */
signOutBtn.addEventListener('click', () => {
    signOutUser();
});
/* Display Functions */

fetchWorkshops();
