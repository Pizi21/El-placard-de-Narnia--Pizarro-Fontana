import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import "./Form.css";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//swal
import Swal from "sweetalert2";

const initialState = {
  name: "",
  lastName: "",
  address: "",
  email: ",",
};

const Form = () => {
  const [values, setValues] = useState(initialState);
  //const [purchaseID, setPurchaseID] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    console.log("Document written with ID:", docRef.id);

    setTimeout(() => {
      setValues(initialState);
    }, 1000);

    Swal.fire({
      title: `Your ID transaction is : ${docRef.id} `,
      icon: `success`,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <Input
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="E-mail"
          name="email"
          value={values.email}
          onChange={onChangeHandler}
        />
        <Button> Iniciar Compra </Button>
      </form>
    </div>
  );
};

export default Form;
