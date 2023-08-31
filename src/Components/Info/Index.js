import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { postcodeValidator } from 'postcode-validator';

// General Styling
import * as S from "../Style";

// Styled Components
import { Form, InputLabel, Input, Select, InfoContainer} from "./InfoElements";

// UserSlice actions
import { setUserDetails} from "../features/UserSlice";
import { ThemeProvider } from "styled-components";

// images 
import symbol from "../../images/stetoscope.png"

// setting
import { PageSetup } from "../Setting";

function Info() {
  const { themeConfig } = useSelector((state) => state.themes)
  const [name, setName ] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ContainerHeight = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    PageSetup(ContainerHeight)
  }, [])

  const genders = ["Male", "Female", "Others", "I prefer not to say"];

  document.onkeydown = (btn) =>{
    if (btn.code === "Tab"){
      return false
    }
  }

  const checkForm = () => {
    if (name == null || age == null || gender === "What's your gender?"){
      alert("Fields marked (*) are mandatory!")
    }else{
      const values = {
        name, 
        age, 
        gender, 
        location
      }
      dispatch(setUserDetails(values))
      navigate("/select-option", {replace: true})
    }
  }

  const checkAge = (e) => {
    e.target.style.borderColor = ''
    if (e.target.value!== ""){
      if (e.target.value < 7 || e.target.value > 120 || isNaN(+e.target.value)){
        setAge(null)
        e.target.style.borderColor = 'red'
      }else{
        setAge(e.target.value)
        e.target.style.borderColor = ''
      }
    }
  }

  const checkName = (e) => {
    e.target.style.borderColor = ''
    if (e.target.value!== ""){
      var text = e.target.value
      if (!text.match(/^[A-Za-z]+$/)){
        setName(null)
        e.target.style.borderColor = 'red'
      }else{
        setName(e.target.value)
        e.target.style.borderColor = ''
      }
    }
  }

  // const checkPostcode = (e) => {
  //   e.target.style.borderColor = ''
  //   if (e.target.value !== ""){
  //     if (postcodeValidator(e.target.value,'GB')){
  //       setLocation(e.target.value)
  //       e.target.style.borderColor = ''
  //     }else{
  //       setLocation(null)
  //       e.target.style.borderColor = 'red'
  //     }
  //   }
  // }

  return (
    <>
    <ThemeProvider theme={themeConfig}>
      <InfoContainer ref={ContainerHeight}>
        <S.Wrapper>
          <S.Stetoscope src={symbol}/>
          <S.Return to={"/emergency-check"} replace={true}>Go Back</S.Return>
          <S.Header>Necessary Details</S.Header>
          <S.Statement>
            We need some information from you to help serve you better. Please note that your information is not stored.
          </S.Statement>

          <Form>
            <InputLabel htmlFor="fullname">What's your fullname? <span style={{color:'red'}}>*</span></InputLabel><br />
          <Input
              id="fullname"
              type="test"
              onChange={checkName}
            /><br />

            <InputLabel htmlFor="age">What is your age? <span style={{color:'red'}}>*</span></InputLabel><br /> 
            <Input
              id="age"
              type="text"
              // inputMode="numeric"
              // min={7}
              // max={120}
              onChange={checkAge}
            />
            <br />
            <InputLabel htmlFor="postcode">What is your Postcode?</InputLabel><br /> 
            <Input
              id="postcode"
              type="text"
              onChange={(e)=>setLocation(e.target.value)}
            />
            <br />

            <InputLabel htmlFor="gender">What is your gender? <span style={{color:'red'}}>*</span></InputLabel><br /> 
            <Select id="gender" type="text" onChange={(e) => setGender(e.target.value)}>
              <option defaultValue="What's your gender?">
                --
              </option>
              {genders.map((g, index) => (
                <option key={index} value={g}>
                  {g}
                </option>
              ))}
            </Select>
          </Form>
          <S.Button onClick={checkForm}>
            Proceed
          </S.Button>
        </S.Wrapper>
      </InfoContainer>
      <S.PolicyTag><S.PolicyLink to="/policy-statement">&#169; 2023 Privacy Statement</S.PolicyLink></S.PolicyTag>
      </ThemeProvider>
    </>
  );
}

export default Info;
