const submitBtn = document.getElementById("submit-btn");

const validate = (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  const emailIsValid = email1=>{
      return /^[^\s@]+@[^\s@]+\.[^s@]+$/.test(email);
  }

  if (email.value === "") {
    alert("Please provide a valid email");
    email.focus();
    return false;
  }
  return true;
};

submitBtn.addEventListener('click', validate);
