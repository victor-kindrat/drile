import "./Deal.css"
import dealImage from "../images/DealImage.png"
import ActionBtn from "../ActionBtn/ActionBtn"

function Deal() {
    return (
        <div className="Deal">
            <div className="Deal-container">
                <div className="Deal-image-container">
                    <img src={dealImage} alt="deal" className="Deal-image" />
                </div>
                <div className="Deal-content-container">
                    <h4 className="Deal-headline">Deal of the week</h4>
                    <div className="Deal-price">from <span className="Deal-price-value">$99.99</span> </div>
                    <p className="Deal-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.
                    </p>
                    <ActionBtn content="Shop now"/>
                </div>
            </div>
        </div>
    )
}

export default Deal