document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;

    if (name) {
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('quiz-container').classList.remove('hidden');
        // Uncomment the line below to navigate to another page
        // window.location.href = 'quiz.html'; // Replace with the path to your quiz page
    } else {
        alert("Please enter your name.");
    }
});

document.querySelector('.submit-btn').addEventListener('click', function() {
    window.location.href = 'category.html';
});
// Enable the submit button when user types in the name field
document.getElementById('name').addEventListener('input', function() {
    const name = this.value;
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.disabled = name.trim() === ''; // Disable if input is empty
});
