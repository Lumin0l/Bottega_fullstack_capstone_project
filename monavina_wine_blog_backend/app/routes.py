from app import app

@app.route('/')
def index():
    return "Hello, Monavina Wine Blog!"
