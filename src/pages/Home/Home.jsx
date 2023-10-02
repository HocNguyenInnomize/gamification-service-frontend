import WheelBuilder from "./components/WheelBuilder/WheelBuilder";
import CareCoins2 from "../../asset/images/2 CareCoins.png";
import CareCoins5 from "../../asset/images/5 CareCoins.png";
import CareCoins10 from "../../asset/images/10 CareCoins.png";
import CareCoins50 from "../../asset/images/50 CareCoins.png";
import CareCoins100 from "../../asset/images/100 CareCoins.png";
import CareCoins500 from "../../asset/images/500 CareCoins.png";
import CareCoins1000 from "../../asset/images/1000 CareCoins.png";

import './Home.css';
import {useState, useEffect} from "react";

const Home = () => {
  const [degree, setDegree] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const data = [
    {
      name: '2 CareCoins',
      img: {
        src: CareCoins2
      }
    },
    {
      name: '5 CareCoins',
      img: {
        src: CareCoins5
      }
    },
    {
      name: '500 CareCoins',
      img: {
        src: CareCoins500
      }
    },
    {
      name: '50 CareCoins',
      img: {
        src: CareCoins50
      }
    },
    {
      name: '100 CareCoins',
      img: {
        src: CareCoins100
      }
    },
    {
      name: '500 CareCoins',
      img: {
        src: CareCoins500
      }
    },
    {
      name: '1000 CareCoins',
      img: {
        src: CareCoins1000
      }
    },
    {
      name: '10 CareCoins',
      img: {
        src: CareCoins10
      }
    },
  ]

  const onSpinHandle = () => {
    if (isLoading) return;
    setIsLoading(true)
    let random = Math.floor((Math.random() * 360 * 10) + (360 * 3));
    setDegree(degree + random);
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }

  return (
    <div className={'w-screen h-screen flex flex-col items-center justify-center'}>
      <WheelBuilder
        degree={degree}
        isLoading={isLoading}
        dataSource={data}>
      </WheelBuilder>
      <div className="text-3xl mt-8 text-white font-bold">Spin & Win</div>
      <div className="flex flex-col items-center text-lg mt-8 text-white">
        <div>Try your fortune with our wheel game!</div>
        <div>Tap "Spin the Wheel" to get started.</div>
        <div>Good luck!</div>
      </div>
      <div className="mt-8">
        <button className="spin-btn" onClick={onSpinHandle}>Spin The Wheel</button>
      </div>
    </div>
  );
}

export default Home;
