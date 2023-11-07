import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    //검색조건을 추가//바지만 검색하고싶음 단 파라미터 (/)값을 넣으면 오류가 남
    navigate("/products?q=pants");
    //?쿼리 뒤에 있는 값은 url경로에 영향을 미치지 않음
  };

  return (
    <div>
      <h1>home</h1>
      <Link to="/about">Go About page!!</Link>
      <button onClick={goProductPage}>product</button>
    </div>
  );
};

export default Homepage;
