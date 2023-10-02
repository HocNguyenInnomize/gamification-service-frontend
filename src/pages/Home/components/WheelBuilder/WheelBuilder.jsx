import { useState, useEffect } from 'react';

import './WheelBuilder.css';
import ArrowDownIcon from '../../../../asset/images/arrow-down.png';
import WheelCenter from "../WheelCenter/WheelCenter";
import WheelArrow from "../WheelArrow/WheelArrow";

const WheelBuilder = (
  {
    dataSource = [],
    width = 400,
    borderColor= '#fff',
    outlineBorderColor = '#0ba2ea',
    borderWidth = 8,
    outlineBorderWidth = 8,
    backgroundColorSection = ['#bfefff', '#8fdfff'],
    transitionEffect = 'cubic-bezier(0.87,-0.21,0,1)',
    transitionTime = '10s',
    degree = 0,
    isLoading = false,
    wheelCenter = {
      width: 30,
      backgroundColor: '#fff'
    },
    wheelArrow = {
      src: ArrowDownIcon,
      top: -5,
      width: 32
    },
    prizeImage = {
      top: 40,
      width: '106px',
      height: '52px',
    }
  }) => {

  dataSource = dataSource || [];
  const numberOfSections = dataSource.length;
  const R = width / 2 - (borderWidth - 2);
  const ratio = 360/numberOfSections;

  const renderCssForSec1 = (index) => {
    return {
      borderTopColor: backgroundColorSection[index % backgroundColorSection.length],
      transform: `rotate(${ratio*index}deg)`,
      borderWidth: `${R}px ${Math.ceil(R*Math.tan(Math.PI/numberOfSections))}px 0`,
      left: `calc(50% - ${Math.ceil(R*Math.tan(Math.PI/numberOfSections))}px)`
    }
  }
  const renderCssForSec2 = (index) => {
    return {
      transform: `rotate(${ratio*index}deg)`,
      width: `${Math.ceil(R*Math.tan(Math.PI/numberOfSections)) * 2}px`,
      height: `${R}px`,
      left: `calc(50% - ${Math.ceil(R*Math.tan(Math.PI/numberOfSections))}px)`
    }
  }
  const renderCssForImg = ({top, width, height}) => {
    return {
      position: 'absolute',
      top: `${top}px`,
      left: '50%',
      width: `${width}px`,
      height: `${height}px`,
      transform: 'translate(-50%, -50%)',
    }
  }

  return <div
    className="wheel"
    style={{
      width: `${width}px`,
      height: `${width}px`,
      border: `solid ${borderWidth}px ${borderColor}`,
      outline: `solid ${outlineBorderWidth}px ${outlineBorderColor}`,
  }}>
    <WheelArrow width={wheelArrow.width} top={wheelArrow.top} src={wheelArrow.src}></WheelArrow>
    <div
      className="wheel-inner"
      style={{
        transition: `${transitionEffect} ${transitionTime}`,
        transform: `rotate(${degree}deg`
    }}>
      {dataSource.map((e, index) => {
        return <div key={index}>
          <div className="wheel-sec" style={renderCssForSec1(index)}></div>
          <div className="wheel-sec" style={renderCssForSec2(index)}>
            <img src={e.img.src} style={renderCssForImg(prizeImage)} alt="img" />
          </div>
        </div>
        ;
      })}
      <WheelCenter width={wheelCenter.width} backgroundColor={wheelCenter.backgroundColor}></WheelCenter>
    </div>
  </div>
}

export default WheelBuilder;
