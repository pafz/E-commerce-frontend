import React, { useState } from 'react';

const Register = () => {
  const initialState = {
    name: '',
    email: '',
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const clearForm = () => {
    setData(initialState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('sending data...' + data.name + ' ' + data.email);
    clearForm();
  };
  //TODO: DUUUDA
  //type='radio' How to do?
  //is role a hidden type?
  //vlidations?
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
      />
      <input
        type="date"
        placeholder="bday"
        value={data.bday}
        onChange={handleInputChange}
        name="bday"
      />
      <input
        type="radio"
        placeholder="gender"
        value={data.gender}
        onChange={handleInputChange}
        name="gender"
      />
      <input
        type="email"
        value={data.email}
        placeholder="email"
        onChange={handleInputChange}
        name="email"
      />
      <input
        type="password"
        value={data.password}
        placeholder="password"
        onChange={handleInputChange}
        name="password"
      />
      <input
        type="hidden"
        value={data.role}
        placeholder="role"
        onChange={handleInputChange}
        name="role"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Register;
