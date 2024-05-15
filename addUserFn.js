let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");


nameEl.addEventListener("blur", function(){
    let nameValEl = nameEl.value;
    if (nameValEl === ""){
        nameErrMsgEl.textContent = "Required*";
    }else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(){
   let emailValEl = emailEl.value;
   if(emailValEl === ""){
       emailErrMsgEl.textContent = "Required*";
   }else {
       emailErrMsgEl.textContent = "";
   }
});

addUserFormEl.addEventListener("submit", function(event){
    event.preventDefault();
})