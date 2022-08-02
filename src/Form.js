import React, { useState } from "react";

// Maintaning State

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("Select an option");
  const [answer, setAnswer] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState({
    firstNameError: "",
    lastNameError: "",
    bioError: "",
  });
  const [isdisabled, setIsdisabled] = useState(true);

  // Validating form data

  const handleInput = (e) => {
    var name = e.target.name;
    console.log(name)
    var value = e.target.value;

    // Validating first name
    
    if (name === "first-name") {
      if ((value.length < 3 || value.length > 15) && value.length > 0) {
        setError({
          ...error,
          firstNameError: "Length should be between 3 to 15 letters",
        });
      } else {
        setError({ ...error, firstNameError: "" });
      }
    }
    // Validating last name

    if (name === "last-name") {
      if ((value.length < 3 || value.length > 15) && value.length > 0) {
        setError({
          ...error,
          lastNameError: "Length should be between 3 to 15 letters",
        });
      } else {
        setError({ ...error, lastNameError: "" });
      }

    
    }

    // Bio Validation

    if (name === "bio") {
      if (value.length < 15 && value.length > 0) {
        setError({
          ...error,
          bioError: "length should be greater than 15 characters.",
        });
      } else {
        setError({ ...error, bioError: "" });
      }
    }

    if ((
        error.firstNameError === "" &&
        error.lastNameError === "" &&
        error.bioError === "" ) &&
        (firstName.length > 0 &&
        lastName.length > 0 &&
        bio.length > 0 &&
        email.length > 0 &&
        answer.length > 0)
        ) {
        setIsdisabled(false);
        }
  };
  //   handling cancel button

  const handleCancel = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setQuestion("");
    setAnswer("");
    setBio("");
  };

  //   handling Submit button

  const handleSubmit = (e) => {
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
    console.log("Email:", email);
    console.log("SecurityQuestion:", question);
    console.log("SecurityAnswer:", answer);
    console.log("Bio:", bio);
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <form action="" className="form-control" onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <span>
            <input
              type="text"
              name="first-name"
              value={firstName}
              placeholder="Enter Your First Name"
              minLength="3"
              maxLength="15"
              onChange={(e) => setFirstName(e.target.value)}
              onKeyUp={handleInput}
            />
          </span>
        </label>
        <br />
        <p>{error.firstNameError}</p>

        <label>
          Last Name:{" "}
          <span>
            <input
              type="text"
              name="last-name"
              value={lastName}
              placeholder="Enter Your Last Name"
              minLength="3"
              maxLength="15"
              onChange={(e) => setLastName(e.target.value)}
              onKeyUp={handleInput}
            />
          </span>
        </label>
        <br />
        <p>{error.lastNameError}</p>

        <label>
          Email :{" "}
          <span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </span>
        </label>
        <br />

        <label>Security Question: </label>
        <span>
          <select
            id="security-question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          >
            <option value="Select an option">{question}</option>
            <option value="What was the name of your first pet?">
              What was the name of your first pet?
            </option>
            <option value="What is your mother name?">
              What is your mother name?
            </option>            
            <option value="What was the name of your first school?">
              What was the name of your first school?
            </option>
          </select>
          <br />
          <br />

          <label>
            Security Answer :{" "}
            <span>
              <input
                type="text"
                name="answer"
                value={answer}
                placeholder="Answer"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </span>
          </label>
          <br />
          <br />
          <label>
            Bio :
            <span>
              <textarea
                id="bio"
                name="bio"
                value={bio}
                placeholder="Write about yourself"
                onChange={(e) => setBio(e.target.value)}
                onKeyUp={handleInput}
                minLength="15"
                rows="4"
                cols="50"
              />
            </span>
          </label>
          <p>{error.bioError}</p>
          <br />
        </span>

        <button type="submit"
          className="btn btn-primary"
          disabled={isdisabled}>
          Submit
        </button>
        <button type="button" className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;