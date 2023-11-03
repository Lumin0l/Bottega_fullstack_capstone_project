from flask import Flask

# from config import Config

app = Flask(__name__)

# Add your configuration settings here

from app import routes
