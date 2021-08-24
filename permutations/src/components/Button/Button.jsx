import './Button.css';

function Button({ onStartProgram }) {
    return (
      <button className="btn" onClick={onStartProgram}>
        Click Here
      </button>
    );
  }
  
  export default Button;
  