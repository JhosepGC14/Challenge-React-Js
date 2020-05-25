import React from "react";
import style from "./Register.module.css";
import image from "../../../assets/images/image1.png";

const Register = () => {
  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className="col">
          <figure>
            <img className={style.img} src={image} alt="image_login" />
          </figure>
        </div>
        <div className="col">
          <label>Access to Plataform</label>
          <h1>Register</h1>
          <div class="form-group">
            <label htmlFor="">Name Complete:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Name Complete"
            />
            <label htmlFor="">Email Adress:</label>
            <input className="form-control" type="email" placeholder="Email" />
            <label htmlFor="">Password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
            <label htmlFor="">Confirm Password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
