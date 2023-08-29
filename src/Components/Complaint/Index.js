import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { json, useNavigate } from "react-router";
import { useRef } from "react";

// General Styling
import * as S from "../Style";

// ResultSlice actions
import { setDiagnosis } from "../features/ResultSlice";

// Styled Components
import {
  Description,
  Guide,
  PossibleSymptoms,
  RefreshBtn,
} from "./ComplaintElement";
import { ThemeProvider } from "styled-components";
import {
  Diagnose,
  SymptomsArea,
  SymptomsMask,
  SymptomsPills,
} from "../Symptoms/SymptomsElements";

// json data
import test_list from "../../test_list.json";

// Actions
import {
  set_diagnosis_time,
  set_user_Symptoms,
} from "../features/SymptomSlice";
import { Link } from "react-router-dom";

function Complaint() {
  const [complaint, setComplaint] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [guide, setGuide] = useState("");
  const [description, setDescription] = useState("")
  const [test, setTest] = useState({});
  const [count, setCount] = useState(0)
  const [action, setAction] = useState("Identify Symptoms");
  const { themeConfig } = useSelector((state) => state.themes);
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const guideBtn = useRef()

  useEffect(() => {
    setTest(test_list[0]);
  }, []);

  useEffect(()=>{
    var temp = "Click on symptoms to remove. Hover on symptom to view description."
    if (description !== ""){
      console.log(temp)
      setGuide(description)
    }else{
      setGuide(temp)
    }
  },[description])

  useEffect(()=>{
    if (suggestion.length > 0){
      setGuide("Click on symptoms to remove. Hover on symptom to view description.")
    }else{
      setGuide("")
    } 
  }, [suggestion])

  const fetchSymptoms = (e) => {
    if (action === "Identify Symptoms") {
      if (complaint.length === 0) {
        alert("No description has been provided.")
      }else if (/\d/.test(complaint)){ // Checking if user complaint includes numbers
        alert("Invalid description.")
      } else {
        const userComplaint = {
          description: complaint,
        };
        e.target.disabled = true;
        setAction("Processing...");
        //fetch("http://localhost:8080/api/findsymptoms", {
        fetch("https://diagnoserve.onrender.com/api/findsymptoms", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userComplaint),
        })
          .then((response) => response.json())
          .then((data) => {
            e.target.disabled = false;
            if (data.includes("Inconclusive")) {
              if (count === 3){
                setGuide("Inconclusive. Please try selecting from common symptoms.")
                setAction("Identify Symptoms");
              }else{
                setCount(count + 1)
                setGuide(
                  "Inconclusive. You could try again or select from common symptoms."
                );
                setAction("Identify Symptoms");
              }
            } else {
              setSuggestion(data);
              setAction("Load Symptoms");
            }
          })
          .catch((err) => {
            alert(err);
          });
      }
    } else if (action === "Load Symptoms") {
      if (suggestion.length === 0) {
        alert("No symptom has been selected.");
      } else {
        setAction("Loading...");
        e.target.disabled = true;
        
        suggestion.forEach((item) =>
        setTest((prev) => ({
          ...prev,
          [item]: 1
        }))
      );

        dispatch(set_user_Symptoms(suggestion));

        setTimeout(() => {
          setAction("Symptoms Loaded");
          
          e.target.disabled = false;
          setReady(true);
        }, 1000);

      }
    } else {
    }
  };

  const properText = (e) => {
    let temp = e.replaceAll("_", " ");
    const firstLetter = temp.charAt(0).toUpperCase();
    const remaining = temp.slice(1);
    return firstLetter + remaining;
  };

  const remove = (e) => {
    const filtered = suggestion.filter((symptom) => symptom !== e);
    if (suggestion.length === 1) {
      setAction("Identify Symptoms");
    }
    setSuggestion(filtered);
    setGuide("")
    setDescription("")
  };

  const restarting = () => {
    setGuide("");
    guideBtn.current.disabled = false
    setSuggestion([]);
    setAction("Identify Symptoms");
    setReady(false);
  };

  const fetchDiagnosis = () => {
    
    // fetch("http://localhost:8080/api/diagnose", {
    fetch("https://diagnoserve.onrender.com/api/diagnose", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(test),
    })
      .then((response) => response.json())
      .then((data) => {
        
        const pred = sorted(data.prediction);
        dispatch(setDiagnosis(pred));
        const timeOfDiagnosis = new Date();
        dispatch(set_diagnosis_time(timeOfDiagnosis.toLocaleString()));
        navigate("/diagnosis", { replace: true });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const sorted = (x) => {
    const val = Object.entries(x).sort((a, b) => b[1] - a[1]);
    return val;
  };

  const getDescription = (symptom) => {
    // fetch("http://localhost:8080/api/describe", {
    fetch("https://diagnoserve.onrender.com/api/describe", {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(symptom)
    })
    .then((response) => response.json())
    .then((data)=>{
      setDescription(data.description)
    })
  }

  const clearDescription = () => {
    setDescription("")
  }

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <S.Container>
          <S.Wrapper>
            <S.Return to={"/select-option"} replace={true}>
              Go Back
            </S.Return>
            <S.Header>Describe your symptoms</S.Header>
            <S.Statement>Separate each symptom description using <b>and</b>.</S.Statement>
            <Description
              placeholder="Type here..."
              onChange={(e) => setComplaint(e.target.value)}
              onFocus={restarting}
            ></Description>

            <PossibleSymptoms>
              <SymptomsMask style={{ border: "none" }}>
                <SymptomsArea>
                  {suggestion &&
                    suggestion.map((symptom, index) => {
                      const cleanedText = properText(symptom);
                      return (
                        <SymptomsPills
                          key={index}
                          onClick={() => remove(symptom)}
                          onMouseEnter={() => getDescription(symptom)}
                          onMouseLeave={clearDescription}
                        >
                          {cleanedText}
                        </SymptomsPills>
                      );
                    })}
                </SymptomsArea>
              </SymptomsMask>
              <RefreshBtn onClick={restarting}></RefreshBtn>
            </PossibleSymptoms>
            <Guide>
              {guide}
            </Guide>
            <S.Button onClick={fetchSymptoms} ref={guideBtn}>{action}</S.Button>
            <Diagnose ready={ready.toString()} onClick={fetchDiagnosis}>
              Get Diagnosis
            </Diagnose>
          </S.Wrapper>
        </S.Container>
      </ThemeProvider>
    </>
  );
}

export default Complaint;
