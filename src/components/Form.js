import React, { useState } from "react";
import AxiosAPI from "./AxiosAPI";

const Form = () => {
  const [image, setImage] = useState({ title: "", image: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", image.title);
    formData.append("image", image.image);
    addImage(formData);
    setImage({
      title: "",
      image: "",
    });
  };

  const addImage = (imageData) => {
    AxiosAPI.post("/add", imageData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const onChangeTitle = (e) => {
    setImage({ ...image, title: e.target.value });
  };

  const onChangeImage = (e) => {
    setImage({ ...image, image: e.target.files[0] });
  };
  return (
    <div className="form-container">
      <form encType="multipart/form-data" onSubmit={onSubmit}>
        <h2>Image Form</h2>
        <label className="form-label">Image Title</label>
        <input
          className="form-input"
          placeholder="Enter Image Title"
          type="text"
          value={image.title}
          onChange={onChangeTitle}
        />
        <label className="form-label">Choose an Image</label>
        <input type="file" className="form-input" onChange={onChangeImage} />
        <button type="submit" className="submit-btn">
          Submit!
        </button>
      </form>
    </div>
  );
};

export default Form;
