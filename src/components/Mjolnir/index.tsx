import './styles.css';

export function Mjolnir() {
  return (
    <div className="container">
      <div className="mjolnir">
        <div className="hammer-container">
          <div className="hammer-left">
            <div className="hammer-left-inside"></div>
          </div>
          <div className="hammer-center">
            <div className="hammer-top"></div>
            <div className="hammer">
              <div className="header">
                <div className="quadrado"></div>
              </div>
            </div>
            <div className="hammer-bottom"></div>
          </div>
          <div className="hammer-right">
            <div className="hammer-right-inside"></div>
          </div>
        </div>
        <div className="cano">
          <div className="cano-header">

          </div>
          <div className="cano-header-bottom"></div>
          <div className="wood">
            <div className="cano-silver"></div>
            <div className="cano-silver"></div>
            <div className="cano-silver"></div>
            <div className="cano-silver"></div>
            <div className="cano-silver"></div>
            <div className="cano-silver"></div>
            <div className="cano-silver"></div>
          </div>
          <div className="cano-header-bottom"></div>
          <div className="cano-header-footer">
          </div>
            <div className="corda"></div>
        </div>
      </div>
    </div>
  )
}