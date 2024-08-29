# Interactive Quiz App

This is a simple interactive quiz app built using HTML, CSS, and JavaScript. It allows users to select from various categories, answer multiple-choice questions, and receive immediate feedback on their responses. The app features a timer, tracks progress, and displays a final score at the end of the quiz.

## Features Used

### HTML

-   **Structure:** The app uses semantic HTML5 elements like `<header>`, `<main>`, `<section>`, `<article>`, `<div>`, `<button>`, `<label>`, `<input>`, and `<span>` to structure the content logically.
-   **Forms:** The initial welcome screen uses a form (`<form>`) to collect the user's name.
-   **Radio Buttons:** Multiple-choice questions are implemented using radio buttons (`<input type="radio">`).
-   **Event Listeners:** Event listeners are attached to buttons and radio buttons to handle user interactions.

### CSS

-   **Styling:** The app is styled using CSS, providing an engaging and user-friendly interface.
-   **Layout:**  Flexbox is used extensively for layout, ensuring elements are displayed correctly across different screen sizes.
-   **Responsive Design:** Media queries are used to adjust the layout and styling for optimal viewing on various devices.
-   **Animations:** Simple CSS animations are used to enhance the user experience.
-   **Background Image:** A visually appealing background image is set for the body, enhancing the overall aesthetic.

### JavaScript

-   **DOM Manipulation:** JavaScript is used to interact with the DOM, updating content dynamically based on user actions.
-   **Event Handling:** Event listeners are used to respond to user interactions like button clicks and option selections.
-   **Arrays and Objects:** Questions and options are stored in arrays and objects for efficient management.
-   **Timer:** A timer is implemented using `setInterval()` to limit the time allowed for each question.
-   **Score Tracking:** The app keeps track of the user's score and displays it at the end of the quiz.
-   **Audio Feedback:** Audio cues are used to provide feedback on correct and incorrect answers, enhancing engagement.

## Functionality

1.  **Welcome Screen:** The app initially displays a welcome screen asking for the user's name.
2.  **Category Selection:** Upon entering their name, users are presented with a selection of quiz categories.
3.  **Quiz Start:** After choosing a category, the quiz begins, displaying the first question.
4.  **Timer:** A timer starts counting down from 30 seconds for each question.
5.  **Option Selection:** Users can select their answer from the multiple-choice options.
6.  **Feedback:** Immediate feedback is provided after each question, indicating whether the answer was correct or incorrect. The correct answer is highlighted.
7.  **Progress Tracking:** The app tracks the number of completed and remaining questions.
8.  **Quiz End:** After answering all questions or running out of time, the quiz ends, and the final score is displayed.
9.  **Restart Option:** Users have the option to restart the quiz from the category selection screen.

## How to Use

1.  Clone or download the repository to your local machine.
2.  Open the `index.html` file in a web browser.
3.  Enter your name and click "Start Quiz."
4.  Select a category and begin answering the questions.

## Potential Improvements

-   **More Categories:** Add more quiz categories to offer a wider variety of topics.
-   **Difficulty Levels:** Implement different difficulty levels for questions to cater to varying skill levels.
-   **Database Integration:** Store questions in a database to allow for easier management and updates.
-   **User Authentication:** Allow users to create accounts and track their progress over time.
-   **Leaderboard:** Display a leaderboard to show top scores and encourage competition.

## License

This project is licensed under the [MIT License](LICENSE).
