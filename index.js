const regexForms = {
    firstName: /^[A-Za-z.',_]+(\s*[A-Za-z.',_]+)*$/,
    lastName: /^[A-Za-z']+$/,
    number: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
    salary: /^(?!0+)\d+(\.\d{1,2})?/
}


const validateName = (input,key) => {
    let name = input.value;
    let regex = regexForms[key];
    const result = regex.test(name);
    if( !result ) { 
        if(key === 'firstName') {
            alert(`${key} should have only alphabets and spaces`);
        } else {
            alert(`${key} should have only alphabets in single word`);
        }    
    }
}

const validateMobile = (input) => {
    let mobileNumber = input.value;
    const result = regexForms['number'].test(mobileNumber);
    if(!result) {
        alert('Invalid mobile number');
    }
}

const validateSalary = (input) => {
    let salary = input.value;
    const result = regexForms['salary'].test(salary);
    if(!result) {
        alert('Enter salary format in digits round to 2 decimal places');
    }
}

const leapYear = (year) => {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

$(function(){
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    let day;
    const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    const days = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(month === 1){
        if( leapYear(year)){
            day = days[month]+1;
        } else {
            day = days[month];
        }
    } else {
        day = days[month];
    }

    let x = `<option> 1st of ${months[month]}</option><option> 2nd of ${months[month]}</option><option> 3rd of ${months[month]}</option>`;

    for(i=4; i<= day; i++) {
        x += `<option>${i}th of ${months[month]}</option>`
    }
    $('#date').append(x);
});
