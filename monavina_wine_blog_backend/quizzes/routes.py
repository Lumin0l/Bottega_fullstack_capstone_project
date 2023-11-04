from flask import jsonify
from . import quizzes  # Import the 'quizzes' blueprint

# Sample quiz questions (you should replace this with your data)
quiz_data = [
    {
        "question": "What is the capital of France?",
        "options": ["a) Paris", "b) London", "c) Berlin", "d) Madrid"],
        "correct_answer": "a) Paris",
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": ["a) Earth", "b) Mars", "c) Venus", "d) Jupiter"],
        "correct_answer": "b) Mars",
    },
    # Add more questions
]

@quizzes.route("/quiz", methods=["GET"])
def get_quiz_questions():
    return jsonify({"questions": quiz_data})

# You can add more routes for managing quizzes (e.g., create, edit, delete)

# End of routes.py
