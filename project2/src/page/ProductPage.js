import React from "react";
// import { useParams } from "react-router-dom";

//array형태 반환
import { useSearchParams } from "react-router-dom";

function ProductPage() {
  let [query, setQuery] = useSearchParams();
  //쿼리의 값을 가져 온다 query.get("가지고 오고싶은 값")
  console.log(query.get("q"));
  return (
    <div>
      <h1>show all product!!</h1>
    </div>
  );
}

export default ProductPage;
