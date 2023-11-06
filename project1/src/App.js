import { useState } from "react";

import Box from "./component/Box";

// 1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)
const choice = {
  rock: {
    name: "Rock",
    img: "https://m.bigfile.co.kr/_template/service/images//07event_images/2016/04_gamezone/gamezone_rps_motion_r.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://blackbearwow.github.io/image/rockPaperScissors/scissors.png",
  },
  paper: {
    name: "Paper",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACoCAMAAACCN0gDAAABGlBMVEX////n5AEAAADm5QDp5ADo4gUAAAPr4gAAAAbo5gDs7TLp5z8AAAnm6TYAAwDi4yXJycnl6EfKzTzU1NTDxEwQCQCGhoazs7Po6Oj5+fnh20aUlJTe3t7v7+9PTBexsjlpaWkWFhYnJyeoqKh+fn7V0jVCQkLe2FhJSUmKhyjAwMAuKgmmpkFmYipWVlaQjUFCOxZTTiUiHQW1uzkUFACUmDYwMDC3uCl9ej1hWy2/u1FwbiyAgjl8cyg0MBZ2dUqamkZ7dh8tLwAiGxKUkSMzLh5CQiKvrlEkJxIYHhjb41JPUAw6OQC/vR/Q02RdWwnSzHGGfks+Oi7FwHNUVzokISwvLz0aERpXXlVlYGkhKADp5nEKAxy0sG9AWzhCAAAVgklEQVR4nO1dCVvbSNKOqiXrtrCR8QW2OYzBNuYypwkhOIQk5N6Z2f322/3/f2OruuVTLWICEyzH75PJcAjHeqmqfqu6uvTixRxzzDHHHHPMMcdsYbnSarWW8s/9NuKA5SUIsJZ97vcy7cgXYQhbued+P1ON5S0Yweric7+jKcYCQCLRpyqRnNN1D+pIkQPts9Orq6vdswMAA+D98nO/qykFkpVMQOewkLJtO1XwO8hWEjbna6MMufdoWMndlKlpTNEUZhW2uV/OV0YZipBw4Cil6LqmqrpmMsXeRv7g/dy4wsglAN0wRWalKBralqmw1BlF+vXnfmu/GLnFhfrC4v3iaR2jVKPAfZAxJfjLP8DItfWL3uVUILdeCSRB8T6+KmhauxZypOq6qhDwY7eD3vl+5Ze91+fG8sbakNosRl63uApOpoAUEU+CLYIPRuK3ifMikUkkDPxj4H3DRtSVRXS5C0sZBVMKe2hy0RzPFHKbKDcpUPfgRNK1hKyce2NsmZp7hF//PQJX/phbluHA/uvtziXQqgdL8kvXIFGqjpGFHskOSdD/Fsk1j+4GJF59LXiWV/v6rR0ZuxbxGy9ZiC2NVS+R4d8hWaxz33P2fAt1ASko68MZfUmW+WXx69shtlDV22fI98Ivf++/HMIPoeR7qq6aTFVN08NkBqAluXgJIFMOsaWozL7AYFf/5W/+l4OcKwGXaVdDAUVaU0NhYJ/KfRGZvayF2TKZu4u29RssihtIlpMpY8anBDKKbj+FzvjPUNTOZ5zE29SQzurDekM11Od4/78WGOOTsJPCgKUO2FI8vyFZF/NohXK2WPkAYC3q38gVl5aW1mcg7V7hYatpCWXeY0tTrSOA1XHjogWh4/KEepyt6h4uitLcJ7exKfKE4817c6o4gKrG0OjFor5t6Sz1Nhy5KEl8M67kxQ+6JTlb+SUh5kRpOhNzvtZJapVslY2zZR0ZsDp2+1t4v4fhII+2yCw5W4ubmCVQToX5lIMfwZ+xFmXrlOe8wdsdu3+VFRqhgihmSJm0qYbilqopVgkkbNW57j1o3JUaBxkwDLKvOOsMzlaa6XTPAxZQSegeLnOboxdT/Kma4SiPSk3K1jLp3v3tDzZV8Ms7DrpjMtZ0cbaqZigOKZpZbRujyUwODeXAC9shrRAytvKbkLhsFmxxjVcolyhIyrOEeGCdbqCqhgjAL9gvx0o3uCI4HyVsMfRbGVtbkLjxXS1YQtFba/ucrcovvL+nBY/ycrasJrriMAGYJRp3nhq6OIKtFsCNb3G9wevRJvPSH/n+UGyNKytsS+KKCkvtjQYZqhm+9DQZWxJPxKszqOMoyJlM1FpV/AUkkK7IYuO0Y5HbliKzLcXqjLoisbXr6ZPZVo4udtlgSdA0TddSr+i3Eyn6px35Y7knkimw88yI5CKheWtNyBb64X6KKax/McYvXWdN3sQU2w2PipQtxgVFAZO/oaLVBpoFshUyRBlb6OE3NaYNLsZwx5Do6iXRFVuJGsUWQ7bsnZEyVwsvRbYi18QhB6P0s8lUXe/nlJpOIk5J/UFsxXanltg65Op0nAOmqSeYC/dLB7xueO5J2FJ1xd4f0bIY4l66gZEOXhD/szvUBhDbStgSsvVGVlYge0gPZyqkzNuHisQTVd2s7g2vCDmqGnpsjC0l/mzVka0vrpQsRfVKQ1UuqrJep5kqYUszTw6Gt18r6Icu9UiE2Tql3aHYJj+5VQM+puRsKdbFkH+hlIc7j4VrgeiyVhlXgD4HyOuOHTA1TK2GbO0gW6HCWWxA0aghqbULtmjB762KxNZr3gIhYWsb2eovn/+Cbrmnd/uvzH+KFc7wwuNnutfHA1Nf6J5HsKWcDJVtiK1tk7gZv0pT3AsYpOB1HuJ5H86obamKmabd3bXYFp3zGGOcNxK9xeEOaQjBlsZCKwLTmHuKJPTSv+/QKIheJXN4+UBVophl6i+pPNO9PgEWxP6zqoXTH3TFL9DfsQ9sS5F4ouJ+g35LEprWtsVD/Ogrkg+zNxTkY7xNS0vdjiVnS1W2B8p7obdRLYlb3tlgg+w77BWU0IvhUsp03XsZtQ0eEywbYFx+MoktiXH57X7JgNh6I2fL9AZ7HuvgNJmsZEiZT7odsQseG1RQLzZNFjYH4qV26fSWsAWxrS9REKr56aCXzuCqQdm0jC3MGm+duLc/FzGU7FoRbNklB9piCUO23p3I2VJO+skfptNlS1Mlr4Yi1tuJdTGQsI53uu9FsOVt93lAti7TMrZMVSn3ohHKt5LLs6OQv1JRoxF3R+QFwXaaCSMZg2YSD//Hr0O2KHxLUe5pfjQtn+pYVG8IwSLq4+2IohJzwjvgJWylh9naT8nTb7JAviTm1+BVSiO2tHG28LXdszgXTgNQc+Cdy28xxAOrNhxIcifjbFH4HvdYnVVvAsmZhcyhpKlEwGwaca4/BKB6+2VBD5diFFFiCWoGyNZOSkjycbbSGXFNfgs6qQi2NNV9CVGtJTFCng5kNk1ZmFdMq9/Hhmy9dmVsaUotAwYtnFl4l46yLN30KWrJ23/jhFVeXZCyRWUIQ5ynQ7beWLLmLVVpAs+UUWt13ChH1C3KJeNbrOmjRY2ntrQOoSrp60AiIVsnkgIEMfpaFE7r0PZldIoX+gCOEd+txAGoFaZdplRRcpPuXZAqLkCmKmXLdEviik24sCOK1ooo6syAaVEZPQFXlhqWSKquoeGIwFWHjE2rZsgGTXePFyqQzkNT6s4Ilr5JJGcgar2gVqMEnNlmuHKF7DB/1eA7P+vElhLaxlFUdtKFrTyZ1qkbFiEiW9dwtXAgMwOmJTQEVMNSnrNRuBT7ZBvQQNvSQqqMysxkfHXonkg1PC918aJp3LWWAKWKUJa4D/1xX4rifAUlLJPUdVRc7MT3aevCDOWH+J+uuFS4P45thXkEVLqC17aMLYWOPHGZtAm7nixumak/yBHxNXwZmfg5Ct90I+6lmiFQt/J1IeSKdOcaS3Upr8EU8NZTRtgSH5kn1MCWR9NyaZ0IsUXOyRfE+G71jIHOHXZr5rg+CLwIZeVxbmUVzk3RIdH7rqlS6xuVKbIvlh0yLVmzjskXxLECc365vlFZj2mlK4tsOc3QgkatNrrCt1azi+Rp4ksjpqV4L6lvaQM6Nt/HHn8NOn7NQ9+QMM2ti7NYUInlIomGkzC+hJpHBFus+hZXxb/gOs1HZgypdWLG895B60Wu6/i0K8bM8degbD3dHc558hur/WO2a3E0L94/U5Ics+BayXzNu2s7kv0L3WRfyRGX4M5Sg+vHGednrPrqgQ5xdy87pRtMhJIQzxOzlQi2ONTDrgGG8ybcnaqqioVetpz7J/hWZGHLTw72zxb+gv2jWqGQ+v/dBiWO4z35sQC1Gx18irpduwRJwymH2KIGwtQebKK9dML6Q0DjTXPBpiReuHdVsFQKcK6/R2zFUVfkDHS2cpR5eE0jAW/DRXkyrXIGinkHJFQK6Ga538a8sgVHHywlaLC0/AOI57HGlWOeWEcZV/XA4RWwEF0K1VazddhJhY//BLZFpnXMo9PiX198i7HelQxVWEy7UElxXUR0vSnMu4CDgqy6wJsCi1uZciTRXhmFKd9jK8LrAgtG4PD0nNXeAcSyLYJSxR0vwj6YVv530x6XnvQp36VO8AxR8mMkN2j/lm8hFqHsKr22XZVRds51WBx7dhf4HmxU8NHsD7a0bMo+NRyA1c8D5TD8AfocNy3ytY32Z5epOm9O0TTOlspI98axnrr8HuBd+DBZH9KwhPfr3SFb27IyNaXTGj9DW8HF8F9fap4ynHTzFmdK2OPIVn5LHD6UQl4PpXjN3Gaju52SdKNyihVWdiiM51rbKW+8mwu5PozrNhDp00/3sjX+TVFItWuf7XB22LsktUOmlb1pppTRrXCkWidPjKfgosEQkWzdAyTKEzPxZBxz42kVM02XBg1qQ5kRsSV6UuK4JnK2Th7ElqjK8/55TdaohERaV4bjwAGqLFUfTyNVTSl8jKne+im2gmOHghnJFapHdOzQQCFidTTlRrb8LkA8O5w5W5GJsRSCIEZ1HDPUoEMCwvT2nMqRRY46EKV9tlS27cRTQPyMbf0IZHBe1dNke5DUssQ+vI2pOBVrYvpJ2SJoiiZdLkmbWlfUPB8HR8znx94kncmI1Fs/j6hDHlRjLFzSRMdpbqzMryxUtra2vh+3j7e2WtlB4XJ59b7M5+fZMs0owtxdPm19emuny9mtDAxjtVUfnKCA06iK3mPoCsgKb5ydAw2zmlrTCp5lwafJQKZH26YYjJXlQ3L/Dp7kbCmUQCYS0ypNV5ZopwXfX/vuqHzon/h+uXz05R36wia9Y9E1/7RsRQctRbUv+CCNynPTIsfCGtq9AZm7q88fPIbhBAMK8+zPX19/5JKniLb1cqQayCQbOA+li7fNj7wME52YuB7C9B75KdLIMICzsm15fF2nd04DOxWr0DyDTe6le9UxRR7kNlENbD9HIaXn7uF7blrT2XRDXDiJg6OU2/udD0US60Pz43/+JMu7tT2LvstUTFQCjsZath4PVP5ebQ9oHFfluXmRYolWH9jzbTYkERj/RNMwgbMLL9uQTML1l6vz8km6kCrYHmdUfrDscWRhel07Q0s34P1UqgfengX7Be6Dwv/6lAm5rdnlBtIlnjvTOPu220y7lhKhwx8FFX87tR0ajgeZqSw+LHIOLn02yEOG6r18715h7nmXzy8KntWTvL77svu1ZluMhfLlx8HkZE1vpYY/2YmmOwXHwkdrATxOoU+6t6PC1XAS3etOM82XhSeER2RhXEhOJ1l1rpn3XSWobwYBqUeW+J+mqta28/1VH3+8F6Rdfmu6Txm6TD7jAJPp6ZSlNL0vmXBuPV5Xl5yDG/zWP1XtPqqfTsrbewZq1nbpquAJ+2O8y/mhySQTUKghR/m8z3tFprUTKbcKRhIyNcWkjZkotkRo8kYK55Zb+3x1uUrz7w7dYFoBk576nAik26z0Pj0PCFrTWqZZ5IMgP9Kc0nv1AD2Zh3RWgIA3y/ZPu+DAaS0gNLKk8CPQhHG3ecAD/HSKUsIC14F7aXSE+9nCbKj/CS2eyBjvK7X93TbAzbmlBdvPD4NIB0jsstRu0nEcSE7x0J9lejIBdD/TKfAfOhHrI8iK6T6Z9fUMYPWI1IT2YL3K6/P0M1a6w+sfranUpAHyx8SWceGSq0WeWRLQhugK+NIIunv0LuHs2grTNGnf8r2/AGJL8dzzG5rZDMVpDVkCdXCSGHmuUqKfeyKMkaorrn8NsJ3CJfHBbIkj1QVRoTmeYi8UaGFO44BzZPMO5WhP4gWWIMSLmC42AUW49z/SCLKHS3uqYNiF8p5DqWpr+s8J5wJ1flGweuHooVA1zUo3oH1uyWcXyMH/IVxb7OaZKNjG4nnN1IJL5a2ST+NapX1YP75t5voNPj5De5g6VZm9HZS3Y9IeQhs6NBE/c1SzND14uMpD2KJTFph404MewjMpfwDrCJcZFMjJKZXvYeRaIKoLb/2UpyBdD7OPYIEkI2lqD2TLPM8k6Clna9MsHMZR5M6YgPbrGjU0Thx7euClntQd7EubdaUUi5/zduipukFXc2ywTCPvjKRjXF99sH6gu0JUibqzRs3xoal597CFEk9Lk4CJG1mI7CYlQfh73ru1Q0dU74XovUJBYZ/BnT2hXfL8W9PpGbpGHCec5vj5acxrM2e3Nl/bWUTjlRzIWToD57roL5rkB3BBfEvhMn6mRchtCLqg3alZveOIbPK6Aj3M7tTTJv0BZKvwnf69ODbiEhZbIB4Vk9mtmoGaYBEtyaGbZ8y6BUhNtiqq/MmKZV6/nt4SzY+wuEVaIuHATdM2xeIYGpYVBaZVS1CejC2eI9Hj3BLxUg9jyNfp7CYamLNTVaJ6bCOgm9tQsnnaPYHCVZnFdfzUNtJMBgr3ScyFLtNiC2wysary83POsa2I+aU//gnmduIctnpYPBa52+W5yyYuh2LcUtmHt3t20A0yAb3VfQpbMXZEgZUKGA7+2t/5smk/UTdPDz73055k5KQUmnJIQX786W9xhHikN9KlhAfs38fApKZIayItofE8yBNCfZV3CpaixnI+AfgDZKe1/++ByB3z7o0Le9KKxEMLiaxwgEo4GfuwJZBv4croQNl66rajHltcm86EIxLy32mfXfZU5Schy/0So5LpBMitQRISr62nb9RCmDV6MtTMjEZ6IR4J6DT88BQ8qbEM/f3jazXU/clpbZf8SdDoLXjlmbrGZI+MejhUcaRM01mBP10yNuX4SbBI3V3tNDXPPg1b/JWILXq+jQGrz32DTws6PAadlPnQ7Yko8FehthM6bWHMUIznoN5B6PpMPtb6p+hiGvXENXkmOiNiq4f8GtWCO5gu6k/T7s0nH6AyvaHXnRmx1QO5YuLfh4o+WbH9x1AVZEuM9JnOLu/HIMvTxQtXOqbg4RCtwN75e9pHrDz3zT09klSL6KZN7Uk8kfFRgdUS33SdOdPi58cwwlxYwRa+OnkXzThRvBmf2EqJ0VqV5761vwF5OoxnHNT6Ax4edfiCd002p/m4xSOBxuXQsjhwpkcA3dAqt/kuXHw3xu6D6Klv+0TX+PHLBxqWwnTN8t9RI+CsTLEOYZ0fySulGIrKx7mhSU2XDeGHMWx+mAxbkDAcOHID4/ppspiiuYc07s0wZtQPCbk1Mob2oaWYjzoYrGr6bRsMWmM3Z9QPCXXui9e+q4nOiKG2eT6nTEMedH6gxewvnbyXXhOTExkfm6h4hWZG7CUdz8C2WDREt9J12pJIem5tlmfbHs3w6W2o9fjs2aIpzlsEmEnxMICYrXF567LggKywnIAYy78qXV+fUle01mujD4yPHwfl52Ls20aPrJnLpseBdCUcJ9PxgwEtvYMGiuKmyqfveDaZ6Ry6LmcnHLPs5n7/5GzluW/m70dR9Eb8uZO2LKtnOpbrert/oCCDZJJE1OrZOX6FaqPU/KVz0NEUu7zP++h4Z/zUnj98Six0waGTS0737Nt//0H478XZ5eCktQP84Gr39LZmW70DeqZp2bXbb12H1gku4X8HyyLwvvokp2T4PDrvHQ8+xo+Ql4PTq6PySZpQPjq6aPBjfeLMP6zFclrbT4F3wgkpHvxN0SywmgSMoPsdcewEnfgJ/iiCuD7r4ieRp0ZxKTazuVyxtRbx3QCt2WgReQDqG2FKtpYWROReWV86jqJqbWlmU8P7kMuut4YejLKUrQ8vcivZdZn9VbIztdH6MOTzK8sLC4u5lfGBjPybK9mtgQGurh1vLP4OouExqBeXEMVidk7UHHPMMcccc8wxx2+A/wHGf5cWarF4JQAAAABJRU5ErkJggg==",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = userChoice => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    // console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    //Math.random() = 0~1의 무작위 숫자를 만들어냄
    // console.log("random value", randomItem);
    let final = itemArray[randomItem];
    //곱하기 3으로 만들어 0.xx,1.xx,2.xxx 를 만들고 floor을 줘서 배열번호로 뽑아냄
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer tie
    // user == rock, computer == "scissors" user 이긴거지
    // user == "rock" computer == paper   user 진거지
    // user == scissors computer paper    user 이긴거지
    // user == scissors computer rock     user 진거지
    // user == paper computer rock   user 이긴거지
    // user paper computer scissors user 진거지

    //choice에 들어있는 name : xx 의 값으로 비교해서 승부 결정
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";
  };
  return (
    <div>
      <div className="flex">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        {/* 버튼의 onclick는 콜백함수 형태로 해야함 */}
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
