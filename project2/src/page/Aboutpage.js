import React from "react";
import { useNavigate } from "react-router-dom";

//링크방식
//네비게이트 방식  함수안에서 사용

const Aboutpage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    //navigate(가고싶은 주소)
    navigate("/");
  };
  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHomePage}>go to Homepage</button>
    </div>
  );
};

export default Aboutpage;
