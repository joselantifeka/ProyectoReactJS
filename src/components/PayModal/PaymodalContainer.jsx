import Paymodal from "./Paymodal";

import { useState } from "react";

const PaymodalContainer = ({children}) => {
  const [modalOn, setModalOn] = useState(false);
  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div>
        <div className="cursor-pointer" onClick={clicked}>
          {children}
        </div>
      {/* conditionally display the result of the action if user confirms  */}
      {modalOn && <Paymodal setModalOn={setModalOn}/>}
    </div>
  );
};

export default PaymodalContainer;
