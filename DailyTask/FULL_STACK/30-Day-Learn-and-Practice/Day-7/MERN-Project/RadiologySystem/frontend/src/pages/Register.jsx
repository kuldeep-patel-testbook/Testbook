import { useState } from "react";
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "doctor",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/auth/register', formData);
      navigate("/login");
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input mb-4"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input mb-4"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input mb-4"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          className="input mb-4"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="doctor">Doctor</option>
          <option value="radiologist">Radiologist</option>
          <option value="admin">Admin</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
