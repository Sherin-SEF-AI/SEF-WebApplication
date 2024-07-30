function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
}

function updateProfile() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Implement API call to update profile
    alert('Profile updated successfully!');
}

function refreshAlerts() {
    console.log('Refreshing alerts...');
    document.getElementById('alerts-container').innerHTML = '<p>New alerts data would be fetched here.</p>';
}

function addContact() {
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;

    const contactList = document.getElementById('contacts-list');
    const contactItem = document.createElement('div');
    contactItem.className = 'contact-item';
    contactItem.innerHTML = `<strong>${name}</strong>: ${phone}`;
    contactList.appendChild(contactItem);

    alert('Contact added successfully!');
}

function loadSafetyHistory() {
    // Example: This should be replaced with a real API call to fetch safety history
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '<p>Past safety events will be listed here.</p>';
}

function updateSettings() {
    const notificationSetting = document.getElementById('notification-settings').value;
    // Implement API call to save settings
    alert('Settings updated successfully!');
}

function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    const feedbackList = document.getElementById('feedback-list');
    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedback-item';
    feedbackItem.innerHTML = `<p>${feedback}</p>`;
    feedbackList.appendChild(feedbackItem);

    alert('Feedback submitted successfully!');
}

// Call these functions on page load if needed
document.addEventListener('DOMContentLoaded', () => {
    loadSafetyHistory();
});
