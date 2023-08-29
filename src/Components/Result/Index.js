import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import JsPDF from "jspdf";
import html2canvas from "html2canvas";

// json
import disease_dict from "../../voting_dictionary.json";

// General Styling
import * as S from "../Style";

// Styled Components
import {
  ResultContainer,
  Restart,
  SubHeading,
  Symptoms,
  Comments,
} from "./ResultElements";
import { ThemeProvider } from "styled-components";

// actions
import { resetResult } from "../features/ResultSlice";
import { resetUser } from "../features/UserSlice";

// images
import symbol from "../../images/stetoscope.png";

// Setting
import { PageSetup } from "../Setting";

function Result() {
  const [firstname, setFirstname] = useState(null);
  const { themeConfig } = useSelector((state) => state.themes);
  const { result } = useSelector((state) => state.result);
  const { fullname, age, gender, location } = useSelector(
    (state) => state.user
  );
  const { list_of_symptoms, time_of_diagnosis } = useSelector(
    (state) => state.user_symptoms
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const report = useRef();
  const ContainerHeight = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    PageSetup(ContainerHeight);
  }, []);

  useEffect(() => {
    if (fullname) {
      const nameArray = fullname.split(" ");
      if (nameArray.length > 1) {
        setFirstname(nameArray[0]);
      } else {
        setFirstname(fullname);
      }
    }
  }, [fullname]);

  const tableBackground =
    themeConfig.name === "light"
      ? "table table-bordered"
      : "table table-bordered table-dark";
  const tableHeader = themeConfig.name === "light" ? "#f9f9f9" : "#2c3034";

  const restartSession = () => {
    navigate("/start", { replace: true });
    dispatch(resetUser());
    dispatch(resetResult());
  };

  const properText = (e) => {
    let temp = e.replaceAll("_", " ");
    const firstLetter = temp.charAt(0).toUpperCase();
    const remaining = temp.slice(1);
    return firstLetter + remaining;
  };

  const downloadReport = async () => {
    // https://www.robinwieruch.de/react-component-to-pdf/

    const element = report.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new JsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    const reportTitle = fullname.replaceAll(" ", "_");
    pdf.save(reportTitle + ".pdf");
  };

  const generateComment = (result = null) => {
    if (result !== null) {
      const diagnosis = result[0];
      const confidence_level = diagnosis[1] * 100;

      if (confidence_level > 50) {
        return (
          "The result indicates that " +
          disease_dict[diagnosis[0]] +
          " is the primary concern, with a confidence level of " +
          confidence_level.toFixed(2) +
          "%. Please schedule a thorough consultation with a healthcare professional to discuss this report in detail."
        );
      } else {
        return "Based on the symptoms provided, a definitive diagnosis cannot be determined. I strongly advise scheduling a visit with a healthcare professional for a thorough analysis and appropriate evaluation.";
      }
    }
  };

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <ResultContainer ref={ContainerHeight}>
          <S.Wrapper ref={report} id="report">
            <S.Stetoscope src={symbol} />
            <S.Header>Diagnosis</S.Header>
            <S.Statement></S.Statement>
            <SubHeading>Patient Demographics</SubHeading>
            <table className={tableBackground}>
              <tbody>
                <tr>
                  <th style={{ backgroundColor: tableHeader }}>Name</th>
                  <td>{firstname}</td>
                  <th style={{ backgroundColor: tableHeader }}>Age</th>
                  <td>{age}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: tableHeader }}>Gender</th>
                  <td>{gender}</td>
                  <th style={{ backgroundColor: tableHeader }}>Location</th>
                  <td>{location}</td>
                </tr>
              </tbody>
            </table>
            <SubHeading>Patient Symptoms</SubHeading>
            <Symptoms>
              {list_of_symptoms.map((item, index) => {
                const comma = index === 0 ? "" : ",";
                let cleanedText = properText(item);
                return (
                  <span key={index}>
                    {comma} {cleanedText}
                  </span>
                );
              })}
            </Symptoms>
            <table className={tableBackground}>
              <tbody>
                <tr>
                  <th style={{ width: "50%", backgroundColor: tableHeader }}>
                    Date
                  </th>
                  <td>{time_of_diagnosis}</td>
                </tr>
                <tr>
                  <th style={{ backgroundColor: tableHeader }}>
                    Principal Doctor
                  </th>
                  <td>Diagnosym</td>
                </tr>
                {result.map((diagnosis, index) => {
                  const probability = diagnosis[1];
                  const disease = disease_dict[diagnosis[0]];

                  const label =
                    index === 0
                      ? "Principal Diagnosis"
                      : index === 1
                      ? "Secondary Diagnosis"
                      : "Other Diagnosis";

                  return (
                    <tr key={index}>
                      <th style={{ backgroundColor: tableHeader }}>{label}</th>
                      <td>
                        {probability > 0 ? (
                          <>
                            {disease}&nbsp;
                            <span
                              style={{
                                display: "inline-block",
                                fontSize: "12px",
                                fontWeight: "bold",
                              }}
                            >
                              (Acc: {(probability * 100).toFixed(2)}%)
                            </span>
                          </>
                        ) : (
                          "N.A."
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <SubHeading>Comments</SubHeading>
            <Comments>{generateComment(result ? result : "")}</Comments>
            <S.Button onClick={downloadReport}>Download</S.Button>
            <Restart onClick={restartSession}>Restart</Restart>
          </S.Wrapper>
        </ResultContainer>
      <S.PolicyTag><S.PolicyLink to="/policy-statement">&#169; 2023 Privacy Statement</S.PolicyLink></S.PolicyTag>
      </ThemeProvider>
    </>
  );
}

export default Result;
