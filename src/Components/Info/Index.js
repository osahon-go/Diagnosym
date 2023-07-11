import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

// General Styling
import * as S from "../Style";

// Styled Components
import { Form, Input, Select } from "./InfoElements";

// UserSlice actions
import { setUserDetails} from "../features/UserSlice";
import { ThemeProvider } from "styled-components";

function Info() {
  const { themeConfig } = useSelector((state) => state.themes)
  const [name, setName ] = useState(null);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const genders = ["Male", "Female", "Others"];

  const checkForm = () => {
    if (name == null || age == null || gender == null || location === "What's your gender?"){
      alert("All fields are mandatory!")
    }else{
      const values = {
        name, 
        age, 
        gender, 
        location
      }
      dispatch(setUserDetails(values))
      navigate("/select-category", {replace: true})
    }
  }

  return (
    <>
    <ThemeProvider theme={themeConfig}>
      <S.Container>
        <S.Wrapper>
          <S.Return to={"/emergency-check"} replace={true}>Go Back</S.Return>
          <S.Header>Necessary Details</S.Header>
          <S.Statement>
            We need some information from you to help serve you better.
          </S.Statement>

          <Form>
          <Input
              type="test"
              onChange={(e) => setName(e.target.value)}
              placeholder="What's your name?"
            /><br />      
            <Input
              type="number"
              min={7}
              max={120}
              onChange={(e) => setAge(e.target.value)}
              placeholder="How old are you?"
            />
            <br />
            <Input
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter Postcode?"
            />
            <br />
            <Select type="text" onChange={(e) => setGender(e.target.value)}>
              <option defaultValue="What's your gender?">
                What's your gender?
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
      </S.Container>
      </ThemeProvider>
    </>
  );
}

export default Info;
