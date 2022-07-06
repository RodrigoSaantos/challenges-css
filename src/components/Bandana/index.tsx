import './styles.css'
export function Bandana() {
  return (
   <div className="container">
    <div className="bandana">
    <div className="shadow-dark"></div>
      <div className="silver">
        <div className="shadow-light"></div>
        <div className="shadow-light middle"></div>
        <div className="screw left">
          <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
        <div className="village">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="screw right">
        <div className="ball"></div>
          <div className="ball"></div>
          <div className="ball"></div>
        </div>
      </div>
    </div>
   </div>
  )
}