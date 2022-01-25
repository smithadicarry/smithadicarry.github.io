console.log("hello world")
function thankform(){
    // const fullname = document.getElementById("fullname").value;
    // const email = document.getElementById("email").value;
    // const textarea = document.getElementById("textarea").value;
    // if (fullname !== "" && email !== "" && textarea !== ""){
    setTimeout ( () => {
    const form = document.querySelector(".forminput");
    form.style.visibility = "hidden";
    },2000)
    setTimeout ( () => {
        const contactthank = document.querySelector("#contactthank");
        console.log(contactthank)
        contactthank.style.display = "block";
        },2000)
    setTimeout ( () => {
        const form = document.querySelector(".forminput");
        const contactthank = document.querySelector("#contactthank");
        contactthank.style.display = "none";
        form.style.visibility = "visible";
        },5000)

    }
    // else{
    //     console.log("Bye there")
    // }
    // }
document.getElementById("submit").addEventListener("click", thankform);