
import { useState } from "react";
import PaymodalForm from "./PaymodalForm";
import PaymodalCheck from "./PaymodalCheck";
import PaymodalCheckError from "./PaymodalCheckError";

const Paymodal = ({ setModalOn }) => {
    const [paymodalForm, setpaymodalForm] = useState(true)
    const [paymodalCheck, setpaymodalCheck] = useState(false)
    const [paymodalCheckError, setpaymodalCheckError] = useState(false)
  return (
    <div className="bg-[rgb(0,0,0,0.5)] opacity-100 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center bg-white py-12 px-24 rounded-xl ">
          { paymodalForm && <PaymodalForm setpaymodalForm={setpaymodalForm} setpaymodalCheck={setpaymodalCheck} setpaymodalCheckError={setpaymodalCheckError} setModalOn={setModalOn} />}
          { paymodalCheck && <PaymodalCheck setModalOn={setModalOn} />}
          { paymodalCheckError && <PaymodalCheckError setModalOn={setModalOn} />}
        </div>
      </div>
    </div>
  );
};

export default Paymodal;
