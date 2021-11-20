from flask import  Flask, flash, redirect, render_template, request, session, jsonify
from flask_session import Session
from tempfile  import mkdtemp
import datetime
from sklearn.ensemble import RandomForestClassifier
import numpy as np
import pickle
# from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
# scalar = StandardScaler()
app.config["TEMPLATES_AUTO_RELOAD"] = True


@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)




@app.route('/', methods=['GET'])
def home():
    return render_template("layout.html")

@app.route("/heartdiseaseprediction", methods=["GET","POST"])
def prediction():
    # loading knn model
    randomforest = pickle.load(open('production/randomforest.pkl', 'rb'))
    if request.method == "GET":
        print("we are in pred")
        return render_template("predictionForm.html")
    else:
        print("we are in prediction with post")
        features = [float(x) for x in request.form.values()]
        final_features = np.asarray(features).reshape(1, -1)
        prediction = randomforest.predict(final_features)
        output = round(prediction[0], 2)
        print("final features",output)        
        if output == 0:
            result = "The patient is not likely to have heart disease!"
            #db.execute("INSERT INTO dashbord (dates, result) VALUES (:dates, :result)", dates = dates, result = result)
            return render_template('predictionForm.html',result = 'The patient is not likely to have heart disease!')
        else:
            result = "The patient is likely to have heart disease!"
            #db.execute("INSERT INTO dashbord (dates, result) VALUES (:dates, :result)", dates = dates, result = result)
            return render_template('predictionForm.html',result = 'The patient is likely to have heart disease!')

if __name__ == "__main__":
    app.run(debug = True)

#source env/Scripts/activate
#export FLASK_APP=application.py
#python -m flask run