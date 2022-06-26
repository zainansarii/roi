from flask import Flask, render_template
import pandas as pd
import numpy as np
import yfinance as yf
from datetime import datetime as dt
from datetime import timedelta 
from dateutil.relativedelta import relativedelta

app = Flask(__name__)

@app.route("/")
def hello():
    # get S&P500 data (1980 - current)
    current_date = dt.strftime(dt.today().date(), format="%Y-%m-%d")
    df_sp = yf.download (tickers = "^GSPC", start = "2000-01-01", 
                                end = current_date, interval = "1d")
    df_sp = df_sp['Adj Close']
    # df_sp.index = df_sp.index.map(str)
    data =  list(zip(df_sp.index, df_sp.astype(int)))

    labels = [row[0] for row in data]
    values = [row[1] for row in data]

    return render_template("index.html", labels=labels, values=values)

if __name__ == "__main__":
    app.run()


# how to pass data between flask backend and javascript front end:
# https://stackoverflow.com/questions/11178426/how-can-i-pass-data-from-flask-to-javascript-in-a-template

# https://stackoverflow.com/questions/42499535/passing-a-json-object-from-flask-to-javascript