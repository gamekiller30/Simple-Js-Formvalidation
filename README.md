Simple-Js-Formvalidation
![form-validation](https://github.com/gamekiller30/Simple-Js-Formvalidation/assets/85796998/cda37501-a63b-49ca-961e-bd5d529fedbe)

How to use?

Import the Library into your Project like so: 

if you have it in same dir:

import {MinLength, CheckMail, CheckPassword, CheckPass2} from "/validate.js";

in different dir:

import {MinLength, CheckMail, CheckPassword, CheckPass2} from "./YOURDIRECTORY/validate.js";

How to call a Function?


Four Functions to call: MinLength() , CheckMail() , CheckPassword() , CheckPassword2()


The User has to input n amount of characters

MinLength(yourtargetinput , appendarea for error code, placeholder value of your input, length input needs);

The User has to input a certain character into his input

CheckMail(yourtargetinput,appendarea for error code, placeholder value of your input, character user needs to input);


The User has to input n amount of characters into Password Field

CheckPassword(yourtargetinput , appendarea for error code, placeholder value of your input, length input needs);


 The User has to input n amount of characters into Password Field

CheckPassword2(yourtargetinput,placeholder value of your input, input value of the input you want to check the password with,  appendarea for error code, input you want to check if the password is matching);


 Example Calls:

Each Function returns either true or false

namecheck =  MinLength(firstinput, error_sec[0],"First Name", 10); 

 lastname = MinLength(lastinput, error_sec[1],"Last Name", 15);

 mailcheck =  CheckMail(emailinput, error_sec[2], "E-mail", "@");

 phonecheck = MinLength(phoneinput, error_sec[3], "Phone Number", 12);

 password1check = CheckPassword(pswd_inp, error_sec[4], "Password", 12);

 password2check = CheckPass2(confirminput, "Confirm Password",  pswd_inp.value, error_sec[4], pswd_inp);
