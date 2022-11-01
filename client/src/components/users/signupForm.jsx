import React, { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/api/v1/users/signup", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("Account created successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="number"
          value={passwordConfirm}
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <button type="submit">Create Account</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default SignupForm;