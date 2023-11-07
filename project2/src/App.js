//router 경로
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./page/Homepage";
import Aboutpage from "./page/Aboutpage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import Userpage from "./page/Userpage";

//useNavigate hookFunction
//navigate 컴포넌트로 리다이렉트하게 도와줌

//리다이렉트 중요 : 로그인을 안했으면 userPageㄴㄴ 로그인으로 간다
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  //authenticate값이 false면 로그인을 안한것
  const PrivateRoute = () => {
    return authenticate == true ? (
      <Userpage />
    ) : (
      <Navigate to="/login"></Navigate>
    );
  };
  return (
    <>
      <Routes>
        {/* 스위치를 조절하는 역 */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        {/* <Route path ="주소" element={}> */}
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/user" element={<PrivateRoute></PrivateRoute>}></Route>

        {/*  */}
      </Routes>
    </>
  );
}

export default App;
