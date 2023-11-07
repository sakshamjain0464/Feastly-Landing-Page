// Taking Bookings
const custName = document.querySelector("#nameInput");
const bookDate = document.querySelector("#dateInput");
const bookTime = document.querySelector("#timeInput");
const guestNo = document.querySelector("#guestInput");
const submit = document.querySelector("#goBtn");
let dateObj = new Date();

function createDate(){
    let date = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    if(date<10){
        date = '0' + date;
    }
    if(month<10){
        month = '0' + month;
    }
    return `${year}-${month}-${date}`;
}

function createTime(){
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    if(hours<10){
        hours = '0' + hours;
    }
    if(minutes<10){
        minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
}

async function sendData(data){
    const api = "https://sheetdb.io/api/v1/zllh1ai30cutn?sheet=Booking";
    await fetch(api, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [data]
        })
    })
  .then((response) => response.json())
  .then((data) => alert(`Booking Successful for ${custName.value}`))
  .catch((error) => alert("An Error Occurred, Kindly Try after some time"));
  setDefault();
}

function setDefault(){
    custName.value = '';
    bookDate.value = createDate();
    bookTime.value = createTime();
}

setDefault()

let timeChange = setInterval(() => {
    bookDate.value = createDate();
    bookTime.value = createTime();
}, 360000);

submit.addEventListener('click', ()=>{
    let bookingDateObj = new Date(bookDate.value);
    let bookingTimeObj = moment(bookTime.value, "hh:mm");
    if(custName.value == ''){
        alert("Kindly Enter Booking Name");
    }
    else if(bookingDateObj.getFullYear() < dateObj.getFullYear()){
        alert("Year cannot be less than current year");
    }
    else if(bookingDateObj.getFullYear() == dateObj.getFullYear() && bookingDateObj.getMonth() < dateObj.getMonth()){
        alert("Month cannot be less than current Month");
    }
    else if(bookingDateObj.getFullYear() == dateObj.getFullYear() && bookingDateObj.getMonth() == dateObj.getMonth() && bookingDateObj.getDate() < dateObj.getDate()){
        alert("Previous date entered");
    }
    else if(bookingDateObj.getFullYear() == dateObj.getFullYear() && bookingDateObj.getMonth() == dateObj.getMonth() && bookingDateObj.getDate() == dateObj.getDate() && bookingTimeObj.hour() < dateObj.getHours()+3){
        alert("Slot not available");
    }
    else{
        let data = {
            'B_ID': "INCREMENT",
            'Customer_Name': `${custName.value}`,
            'Booking_Date': `${bookingDateObj.getDate()}/${bookingDateObj.getMonth()+1}/${bookingDateObj.getFullYear()}`,
            'Booking_Time': `${bookingTimeObj.hour()}:${bookingTimeObj.minute()}`,
            'People': `${guestNo.value}`
        }
        sendData(data);
    }
});

// Submitting Emails
const submitEmail = document.querySelector(".email-input > button");
const emailInput = document.querySelector(".email-input > input");
console.log(submitEmail)

async function sendEmail(data){
    const api = "https://sheetdb.io/api/v1/zllh1ai30cutn?sheet=e-mail";
    await fetch(api, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [data]
        })
    })
    .then((response) => response.json())
    .then((data) => alert("Email Submitted!"))
    .catch((error) => alert("An Error Occurred, Kindly Try after some time"));
    emailInput.value = "";
}

submitEmail.addEventListener('click', () => {
    if(emailInput.value == ''){
        alert("Enter your E-mail First");
    }
    else{
        let data = {
            'SNO': "INCREMENT",
            'Email': `${emailInput.value}`,
        }
        sendEmail(data);
    }
})