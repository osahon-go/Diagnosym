import React from "react";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// json data
import category from "../../body_category.json";
import symptoms from "../../processed_symptoms.json";
import test_list from "../../test_list.json";

// General Styling
import * as S from "../Style";

// Styled Components
import {
  SymptomsArea,
  SymptomsPills,
  SelectedArea,
  AreaSymptoms,
  AreaRefresh,
  SelectedPill,
  Refresh,
  Diagnose,
  SymptomsMask,
  SelectedMask,
} from "./SymptomsElements";

// ResultSlice actions
import { setDiagnosis } from "../features/ResultSlice";
import { set_user_Symptoms, set_diagnosis_time, unset_user_symptoms } from "../features/SymptomSlice";
import { ThemeProvider } from "styled-components";

// images 
import symbol from "../../images/stetoscope.png"

// Setting
import { PageSetup } from "../Setting";

function Symptoms() {
  const { themeConfig } = useSelector((state) => state.themes)
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [test, setTest] = useState({});
  const [ready, setReady] = useState(false);
  const [load, setLoad] = useState("Load Symptoms");
  const { area } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ContainerHeight = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    PageSetup(ContainerHeight)
  }, [])

  useEffect(() => {
    setTest(test_list[0]);
  }, [list]);


  const removeDuplicate = (arr) => {
    let uniqueChars = [...new Set(arr)];
    return uniqueChars;
  };

  useEffect(() => {
    const arr = [];

    if (area) {
      const diseases = category[0][area].split(",");

      diseases.map((disease) => {
        const symptomList = symptoms[0][disease].split(",");
        arr.push(...symptomList);
        setList(removeDuplicate(arr));
      });
    }
  }, [area]);



  const select = (e) => {
    const filtered = list.filter((symptom) => symptom !== e);
    setList(filtered);
    setSelected([...selected, e]);
  };

  const loadSymptoms = (e) => {
    if (selected.length === 0) {
      alert("No symptom has been selected.");
    } else {
      setLoad("Loading...");
      e.target.disabled = true
      selected.map((item) =>
        setTest((prev) => ({
          ...prev,
          [item]: 1,
        }))
      );

      dispatch(set_user_Symptoms(selected))

      setTimeout(() => {
        setLoad("Update Symptoms");
        e.target.disabled = false
        setReady(true);
      }, 1000);
    }
  };

  const unLoadSymptoms = () => {
    const tempArray = [];
    selected.map((item) => tempArray.push(item));
    setList([...list, ...tempArray]);
    setSelected([]);
    setReady(false);
    setLoad("Load Symptoms");
    dispatch(unset_user_symptoms())
  };

  const sorted = (x) =>{
    const val = Object.entries(x).sort((a,b) => b[1]-a[1])
    return val
  }

  const fetchDiagnosis = () => {
    fetch("https://diagnoserve.onrender.com/api/diagnose", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(test),
    })
      .then((response) => response.json())
      .then((data) => {
        const pred = sorted(data.prediction)
        dispatch(setDiagnosis(pred))
        const timeOfDiagnosis = new Date()
        dispatch(set_diagnosis_time(timeOfDiagnosis.toLocaleString()))
        navigate("/diagnosis", {replace: true})
      })
      .catch((err) => {
        alert(err);
      });
  };

  const properText = (e) => {
    let temp = e.replaceAll("_"," ")
    const firstLetter = temp.charAt(0).toUpperCase()
    const remaining = temp.slice(1)
    return firstLetter+remaining
  }

  return (
    <>
    <ThemeProvider theme={themeConfig}>
      <S.Container ref={ContainerHeight}>
        <S.Wrapper>
          <S.Stetoscope src={symbol} />
          <S.Return to={"/select-category"} replace={true}>Go Back</S.Return>
          <S.Header>{area}</S.Header>
          <S.Statement>Click to select symptoms.</S.Statement>
          <SymptomsMask>
            <SymptomsArea>
              {list &&
                list.map((symptom, index) => {
                  const cleanedText = properText(symptom)
                  return (
                    <SymptomsPills key={index} onClick={() => select(symptom)}>
                      {cleanedText}
                    </SymptomsPills>
                  );
                })}
            </SymptomsArea>
          </SymptomsMask>
          <SelectedMask>
            <SelectedArea>
              <AreaSymptoms>
                {selected &&
                  selected.map((selectedSymptom, index) => {
                    const comma = index === 0 ? "" : ",";
                    const selectedText = properText(selectedSymptom)
                    return (
                      <SelectedPill key={index}>
                        {comma} {selectedText}
                      </SelectedPill>
                    );
                  })}
              </AreaSymptoms>
              <AreaRefresh>
                <Refresh onClick={unLoadSymptoms} />
              </AreaRefresh>
            </SelectedArea>
          </SelectedMask>
          <S.Button onClick={(e) => loadSymptoms(e)}>
            {load}
          </S.Button>
          <Diagnose ready={ready.toString()} onClick={fetchDiagnosis}>
            Get Diagnosis
          </Diagnose>
        </S.Wrapper>
      </S.Container>
      <S.PolicyTag><S.PolicyLink to="/policy-statement">&#169; 2023 Privacy Statement</S.PolicyLink></S.PolicyTag>
      </ThemeProvider>
    </>
  );
}

export default Symptoms;
