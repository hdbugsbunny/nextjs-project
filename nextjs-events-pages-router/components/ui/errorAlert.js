import classes from "./errorAlert.module.css";

export default function ErrorAlert(props) {
  const { children } = props;

  return <div className={classes.alert}>{children}</div>;
}
