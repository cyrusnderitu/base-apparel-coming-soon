const form = document.querySelector('.form_input')
const email = document.getElementById('apparel_email')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const emailVal = email.value
    if(!validateEmail(emailVal)){
        form.classList.add('error')
    }else{
        const errorMsg = document.querySelector('.error_msg')
        errorMsg.innerText = 'Succesfuly submitted a valid Email'
        errorMsg.style.color = 'green'
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

