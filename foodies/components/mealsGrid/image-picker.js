"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/*"
          name={name}
          ref={inputRef}
        />
        <button
          className={classes.button}
          type="button"
          onClick={() => inputRef.current.click()}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
}
