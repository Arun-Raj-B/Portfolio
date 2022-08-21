    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    
    let error=document.getElementsByClassName("error");

function validate()
{

    if(username.value == "")
    {
       error[0].innerHTML = "You can't leave this section blank";
       document.submit-form.username.focus();
       return false;
    }
    else if(!isNaN(username.value))
    {
        error[0].innerHTML = "You cannot enter numbers in this section";
        document.submit-form.username.focus();
        return false;
    }
    else
    {
        error[0].innerHTML = "";
    }

    if(email.value == "")
    {
       error[1].innerHTML = "You can't leave this section blank";
       document.submit-form.email.focus();
       return false;
    }
    else
    {
        error[1].innerHTML = "";
    }

    if(subject.value == "")
    {
       error[2].innerHTML = "You can't leave this section blank";
       document.submit-form.subject.focus();
       return false;
    }
    else
    {
        error[2].innerHTML = "";
    }

    if(message.value == "")
    {
       error[3].innerHTML = "You can't leave this section blank";
       document.submit-form.message.focus();
       return false;
    }
    else
    {
        error[3].innerHTML = "";
    }
    
    return true;
}















































// const form = document.getElementById('submit-form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const subject = document.getElementById('subject');
// const message = document.getElementById('message');


// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element,message) =>
// {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }

// const setSuccess = element =>
// {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () =>
// {
//     const usernameValue = username.value.trim(); 
//     const emailValue = email.value.trim(); 
//     const subjectValue = subject.value.trim(); 
//     const messageValue = message.value.trim(); 


//     //for username
//     if(usernameValue === '')
//     {
//        setError(username, 'Username is required');
//     }
//     else if (!NaN(usernameValue))
//     {
//         setError(username, 'Enter a valid name');
//     }
//     else
//     {
//        setSuccess(username);
//     }

//     //for email
//     if(emailValue === '')
//     {
//         setError(email,'Email is required');
//     }
//     else if(!isValidEmail(emailValue))
//     {
//          setError(email, 'Provide a valid email address');
//     }
//     else
//     {
//         setSuccess(email);
//     }

//     //for subject
//     if(subjectValue === '')
//     {
//         setError(subject, "The field cannot be left blank");
//     }
//     else
//     {
//         setSuccess(subject);
//     }

//     //for message
//     if(messageValue === '')
//     {
//         setError(message, "The field cannot be left blank");
//     }
//     else
//     {
//         setSuccess(message);
//     }
// };