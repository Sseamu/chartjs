import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year), // [2016, 2017 ...]
    //위의 내용이 무슨 내용이냐면 Data.js안에 UserData의 x축에 해당하는 내용을 연도를
    //포함시킬 생각인데 이걸 직접 넣어줄 수도 있지만 map함수를 이용하여 한번에 가져오기 위해서 위와 같이 표현
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          //차트의 색상을 설정해주기
          "rgba(75, 192, 192, 1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black", //바깥 색상
        borderWidth: 2, //경계 굵기
      },
    ],
  });
  return (
    <div class="flex min-h-screen max-w-2xl">
      <div class="h-full w-4/5">
        S
        <BarChart chartData={userData} />
        <LineChart chartData={userData} />
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
