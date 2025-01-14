# Project Nürburgring

A minimalist React application that tracks and displays lap times around the iconic Nürburgring track. Users can input their car names and lap times, view the leaderboard, and toggle between light and dark themes for an enhanced user experience.

## Features

- Add, edit, and delete lap times.
- Display lap times in `mm:ss.mss` format for accurate timing.
- Sort lap times in descending order (fastest times first).
- Toggle between light and dark themes.
- Responsive design that adapts to different screen sizes and devices.
- Persistent theme preference stored in `LocalStorage` for consistent user experience.

## Technologies Used

- **React**: The core library for building the UI.
- **React Icons**: Used for adding icons (such as the dark mode toggle).
- **Font Awesome**: For beautiful icons like the sun and moon.
- **CSS (Custom Styling)**: Styling for light and dark themes, form elements, and responsive layouts.
- **LocalStorage**: To persist the selected theme across browser sessions.

## Getting Started

To set up and run the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/StratosMylonas/project-nurburgring.git
   ```

2. Navigate to the project directory:
    ```
    cd project-nurburgring
    ```

3. Install dependencies:
    ```
    npm install
    ```

4. Run the development server:
    ```
    npm start
    ```

5. Open your browser and navigate to http://localhost:3000.