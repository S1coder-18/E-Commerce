import { useContext, useState } from "react";
import "../PagesStyle/LoginSignup.css";
import { ShopContext } from "../Context/ShopContext";
import { toast } from "react-toastify";

function LoginSignup() {
  const { signUp } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const validate = () => {
    if(formData.name.trim() === "") {
      toast.error("Name must be entered!.");
      return false;
    }

    if (formData.email.trim() === "") {
      toast.error("Email must be entered");
      return false;
    }

    if (formData.password.trim().length === 0) {
      toast.error("Password must be entered!.");
      return false;
    }
    if (formData.password.trim().length < 6) {
      toast.error("Password should contain atleast 6 characters!.");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    if (validate()) {
      signUp(formData);
      toast.success("signed up successfully");
      setFormData({ name: "", email: "", password: "" });
    }
  };
  return (
    <>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fileds">
            <input
              type="name"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your E-Mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleSubmit}>Continue</button>
          <p className="loginsignup-login">
            Already have an account ? <span>Login Here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;
