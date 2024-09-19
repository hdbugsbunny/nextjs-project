"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setSelectedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>No Image is Selected Yet!</p>}
          {selectedImage && (
            <Image src={selectedImage} alt="User Selected Image" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/*"
          name={name}
          ref={inputRef}
          onChange={handleImageChange}
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
