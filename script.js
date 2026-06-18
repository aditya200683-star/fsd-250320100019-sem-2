<<<<<<< HEAD
function simpleInterest() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;

    principal = Number(principal);
    rate = Number(rate);
    time = Number(time);

    let calculate = (principal * rate * time) / 100;

    document.getElementById("answer").innerHTML = "Your answer: " + calculate;
    console.log(calculate);
}
=======
console.log("Hello from node.js")
>>>>>>> ccba8c1 (React)
