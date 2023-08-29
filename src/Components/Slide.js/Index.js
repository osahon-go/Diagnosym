import React from "react";
import { BgLeft, BgRight, SlideBg, SlideSvg } from "./SlideElements";

import * as S from "../Style";

import svg from "../../images/vector.svg";

function Slide() {
  return (
    <>
      <SlideBg>
        <BgLeft>
            <br/>
          <S.Header>Be Empowered</S.Header><br />
          <S.Statement>
          Gone are the days of uncertainty and lengthy wait times for diagnoses. Diagnosym empowers individuals and healthcare professionals alike by offering an accessible and reliable tool for early detection and identification of various diseases. By analyzing an array of symptoms, our system work tirelessly to deliver prompt and precise results.
          </S.Statement>
          <S.ButtonLink to={"/start"}>Try now</S.ButtonLink>
        </BgLeft>
        <BgRight>
          <SlideSvg src={svg} />
        </BgRight>
      </SlideBg>
    </>
  );
}

export default Slide;
