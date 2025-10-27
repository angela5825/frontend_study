import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Timer 동작 중");
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // 해제 작업을 해주자

      console.log("Timer 해제 완료");
    };
  }, []);

  // const interval = setInterval(() => {
  //   setSeconds((prev) => prev + 1);
  // }, 1000); // 좀 비정상적으로 증가한다
  // // 인터벌이 여러개 호출
  // // 화면이 랜더링되면 인터벌 선언할 때 호출된다 .

  return <p> Timer : {seconds} seconds</p>;
};

export default Timer;
