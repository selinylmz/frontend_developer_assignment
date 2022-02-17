import React, { useState } from "react";
import ProfilIcon from "../../assets/people-profile-icon_24877-40756.png";
import "./index.scss";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img src={src} />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);
const Profile = ({ onSubmit, src, name, status }) => (
  <div className="card-profile">
    <form onSubmit={onSubmit}>
      <label className="custom-file-upload fas">
        <div className="img-wrap">
          <img className="photo-upload" src={src} />
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
     
    </form>
  </div>
);

const Edit = ({ onSubmit, children }) => (
  <div className="card-profile">
    <form onSubmit={onSubmit}>
      {children}
     
    </form>
  </div>
);

const CardProfile = () => {
  const [file, setFile] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState(`${ProfilIcon}`);
  const [active, setActive] = useState(true);
  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
      setFile(e.target.files[0]);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  return (
    <div>
      {active ? (
        <Edit onSubmit={handleSubmit}>
          <ImgUpload onChange={photoUpload} src={imagePreviewUrl} />
        </Edit>
      ) : (
        <Profile onSubmit={handleSubmit} src={imagePreviewUrl} />
      )}
      <div className="card-profile__employee">
        <p className="card-profile__employee-name">Deniz Arkan</p>
        <p className="card-profile__employee-job">Data Warehouse Analyst</p>
      </div>
    </div>
  );
};

export default CardProfile;
