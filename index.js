function formatName(firstName, lastName) {
    return firstName +" "+ lastName ;
}
function getGreeting(timeofDay) {
    if(timeofDay === "morning") {
        return "Good morning" ;
    }
    else if (timeofDay === "afternoon") {
        return "Good afternoon" ;
    }
    else if (timeofDay === "evening") {
          return "Good evening" ; 
    }
}
function createGreeting(firstName, lastName, timeofDay) {
    let fullName = formatName(firstName,lastName) ;
    let greeting = getGreeting(timeofDay);
    return greeting +", "+ fullName ;
}
console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));