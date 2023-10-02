import './WheelArrow.css';

const WheelArrow = ({top, width, src}) => {
  return <div
    className="wheel-arrow"
    style={{
      "top": `${top}px`,
      "left": `calc(50% - ${width / 2}px)`,
      "width": `${width}px`
    }}>
    <img src={src} alt="img"/>
  </div>;
}

export default WheelArrow;
