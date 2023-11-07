import { Routes, Route } from "react-router-dom";
import Login from "./Page/Login";
import ProductAll from "./Page/ProductAll";
import ProductDetail from "./Page/ProductDetail";
import Navbar from "./component/Navbar";
// 전체 상품 페이지 , 로그인 페이지, 상세페이지 //react router설치
//-> npm install react-router-dom@6

// 전체 상품페이지
// 로그인페이지
// 상품디테일을 눌렀을 때 로그인이 되어있지 않을 경우 로그인페이지가 나온다
// 로그인이 되었을 때 상품 디테일 페이지 들어가기
// 로그아웃을 누르면 로그아웃하기
// 로그아웃이된다면 상품 디테일페이지를 볼 수 없다. 다시 로그인 페이지가 보이게
// 로그인 > 로그아웃보이기 로그아웃 > 로그인 보기
// 상품 검색
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<ProductAll></ProductAll>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/product/:id" element={<ProductDetail></ProductDetail>} />
      </Routes>
    </>
  );
}
export default App;
