import "./MyButton.css";

function Button (props) {
    console.log('hola desde mi MyButton');
    console.log(props);
    const styleButton = { backgroundColor: props.color };
    return (
      <button  style={styleButton} className="btn" >
        {props.text}
      </button>
    );
  }
 
  export default Button;