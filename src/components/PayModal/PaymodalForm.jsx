import { useState } from "react";
import useCartContext from "../../store/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function PaymodalForm({
  setModalOn,
  setpaymodalForm,
  setpaymodalCheck,
  setpaymodalCheckError,
}) {
  const { calcPriceCart, cart, setOrderId, orderId, clear } = useCartContext();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [alerta, setAlerta] = useState(false);

  const handleOKClick = () => {
    setModalOn(false);
  };

  const nombreHandler = (event) => {
    setNombre(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const numeroHandler = (event) => {
    setNumero(event.target.value);
  };

  const submitHandler = () => {
    if (email === "" || nombre === "" || numero === "") {
      setAlerta(true);
    } else {
      setAlerta(false);
      const order = {
        buyer: {
          email: email,
          name: nombre,
          phone: numero,
        },
        data: new Date(),
        items: cart,
        total: calcPriceCart(),
      };
      const db = getFirestore();

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order)
        .then(({ id }) => {
          setOrderId(id);
          window.localStorage.setItem("ID", id);
          setpaymodalCheck(true);
          setpaymodalForm(false);
        })
        .catch(() => {
          setpaymodalCheck(false);
          setpaymodalForm(false);
          setpaymodalCheckError(true);
        });
    }
  };
  return (
    <>
      <p className="mb-[20px] text-gray-700">
        Llena este formulario para generar tu orden
      </p>
      <form onSubmit={submitHandler}>
        <div className="mb-[20px]">
          <div className="flex justify-between items-center">
            <label>Nombre</label>
            <input
              onChange={nombreHandler}
              required
              type="text"
              className="bg-gray-200 rounded-full p-[4px] ml-[30px] my-[6px] focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center">
            <label>Email</label>
            <input
              onChange={emailHandler}
              required
              type="email"
              className="bg-gray-200 rounded-full p-[4px] ml-[30px] my-[6px] focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-center">
            <label>Numero</label>
            <input
              onChange={numeroHandler}
              required
              type="text"
              className="bg-gray-200 rounded-full p-[4px] ml-[30px] my-[6px] focus:outline-none"
            />
          </div>
        </div>
        {alerta && (
          <p className="text-center my-[20px] text-[red]">
            ¡No puedes enviar un formulario incompleto!
          </p>
        )}
        <div className="flex items-center gap-[15px]">
          <div>
            Total a Pagar:{" "}
            <span className="font-normal">${calcPriceCart()}</span>
          </div>
          <button
            onClick={handleOKClick}
            className=" rounded px-4 py-2 text-white  bg-red-800 "
          >
            Cancelar
          </button>
          <button
            onClick={submitHandler}
            type="button"
            className="rounded px-4 py-2 text-white bg-blue-800 "
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default PaymodalForm;
