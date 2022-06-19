from flask import Flask, render_template

x = "i like eggs"

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html", content=x)

if __name__ == "__main__":
    app.run()