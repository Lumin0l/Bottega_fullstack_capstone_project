from flask import Flask
from quizzes import quizzes


#from config import Config

app = Flask(__name__)
app.register_blueprint(quizzes, url_prefix="/quizzes")

# Add your configuration settings here

from app import routes
