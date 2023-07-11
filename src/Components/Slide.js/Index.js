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
          <S.Header>Doctor's exam</S.Header><br />
          <S.Statement>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </S.Statement>
          <S.ButtonLink to={"/start"} replace={true}>Start</S.ButtonLink>
        </BgLeft>
        <BgRight>
          <SlideSvg src={svg} />
        </BgRight>
      </SlideBg>
    </>
  );
}

export default Slide;
