import React from "react";
import './Symptoms.css'
function Symptoms()
{
    return(
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>SEHAT-Disease prediction</title>
        <link rel="stylesheet" href="style.css" />
        <div className="formdiv">
          <form className="form11" action="/prediction" method="POST">
            <fieldset>
              <legend style={{margin: '0 auto'}}>
                <h1 style={{color: 'white'}}>SEHAT-DISEASE PREDICTION</h1>
              </legend>
              <br />
              <div className="card card-body">
                <div className="container">
                  <h2>Please Select SYMPTOM 1:</h2>
                  <div className="select-box">
                    <div className="options-container">
                      <div className="option">
                        <input type="radio" className="radio" id="automobiles" defaultValue="itching" name="category" />
                        <label htmlFor="automobiles">ITCHING </label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="skin_rash" id="film" name="category" />
                        <label htmlFor="film">SKIN RASH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chills" id="science" name="category" />
                        <label htmlFor="science">CHILLS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="vomiting" id="art" name="category" />
                        <label htmlFor="art">VOMITING</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fatigue" id="music" name="category" />
                        <label htmlFor="music">FATIGUE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="cough" id="travel" name="category" />
                        <label htmlFor="travel">COUGH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="high_fever" id="sports" name="category" />
                        <label htmlFor="sports">HIGH FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="headache" id="news" name="category" />
                        <label htmlFor="news">HEADACHE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowish_skin" id="yellowish_skin" name="category" />
                        <label htmlFor="yellowish_skin">YELLOWISH SKIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="nausea" id="nausea" name="category" />
                        <label htmlFor="nausea">NAUSEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_appetite" id="loss_of_appetite" name="category" />
                        <label htmlFor="loss_of_appetite">LOSS OF APPETITE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="back_pain" id="back_pain" name="category" />
                        <label htmlFor="back_pain">BACK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abdominal_pain" id="abdominal_pain" name="category" />
                        <label htmlFor="abdominal_pain ">ABDOMINAL PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="diarrhoea" id="diarrhoea" name="category" />
                        <label htmlFor="diarrhoea">DIARRHOEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="mild_fever" id="mild_fever" name="category" />
                        <label htmlFor="mild_fever">MILD FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowing_of_eyes" id="yellowing_of_eyes" name="category" />
                        <label htmlFor="yellowing_of_eyes">YELLOWING OF EYES</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="malaise" id="malaise" name="category" />
                        <label htmlFor="malaise">MALAISE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chest_pain" id="chest_pain" name="category" />
                        <label htmlFor="chest_pain">CHEST PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fast_heart_rate" id="fast_heart_rate" name="category" />
                        <label htmlFor="fast_heart_rate">FAST HEART RATE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="pain_during_bowel_movements" id="pain_during_bowel_movements" name="category" />
                        <label htmlFor="pain_during_bowel_movements">PAIN DURING BOWEL MOVEMENTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="neck_pain" id="neck_pain" name="category" />
                        <label htmlFor="neck_pain">NECK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="stiff_neck" id="stiff_neck" name="category" />
                        <label htmlFor="stiff_neck">STIFF NECK</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="swelling_joints" id="swelling_joints" name="category" />
                        <label htmlFor="swelling_joints">SWELLING JOINTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_balance" id="loss_of_balance" name="category" />
                        <label htmlFor="loss_of_balance">LOSS OF BALANCE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="continuous_feel_of_urine" id="continuous_feel_of_urine" name="category" />
                        <label htmlFor="continuous_feel_of_urine">CONTINIOUS FEEL OF URINE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="depression" id="depression" name="category" />
                        <label htmlFor="depression">DEPRESSION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="irritability" id="irritability" name="category" />
                        <label htmlFor="irritability">IRRITABILITY</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="muscle_pain" id="muscle_pain" name="category" />
                        <label htmlFor="muscle_pain">MUSCLE PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abnormal_menstruation" id="abnormal_menstruation" name="category" />
                        <label htmlFor="abnormal_menstruation">ABNORMAL MENSTURATION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="polyuria" id="polyuria" name="category" />
                        <label htmlFor="polyuria">POLYURIA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="coma" id="coma" name="category" />
                        <label htmlFor="coma">COMA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="small_dents_in_nails" id="small_dents_in_nails" name="category" />
                        <label htmlFor="small_dents_in_nails">SMALL DENTS IN NAILS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="blister" id="blister" name="category" />
                        <label htmlFor="blister">BLISTER</label>
                      </div>
                    </div>
                    <div className="selected">
                      Select SYMPTOM 1
                    </div>
                    <div className="search-box">
                      <input type="text" placeholder="Start Typing..." />
                    </div>
                  </div>
                  {/* SYMPTOM 2*/}
                  <h2>Please Select SYMPTOM 2:</h2>
                  <div className="select-box">
                    <div className="options-container">
                      <div className="option">
                        <input type="radio" className="radio" id="automobiles" defaultValue="itching" name="category" />
                        <label htmlFor="automobiles">ITCHING </label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="skin_rash" id="film" name="category" />
                        <label htmlFor="film">SKIN RASH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chills" id="science" name="category" />
                        <label htmlFor="science">CHILLS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="vomiting" id="art" name="category" />
                        <label htmlFor="art">VOMITING</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fatigue" id="music" name="category" />
                        <label htmlFor="music">FATIGUE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="cough" id="travel" name="category" />
                        <label htmlFor="travel">COUGH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="high_fever" id="sports" name="category" />
                        <label htmlFor="sports">HIGH FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="headache" id="news" name="category" />
                        <label htmlFor="news">HEADACHE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowish_skin" id="yellowish_skin" name="category" />
                        <label htmlFor="yellowish_skin">YELLOWISH SKIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="nausea" id="nausea" name="category" />
                        <label htmlFor="nausea">NAUSEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_appetite" id="loss_of_appetite" name="category" />
                        <label htmlFor="loss_of_appetite">LOSS OF APPETITE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="back_pain" id="back_pain" name="category" />
                        <label htmlFor="back_pain">BACK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abdominal_pain" id="abdominal_pain" name="category" />
                        <label htmlFor="abdominal_pain ">ABDOMINAL PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="diarrhoea" id="diarrhoea" name="category" />
                        <label htmlFor="diarrhoea">DIARRHOEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="mild_fever" id="mild_fever" name="category" />
                        <label htmlFor="mild_fever">MILD FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowing_of_eyes" id="yellowing_of_eyes" name="category" />
                        <label htmlFor="yellowing_of_eyes">YELLOWING OF EYES</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="malaise" id="malaise" name="category" />
                        <label htmlFor="malaise">MALAISE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chest_pain" id="chest_pain" name="category" />
                        <label htmlFor="chest_pain">CHEST PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fast_heart_rate" id="fast_heart_rate" name="category" />
                        <label htmlFor="fast_heart_rate">FAST HEART RATE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="pain_during_bowel_movements" id="pain_during_bowel_movements" name="category" />
                        <label htmlFor="pain_during_bowel_movements">PAIN DURING BOWEL MOVEMENTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="neck_pain" id="neck_pain" name="category" />
                        <label htmlFor="neck_pain">NECK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="stiff_neck" id="stiff_neck" name="category" />
                        <label htmlFor="stiff_neck">STIFF NECK</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="swelling_joints" id="swelling_joints" name="category" />
                        <label htmlFor="swelling_joints">SWELLING JOINTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_balance" id="loss_of_balance" name="category" />
                        <label htmlFor="loss_of_balance">LOSS OF BALANCE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="continuous_feel_of_urine" id="continuous_feel_of_urine" name="category" />
                        <label htmlFor="continuous_feel_of_urine">CONTINIOUS FEEL OF URINE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="depression" id="depression" name="category" />
                        <label htmlFor="depression">DEPRESSION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="irritability" id="irritability" name="category" />
                        <label htmlFor="irritability">IRRITABILITY</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="muscle_pain" id="muscle_pain" name="category" />
                        <label htmlFor="muscle_pain">MUSCLE PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abnormal_menstruation" id="abnormal_menstruation" name="category" />
                        <label htmlFor="abnormal_menstruation">ABNORMAL MENSTURATION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="polyuria" id="polyuria" name="category" />
                        <label htmlFor="polyuria">POLYURIA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="coma" id="coma" name="category" />
                        <label htmlFor="coma">COMA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="small_dents_in_nails" id="small_dents_in_nails" name="category" />
                        <label htmlFor="small_dents_in_nails">SMALL DENTS IN NAILS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="blister" id="blister" name="category" />
                        <label htmlFor="blister">BLISTER</label>
                      </div>
                    </div>
                    <div className="selected">
                      Select SYMPTOM 2
                    </div>
                    <div className="search-box">
                      <input type="text" placeholder="Start Typing..." />
                    </div>
                  </div>
                  {/*SYMPTOM 3*/}
                  <h2>Please Select SYMPTOM 3:</h2>
                  <div className="select-box">
                    <div className="options-container">
                      <div className="option">
                        <input type="radio" className="radio" id="automobiles" defaultValue="itching" name="category" />
                        <label htmlFor="automobiles">ITCHING </label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="skin_rash" id="film" name="category" />
                        <label htmlFor="film">SKIN RASH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chills" id="science" name="category" />
                        <label htmlFor="science">CHILLS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="vomiting" id="art" name="category" />
                        <label htmlFor="art">VOMITING</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fatigue" id="music" name="category" />
                        <label htmlFor="music">FATIGUE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="cough" id="travel" name="category" />
                        <label htmlFor="travel">COUGH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="high_fever" id="sports" name="category" />
                        <label htmlFor="sports">HIGH FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="headache" id="news" name="category" />
                        <label htmlFor="news">HEADACHE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowish_skin" id="yellowish_skin" name="category" />
                        <label htmlFor="yellowish_skin">YELLOWISH SKIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="nausea" id="nausea" name="category" />
                        <label htmlFor="nausea">NAUSEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_appetite" id="loss_of_appetite" name="category" />
                        <label htmlFor="loss_of_appetite">LOSS OF APPETITE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="back_pain" id="back_pain" name="category" />
                        <label htmlFor="back_pain">BACK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abdominal_pain" id="abdominal_pain" name="category" />
                        <label htmlFor="abdominal_pain ">ABDOMINAL PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="diarrhoea" id="diarrhoea" name="category" />
                        <label htmlFor="diarrhoea">DIARRHOEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="mild_fever" id="mild_fever" name="category" />
                        <label htmlFor="mild_fever">MILD FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowing_of_eyes" id="yellowing_of_eyes" name="category" />
                        <label htmlFor="yellowing_of_eyes">YELLOWING OF EYES</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="malaise" id="malaise" name="category" />
                        <label htmlFor="malaise">MALAISE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chest_pain" id="chest_pain" name="category" />
                        <label htmlFor="chest_pain">CHEST PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fast_heart_rate" id="fast_heart_rate" name="category" />
                        <label htmlFor="fast_heart_rate">FAST HEART RATE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="pain_during_bowel_movements" id="pain_during_bowel_movements" name="category" />
                        <label htmlFor="pain_during_bowel_movements">PAIN DURING BOWEL MOVEMENTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="neck_pain" id="neck_pain" name="category" />
                        <label htmlFor="neck_pain">NECK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="stiff_neck" id="stiff_neck" name="category" />
                        <label htmlFor="stiff_neck">STIFF NECK</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="swelling_joints" id="swelling_joints" name="category" />
                        <label htmlFor="swelling_joints">SWELLING JOINTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_balance" id="loss_of_balance" name="category" />
                        <label htmlFor="loss_of_balance">LOSS OF BALANCE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="continuous_feel_of_urine" id="continuous_feel_of_urine" name="category" />
                        <label htmlFor="continuous_feel_of_urine">CONTINIOUS FEEL OF URINE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="depression" id="depression" name="category" />
                        <label htmlFor="depression">DEPRESSION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="irritability" id="irritability" name="category" />
                        <label htmlFor="irritability">IRRITABILITY</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="muscle_pain" id="muscle_pain" name="category" />
                        <label htmlFor="muscle_pain">MUSCLE PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abnormal_menstruation" id="abnormal_menstruation" name="category" />
                        <label htmlFor="abnormal_menstruation">ABNORMAL MENSTURATION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="polyuria" id="polyuria" name="category" />
                        <label htmlFor="polyuria">POLYURIA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="coma" id="coma" name="category" />
                        <label htmlFor="coma">COMA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="small_dents_in_nails" id="small_dents_in_nails" name="category" />
                        <label htmlFor="small_dents_in_nails">SMALL DENTS IN NAILS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="blister" id="blister" name="category" />
                        <label htmlFor="blister">BLISTER</label>
                      </div>
                    </div>
                    <div className="selected">
                      Select SYMPTOM 3
                    </div>
                    <div className="search-box">
                      <input type="text" placeholder="Start Typing..." />
                    </div>
                  </div>
                  {/*SYMPTOM 4*/}
                  <h2>Please Select SYMPTOM 4:</h2>
                  <div className="select-box">
                    <div className="options-container">
                      <div className="option">
                        <input type="radio" className="radio" id="automobiles" defaultValue="itching" name="category" />
                        <label htmlFor="automobiles">ITCHING </label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="skin_rash" id="film" name="category" />
                        <label htmlFor="film">SKIN RASH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chills" id="science" name="category" />
                        <label htmlFor="science">CHILLS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="vomiting" id="art" name="category" />
                        <label htmlFor="art">VOMITING</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fatigue" id="music" name="category" />
                        <label htmlFor="music">FATIGUE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="cough" id="travel" name="category" />
                        <label htmlFor="travel">COUGH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="high_fever" id="sports" name="category" />
                        <label htmlFor="sports">HIGH FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="headache" id="news" name="category" />
                        <label htmlFor="news">HEADACHE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowish_skin" id="yellowish_skin" name="category" />
                        <label htmlFor="yellowish_skin">YELLOWISH SKIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="nausea" id="nausea" name="category" />
                        <label htmlFor="nausea">NAUSEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_appetite" id="loss_of_appetite" name="category" />
                        <label htmlFor="loss_of_appetite">LOSS OF APPETITE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="back_pain" id="back_pain" name="category" />
                        <label htmlFor="back_pain">BACK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abdominal_pain" id="abdominal_pain" name="category" />
                        <label htmlFor="abdominal_pain ">ABDOMINAL PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="diarrhoea" id="diarrhoea" name="category" />
                        <label htmlFor="diarrhoea">DIARRHOEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="mild_fever" id="mild_fever" name="category" />
                        <label htmlFor="mild_fever">MILD FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowing_of_eyes" id="yellowing_of_eyes" name="category" />
                        <label htmlFor="yellowing_of_eyes">YELLOWING OF EYES</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="malaise" id="malaise" name="category" />
                        <label htmlFor="malaise">MALAISE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chest_pain" id="chest_pain" name="category" />
                        <label htmlFor="chest_pain">CHEST PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fast_heart_rate" id="fast_heart_rate" name="category" />
                        <label htmlFor="fast_heart_rate">FAST HEART RATE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="pain_during_bowel_movements" id="pain_during_bowel_movements" name="category" />
                        <label htmlFor="pain_during_bowel_movements">PAIN DURING BOWEL MOVEMENTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="neck_pain" id="neck_pain" name="category" />
                        <label htmlFor="neck_pain">NECK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="stiff_neck" id="stiff_neck" name="category" />
                        <label htmlFor="stiff_neck">STIFF NECK</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="swelling_joints" id="swelling_joints" name="category" />
                        <label htmlFor="swelling_joints">SWELLING JOINTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_balance" id="loss_of_balance" name="category" />
                        <label htmlFor="loss_of_balance">LOSS OF BALANCE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="continuous_feel_of_urine" id="continuous_feel_of_urine" name="category" />
                        <label htmlFor="continuous_feel_of_urine">CONTINIOUS FEEL OF URINE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="depression" id="depression" name="category" />
                        <label htmlFor="depression">DEPRESSION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="irritability" id="irritability" name="category" />
                        <label htmlFor="irritability">IRRITABILITY</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="muscle_pain" id="muscle_pain" name="category" />
                        <label htmlFor="muscle_pain">MUSCLE PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abnormal_menstruation" id="abnormal_menstruation" name="category" />
                        <label htmlFor="abnormal_menstruation">ABNORMAL MENSTURATION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="polyuria" id="polyuria" name="category" />
                        <label htmlFor="polyuria">POLYURIA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="coma" id="coma" name="category" />
                        <label htmlFor="coma">COMA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="small_dents_in_nails" id="small_dents_in_nails" name="category" />
                        <label htmlFor="small_dents_in_nails">SMALL DENTS IN NAILS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="blister" id="blister" name="category" />
                        <label htmlFor="blister">BLISTER</label>
                      </div>
                    </div>
                    <div className="selected">
                      Select SYMPTOM 4
                    </div>
                    <div className="search-box">
                      <input type="text" placeholder="Start Typing..." />
                    </div>
                  </div>
                  {/*SYMPTOM 5*/}
                  <h2>Please Select SYMPTOM 5:</h2>
                  <div className="select-box">
                    <div className="options-container">
                      <div className="option">
                        <input type="radio" className="radio" id="automobiles" defaultValue="itching" name="category" />
                        <label htmlFor="automobiles">ITCHING </label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="skin_rash" id="film" name="category" />
                        <label htmlFor="film">SKIN RASH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chills" id="science" name="category" />
                        <label htmlFor="science">CHILLS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="vomiting" id="art" name="category" />
                        <label htmlFor="art">VOMITING</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fatigue" id="music" name="category" />
                        <label htmlFor="music">FATIGUE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="cough" id="travel" name="category" />
                        <label htmlFor="travel">COUGH</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="high_fever" id="sports" name="category" />
                        <label htmlFor="sports">HIGH FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="headache" id="news" name="category" />
                        <label htmlFor="news">HEADACHE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowish_skin" id="yellowish_skin" name="category" />
                        <label htmlFor="yellowish_skin">YELLOWISH SKIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="nausea" id="nausea" name="category" />
                        <label htmlFor="nausea">NAUSEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_appetite" id="loss_of_appetite" name="category" />
                        <label htmlFor="loss_of_appetite">LOSS OF APPETITE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="back_pain" id="back_pain" name="category" />
                        <label htmlFor="back_pain">BACK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abdominal_pain" id="abdominal_pain" name="category" />
                        <label htmlFor="abdominal_pain ">ABDOMINAL PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="diarrhoea" id="diarrhoea" name="category" />
                        <label htmlFor="diarrhoea">DIARRHOEA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="mild_fever" id="mild_fever" name="category" />
                        <label htmlFor="mild_fever">MILD FEVER</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="yellowing_of_eyes" id="yellowing_of_eyes" name="category" />
                        <label htmlFor="yellowing_of_eyes">YELLOWING OF EYES</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="malaise" id="malaise" name="category" />
                        <label htmlFor="malaise">MALAISE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="chest_pain" id="chest_pain" name="category" />
                        <label htmlFor="chest_pain">CHEST PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="fast_heart_rate" id="fast_heart_rate" name="category" />
                        <label htmlFor="fast_heart_rate">FAST HEART RATE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="pain_during_bowel_movements" id="pain_during_bowel_movements" name="category" />
                        <label htmlFor="pain_during_bowel_movements">PAIN DURING BOWEL MOVEMENTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="neck_pain" id="neck_pain" name="category" />
                        <label htmlFor="neck_pain">NECK PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="stiff_neck" id="stiff_neck" name="category" />
                        <label htmlFor="stiff_neck">STIFF NECK</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="swelling_joints" id="swelling_joints" name="category" />
                        <label htmlFor="swelling_joints">SWELLING JOINTS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="loss_of_balance" id="loss_of_balance" name="category" />
                        <label htmlFor="loss_of_balance">LOSS OF BALANCE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="continuous_feel_of_urine" id="continuous_feel_of_urine" name="category" />
                        <label htmlFor="continuous_feel_of_urine">CONTINIOUS FEEL OF URINE</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="depression" id="depression" name="category" />
                        <label htmlFor="depression">DEPRESSION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="irritability" id="irritability" name="category" />
                        <label htmlFor="irritability">IRRITABILITY</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="muscle_pain" id="muscle_pain" name="category" />
                        <label htmlFor="muscle_pain">MUSCLE PAIN</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="abnormal_menstruation" id="abnormal_menstruation" name="category" />
                        <label htmlFor="abnormal_menstruation">ABNORMAL MENSTURATION</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="polyuria" id="polyuria" name="category" />
                        <label htmlFor="polyuria">POLYURIA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="coma" id="coma" name="category" />
                        <label htmlFor="coma">COMA</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="small_dents_in_nails" id="small_dents_in_nails" name="category" />
                        <label htmlFor="small_dents_in_nails">SMALL DENTS IN NAILS</label>
                      </div>
                      <div className="option">
                        <input type="radio" className="radio" defaultValue="blister" id="blister" name="category" />
                        <label htmlFor="blister">BLISTER</label>
                      </div>
                    </div>
                    <div className="selected">
                      Select SYMPTOM 5
                    </div>
                    <div className="search-box">
                      <input type="text" placeholder="Start Typing..." />
                    </div>
                  </div>
                  <div className="select-box">
                    <input className="button11" type="submit" defaultValue="Result" />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>

    )
}
export default Symptoms;