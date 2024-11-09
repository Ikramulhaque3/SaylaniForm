

function buttonColor(){
    const btn = document.getElementById("regbtn");
    btn.style.backgroundColor = "white";
    btn.style.color = "Green";
}


function submitdata(){
    let country = document.getElementById("country");
    let city = document.getElementById("city");
    let course =  document.getElementById("course");
    let computer =  document.getElementById("computer");
    let name =  document.getElementById("name");
    let fname =  document.getElementById("fname");
    let email =  document.getElementById("email");
    let phone =  document.getElementById("phone");
    let dob =  document.getElementById("dob");
    let gender =  document.getElementById("gender");
    let cnic =  document.getElementById("cnic");
    let fcnic =  document.getElementById("fcnic");
    let address =  document.getElementById("address");
    let qualification =  document.getElementById("qualification");
    let laptop =  document.getElementById("laptop");




    console.log(`Country: ${country.value}`);
    console.log(`City: ${city.value}`);
    console.log(`Course: ${course.value}`);
    console.log(`Computer: ${computer.value}`);
    console.log(`Name: ${name.value}`);
    console.log(`Father Name: ${fname.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Phone: ${phone.value}`);
    console.log(`Date of Birth: ${dob.value}`);
    console.log(`Gender: ${gender.value}`);
    console.log(`CNIC: ${cnic.value}`);
    console.log(`Father CNIC: ${fcnic.value}`);
    console.log(`Address: ${address.value}`);
    console.log(`Qualification: ${qualification.value}`);
    console.log(`Do You have a Laptop: ${laptop.value}`);



}