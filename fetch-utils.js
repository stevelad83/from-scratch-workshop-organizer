const SUPABASE_URL = 'https://yhtqjrmxupxpmxmjrqpo.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlodHFqcm14dXB4cG14bWpycXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgyNTQsImV4cCI6MTk4MzY4NDI1NH0.Bp6AKfoL4GrrPbg0WYAwHMhKSaKZFGfEYwaewQNhY4M';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    await client.auth.signOut();
}

/* Data functions */

export async function fetchWorkshops() {
    const response = await client.from('workshops').select('*, participants(*)');
    return checkError(response);
}

export async function deleteParticipant(id) {
    const response = await client.from('participants').delete().match({ id: id }).single();
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
