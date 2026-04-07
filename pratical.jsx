function largnofinder() {
    let numberCount = document.getElementById("numbercount").value;
    numberCount = Number(numberCount);

    if (numberCount <= 0 || isNaN(numberCount)) {
        alert("Please enter a valid number ");
        return;
    }

    let largestnumber = 0;

    for (let i = 1; i <= numberCount; i++) {
        let no = prompt("Enter number " + i);
        no = Number(no);

        if (isNaN(no) || no < 0) {
            alert("Please enter valid marks for subject " + i);
            return;
        }
        if (largestnumber<no){
            largestnumber=no;
        }

    }
    document.getElementById("largest no ").innerHTML =
        "largest no " + largestnumber ;
}