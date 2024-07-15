import classes from "./Modal.module.css";

export default function Modal(props) {
  const { onClose, children } = props;
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
