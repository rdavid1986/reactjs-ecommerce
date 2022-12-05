import { useState } from "react";
import MyButton from "../MyButton/MyButton";

export default function CarrtForm(props) {
    const [data, setDate] = useSatate({
        name:"",
        email:"",
        phone:"",
    });

    function  onInputchange(event) {
        let nameInput = event.target.name;
        let value = event.target.value;
        //Propiedades dinamicaqs
        let bewDate = {...date } ;
        newData[nameInput] = value;
        setDate(newData);
    }

    function onSubmit(event) {
        if (data.name.lenght === 0 ) return;
        event.preventDefault();
        props.onSubmit(event, data);
    }
    return (
        <form onSubmit={onSubmit}>
            {/* podriamos convertir los inputs en Componentes*/}
            <div style={{ display: "flex", marginBottom: 8 }}>
                <label htmlFor="name" style={{ width: "100px", marginRight: 4 }}>
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

            <div style={{ display: "flex", marginBottom: 8 }}>
                <label htmlFor="email" style={{ width: "100px", marginRight: 4 }}>
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

            <div style={{ display: "flex", marginBottom: 8 }}>
                <label htmlFor="phone" style={{ width: "100px", marginRight: 4 }}>
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

        <button
            disabled={data.name === "" || data.phone === "" || data.email === ""}
            type="submit"
        >
            Finalizar Compra
        </button>
        </form>
    )
}