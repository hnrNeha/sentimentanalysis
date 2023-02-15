from transformers import pipeline
from flask import Flask, request, redirect, url_for, flash, render_template,jsonify,json
import matplotlib.pyplot as plt
import pandas as pd
import io
import base64
import urllib.request
import ast
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
#import seaborn as sns

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def my_form_post():
    if request.method == 'POST':
       classifier = pipeline('sentiment-analysis')
       text1 = request.form.get('etext')
       f=classifier(text1)
       v = list(f[0].values())
       df = pd.DataFrame(v)
       if df[0][0] == "POSITIVE":
           x = "NEGATIVE"
       else:
           x = "POSITIVE"

       # Create Dataset
       dt = pd.DataFrame([df[0][1], 1 - (df[0][1])], index=[df[0][0],x])

       # Make the Pie plot
       dt=dt.plot(kind='pie', subplots=True, figsize=(8, 8))
      # x = dm[0].value_counts().plot.pie()
      # canvas = FigureCanvas(x)
       fig=dt[0].figure
      # fig=x
       img = io.BytesIO()
       fig.savefig(img,format='png')
       img.seek(0)
       plot_data = urllib.parse.quote(base64.b64encode(img.getvalue()).decode('utf-8'))
       return render_template('form.html', output=f,plot_url=plot_data)

@app.route('/show',methods=['POST'])
def showgraph():
    if request.method == 'POST':
         sh = request.get_json()
         search=json.loads(json.dumps(sh))
         # print(search)
         classifier = pipeline('sentiment-analysis')
         # search=["nice but need to improve", "good app", "good one but need to improve and satisfied"]
         # print(search)
         # print(type(search))
         # search = ast.literal_eval(search)


         # for i in search:
             # content = search
             # print(i)
        #  sentiment = classifier(search)
        #  tweets=({'feedback': search, 'sentiment': sentiment[0]['label'], 'percentage': sentiment[0]['score']*100})
        #  # print(content)
        # # tweets.append({'feedback': i, 'sentiment': sentiment[0]['label'], 'percentage': sentiment[0]['score']*100})
        # #  print(tweets)
        #  if tweets['sentiment']=="POSITIVE":
        #       p=p+1
        #  else:
        #      n=n+1

         # return str(p,n)
         # print(p,n)

         # m.append(tweets)
         tweets = []
         try:
           if not search:
             pass
           else:
             search = search.strip('][').split(',')
             # print(search)
             # search=search[0]
             # print(type(search))
             for tweet in search:
                # for i in tweet:
                #   print(tweet)
                  content = tweet
                  # print(content)
                  sentiment = classifier(content)
                  # print(sentiment)
                  tweets.append({'feedback': content, 'sentiment': sentiment[0]['label'], 'percentage': sentiment[0]['score']*100})
         except:
             pass

             # else:
             #    continue
                  # print(tweets)
         # break

         # else:
         #     pass
         # print(tweets)
         c = []
         plot_data1 = urllib.parse.quote("")
         # du=pd.DataFrame()
         # plot_data1=""

         # if not tweets:
             # raise Exception("none value given")
             # pass
         # else:
         for i in range(len(tweets)):
                 c.append(tweets[i]['sentiment'])
         a = c.count('POSITIVE')
         b = c.count('NEGATIVE')
         # print(tweets)
         if tweets:

            du = pd.DataFrame([(a / (a + b)) * 100, (b / (a + b)) * 100], index=["POSITIVE", "NEGATIVE"])
            du = du.plot(kind='pie', subplots=True, figsize=(8, 8))

         # else:
         #     pass

            # Make the Pie plot


            fig1 = du[0].figure
            img1 = io.BytesIO()
            fig1.savefig(img1, format='png')
            img1.seek(0)
            plot_data1 = urllib.parse.quote(base64.b64encode(img1.getvalue()).decode('utf-8'))

         # if plot_data1:
         print(tweets)
         # print(du)
         return render_template('admindata.html',result=tweets,plot_url1=plot_data1)



@app.route('/form.html')
def my_form():
    return render_template('form.html')
@app.route('/')
def reg():
    return render_template('sreg.html')
@app.route('/slog.html')
def log():
    return render_template('slog.html')
@app.route('/sreg.html')
def reg1():
    return render_template('sreg.html')
@app.route('/admin.html')
def log1():
    return render_template('admin.html')
@app.route('/admindata.html')
def log2():
    return render_template('admindata.html')
@app.route('/firebase.js')
def fir():
    return render_template('firebase.js')
@app.route('/data.js')
def fir1():
    return render_template('data.js')
@app.route('/fetch.js')
def fir2():
    return render_template('fetch.js')







if __name__ == "__main__":
    app.run(debug=True)