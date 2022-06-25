from flask import Flask, render_template
import pandas as pd


data = {'col_1': [0,1,2,3], 'col_2': ['john', 'jess', 'james', 'jill']}
df = pd.DataFrame(data).set_index('col_1', drop=True)
app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("index.html", df=df)

if __name__ == "__main__":
    app.run()


# how to pass data between flask backend and javascript front end:
# https://stackoverflow.com/questions/11178426/how-can-i-pass-data-from-flask-to-javascript-in-a-template

# https://stackoverflow.com/questions/42499535/passing-a-json-object-from-flask-to-javascript