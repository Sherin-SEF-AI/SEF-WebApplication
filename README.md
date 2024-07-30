# SEF-WebApplication
SEF Web Application (currently working on it)


# SEF Web Application

## Overview

The SEF (Safety Ecosystem Framework) Web Application is designed to provide comprehensive safety solutions, including alerts, disaster notifications, safety tips, and more. This application offers a user-friendly interface to manage and access various safety features, making it easier to stay informed and safe.

## Features

- **Home**: Welcome page with an overview of the SEF application.
- **Alerts**: View and manage real-time safety alerts.
- **Disaster Alerts**: Receive updates on ongoing disasters and emergency situations.
- **Safety Tips**: Access practical tips and advice for staying safe.
- **History**: Review past alerts and safety events.
- **Feedback**: Submit feedback and view received feedback.
- **Contact Us**: Contact form for reaching out to the SEF team.
- **Services**: Learn about the services offered by SEF.
- **Reports**: Access detailed reports on safety incidents and system performance.

## Setup

### Prerequisites

- Node.js (version 14.x or later)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/sef-web-application.git
    cd sef-web-application
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:8080`.

### Configuration

- **Database Connection**: Ensure your MongoDB database is set up and update the connection string in `backend/config.js` if necessary.

### Running the Application

1. **Start the server:**

    ```bash
    node backend.js
    ```

2. **Open your web browser and navigate to:**

    ```text
    http://localhost:8080
    ```

## Usage

- **Navigating Pages**: Use the navigation bar at the top to switch between pages.
- **Submitting Feedback**: Go to the Feedback page and fill out the form to submit your feedback.
- **Contact Us**: Use the Contact Us page to send a message to the SEF team.

## File Structure

- `index.html`: The main HTML file with the structure of the web application.
- `styles.css`: The CSS file for styling the web application.
- `script.js`: The JavaScript file for handling page interactions and dynamic content.
- `backend.js`: The backend server script for handling API requests and database interactions.
- `config.js`: Configuration file for setting up database connections and other settings.
- `models/`: Directory containing Mongoose models for MongoDB.

## Contributing

Feel free to submit issues, suggest features, or contribute to the project via pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please contact us at (sherin.joseph2217@gmail.com).

