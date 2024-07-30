document.addEventListener('DOMContentLoaded', () => {
    // Handle Profile Form Submission
    document.getElementById('profile-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        
        fetch('/api/user/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email })
        }).then(response => response.json())
          .then(data => alert('Profile updated successfully'))
          .catch(err => console.error('Error:', err));
    });

    // Handle Change Password Form Submission
    document.getElementById('change-password-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const currentPassword = document.getElementById('current-password').value;
        const newPassword = document.getElementById('new-password').value;
        
        fetch('/api/user/change-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentPassword, newPassword })
        }).then(response => response.json())
          .then(data => alert('Password changed successfully'))
          .catch(err => console.error('Error:', err));
    });

    // Handle Email Verification Form Submission
    document.getElementById('verify-email-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const token = document.getElementById('verification-token').value;
        
        fetch('/api/user/verify-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        }).then(response => response.json())
          .then(data => alert('Email verified successfully'))
          .catch(err => console.error('Error:', err));
    });

    // Handle Activity Log
    fetch('/api/user/activity-log')
        .then(response => response.json())
        .then(data => {
            const logList = document.getElementById('activity-log-list');
            data.activities.forEach(activity => {
                const listItem = document.createElement('li');
                listItem.textContent = activity;
                logList.appendChild(listItem);
            });
        });

    // Function to show different pages
    window.showPage = (pageId) => {
        document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
        document.getElementById(pageId).style.display = 'block';
    };
});
