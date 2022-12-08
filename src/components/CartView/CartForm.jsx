import { useState } from "react";
import "./CartForm.css";
/* import MyButton from "../MyButton/MyButton"; */

export default function CarrtForm(props) {
    const [data, setData] = useState({
        name:"",
        email:"",
        phone:"",
    });

    function  onInputChange(event) {
        let nameInput = event.target.name;
        let value = event.target.value;
        //Propiedades dinamicas
        let newData = {...data } ;
        newData[nameInput] = value;
        setData(newData);
    }

    function onSubmit(event) {
        if (data.name.length === 0 ) return;
        event.preventDefault();
        props.onSubmit(event, data);
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="name__input">
                <label htmlFor="name">
                Nombre
                </label>
                <input
                required
                value={data.name}
                name="name"
                type="text"
                onChange={onInputChange}
                />
            </div>

            <div className="email__input">
                <label htmlFor="email">
                Email
                </label>
                <input
                required
                value={data.email}
                name="email"
                type="email"
                onChange={onInputChange}
                />
            </div>

            <div className="phone__input">
                <label htmlFor="phone">
                Teléfono
                </label>
                <input
                required
                value={data.phone}
                name="phone"
                type="phone"
                onChange={onInputChange}
                />
            </div>

        <button className="button__input"
            disabled={data.name === "" || data.phone === "" || data.email === ""}
            type="submit"
        >
            Finalizar Compra
        </button>
        </form>
    )
}