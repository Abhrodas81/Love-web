function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'I love you Abhro') {
        window.location.href = 'gallery.html';
    } else {
        document.getElementById('error-message').innerText = 'Wrong Password!';
    }
}

function calculateNextPeriod() {
    const lastPeriod = new Date(document.getElementById('lastPeriod').value);
    if (!lastPeriod) return;
    let nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(lastPeriod.getDate() + 28);
    document.getElementById('nextPeriod').innerText = 'Next Period Start Date: ' + nextPeriod.toDateString();
}