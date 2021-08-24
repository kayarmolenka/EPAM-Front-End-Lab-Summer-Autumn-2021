import "./Modal.css";

function Modal({ active, contentModal, setActive, setInputValue }) {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        setInputValue('')
      }}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {contentModal}
      </div>
    </div>
  );
}

export default Modal;