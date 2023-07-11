import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// json
import disease_dict from "../../dictionary.json";

// General Styling
import * as S from "../Style";

// Styled Components
import { Restart, SubHeading } from "./ResultElements";
import { ThemeProvider } from "styled-components";

// actions
import { resetResult } from "../features/ResultSlice";
import { resetUser } from "../features/UserSlice"

function Result() {
  const { themeConfig } = useSelector((state) => state.themes)
  const { result } = useSelector((state) => state.result);
  const { fullname, age, gender, location } = useSelector(
    (state) => state.user
  );
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const report = useRef()

  const tableBackground = themeConfig.name === "light" ? "table table-bordered" : "table table-bordered table-dark";
  const tableHeader = themeConfig.name === "light" ? "#f9f9f9" : "#2c3034";

  const restartSession = () => {
    navigate("/start", {replace: true})
    dispatch(resetUser())
    dispatch(resetResult())
  }

  const downloadReport = async () => {

    // https://www.robinwieruch.de/react-component-to-pdf/

    const element = report.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new JsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    const reportTitle = fullname.replaceAll(" ", "_")
    pdf.save(reportTitle+'.pdf');
  }

  return (
    <>
    <ThemeProvider theme={themeConfig}>
      <S.Container>
        <S.Wrapper ref={report} id="report">
          <S.Header>Diagnosis</S.Header>
          <S.Statement></S.Statement>
          <SubHeading>Patient Demographics</SubHeading>
          <table className={tableBackground}>
            <tbody>
              <tr>
                <th style={{ backgroundColor:  tableHeader }}>Name</th>
                <td>{fullname}</td>
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
          <table className={tableBackground}>
            <tbody>
              <tr>
                <th style={{width: "50%", backgroundColor: tableHeader}}>Date</th>
                <td>Today</td>
              </tr>
              <tr>
                <th style={{backgroundColor: tableHeader}}>Principal Doctor</th>
                <td>WDPS</td>
              </tr>
              {result.map((diagnosis, index) => {
                const probability = diagnosis[1]
                const disease = disease_dict[diagnosis[0]]
                const label =
                  index === 0
                    ? "Principal Diagnosis"
                    : index === 1
                    ? "Secondary Diagnosis"
                    : "Other Diagnosis";
                return (
                  <tr key={index}>
                    <th style={{backgroundColor: tableHeader}}>{label}</th>
                    <td>
                      {
                        probability > 0 ? 
                        (<>{disease}&nbsp;<span style={{fontSize: "12px", fontWeight: "bold"}}>(Acc: {(probability * 100).toFixed(2)}%)</span></>)
                        : "N.A."
                      }
                      {/* {disease_dict[diagnosis[0]]}&nbsp; */}
                    {/* <span style={{fontSize: "12px", fontWeight: "bold"}}>(Accuracy: {diagnosis[1] * 100}%)</span> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <S.Button onClick={downloadReport}>Download</S.Button>
          <Restart onClick={restartSession}>Restart</Restart>
        </S.Wrapper>
      </S.Container>
      </ThemeProvider>
    </>
  );
}

export default Result;
