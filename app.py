from flask import Flask, render_template

x = "i like eggs"

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html", content=x)

if __name__ == "__main__":
    app.run()


# how to pass data between flask backend and javascript front end
# https://stackoverflow.com/questions/11178426/how-can-i-pass-data-from-flask-to-javascript-in-a-template