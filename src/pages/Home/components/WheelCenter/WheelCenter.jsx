import './WheelCenter.css';

const WheelCenter = ({width, backgroundColor}) => {
  return <div
    className='wheel-center'
    style={{
      width: `${width}px`,
      height: `${width}px`,
      left: `calc(50% - ${width / 2}px)`,
      top: `calc(50% - ${width / 2}px)`,
      backgroundColor: backgroundColor
    }}></div>
}

export default WheelCenter;
