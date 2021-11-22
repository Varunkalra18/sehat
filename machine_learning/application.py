from flask import  Flask, flash, redirect, render_template, request, jsonify
from flask_session import Session
from tempfile  import mkdtemp
import datetime
import numpy as np
import pickle
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
CORS(app)
scalar = StandardScaler()
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

output = 4


@app.route('/', methods=['GET'])
def home():
    return render_template("layout.html")

@app.route("/heartdiseaseprediction", methods=["GET","POST"])
def heartdisease():
    # loading knn model
    randomforest = pickle.load(open('./production/knn_heart.pkl', 'rb'))
    if request.method == "GET":
        output = [3]
        print("____________________________________________________we are in pred")
        return output 
    else:
        print("____________________________________we are in prediction with post")
        # features = [float(x) for x in request.form.values()]
        # final_features = np.asarray(features).reshape(1, -1)
        #prediction = randomforest.predict(final_features)
        #output = round(prediction[0], 2)
        age = request.json['age']
        print("age",age)
        gender = request.json['gender']
        print("gender",gender)
        cp = request.json['cp']
        print("cp",cp)
        trestbps = request.json['trestbps']
        print("trest",trestbps)
        chol = request.json['chol']
        print("chol",chol)
        fbs = request.json['fbs']
        print("fbs",fbs)
        recg = request.json['recg']
        print("recg",recg)
        mhr = request.json['mhr']
        print("mhr",mhr)
        ia = request.json['ia']
        print("ia",ia)
        dind = request.json['dind']
        print("dind",dind)
        slope = request.json["slope"]
        print("slope",slope)
        cf = request.json['cf']
        print("cf",cf)
        thales = request.json['thales']
        print("thales",thales)
        features = [age,gender,cp,trestbps,chol,fbs,recg,mhr,ia,dind,slope,cf,thales]
        print("features",features)
        final_features = np.asarray(features).reshape(1, -1)
        print("final features",final_features)
        prediction = randomforest.predict(final_features)
        print("prediction",prediction)
        output = round(prediction[0], 2)
        output = "1"
        print("output",output)  
        return output      
        #if output == 0:
            #result = "The patient is not likely to have heart disease!"
            #db.execute("INSERT INTO dashbord (dates, result) VALUES (:dates, :result)", dates = dates, result = result)
            # return render_template('predictionForm.html',result = 'The patient is not likely to have heart disease!')
        #else:
            #result = "The patient is likely to have heart disease!"
            #db.execute("INSERT INTO dashbord (dates, result) VALUES (:dates, :result)", dates = dates, result = result)
            #return render_template('predictionForm.html',result = 'The patient is likely to have heart disease!')

# disease prediction based on symptoms
@app.route("/diseaseprediction", methods=["GET","POST"])
def diseaseprediction():
    disease_model = pickle.load(open('./production/diseasePredictor.pkl', 'rb'))
    if request.method == "GET":
        output = [3]
        print("____________________________________________________we are in pred")
        return output
    else:
        print("____________________________________we are in prediction with post")
        # data recieving from form ...to be done
        #................hardcode............................
        # newdata = [[1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
        #     0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]]
        # output = disease_model.predict(newdata) 
        # print(output)
        symptom1 = request.json["symptom1"]
        print("1", symptom1)
        symptom2 = request.json["symptom2"]
        print("2", symptom2)
        symptom3 = request.json["symptom3"]
        print("3", symptom3)
        symptom4 = request.json["symptom4"]
        print("4", symptom4)
        symptom5 = request.json["symptom5"] 
        print("5", symptom5)
        return "Posted successfull"

# # disease prediction based on symptoms
@app.route("/diabetes", methods=["GET","POST"])
def diabetesprediction():
    
    diabetes_model = pickle.load(open('./production/knn_diabetes.pkl', 'rb'))
    if request.method == "GET":
        output = [3]
        print("____________________________________________________we are in diabities")
        return output
    else:
        print("____________________________________we are in prediction with post diabities")
        # data recieving from form ...to be done
        #................hardcode............................
        newdata = [[1, 1, 0, 0]]
        output = diabetes_model.predict(newdata)
        glucoseLevel = request.json['glucoseLevel']
        insulin = request.json["Insulin"]
        bmi = request.json["Bmi"]
        age = request.json["Age"]
        
        return output
    
@app.route("/corona", methods=["GET","POST"])
def covid():
    if(request.method == "GET"):
        print("WE are in corona tracker")
        return "come on"
    else:
        print("we are in covid post")
        age = request.json["age"]
        print("age", age)
        gender = request.json["gender"]
        print("gender", gender)
        fever = request.json["fever"]
        print("fever",fever)
        drycough=request.json["drycough"]
        print("dry", drycough)
        sort = request.json["sort"]
        print("sort", sort)
        tired = request.json["tired"]
        nasalc = request.json["nasalc"]
        pain = request.json["pain"]
        runose = request.json["runose"]
        diah = request.json["diah"]
        return "WOOO"
    
    
if __name__ == "__main__":
    app.run(debug = True)

#source env/Scripts/activate
#export FLASK_APP=application.py
#python -m flask run