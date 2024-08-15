let userInput = document.getElementById("date");
const btn = document.querySelector(".btn");
const result = document.getElementById("results");

btn.addEventListener("click", ()=>{
    if(userInput.value){
        const bd = new Date(userInput.value);
        const birthYear = bd.getFullYear();
        const birthMonth = bd.getMonth() + 1;
        const birthDay = bd.getDate();
        
        const diffs = calculateDiff(birthDay, birthMonth, birthYear);
        
        showDiff(diffs.yearDiff, diffs.monthDiff, diffs.dayDiff);
    }else{
        result.innerHTML = "Please select a date.";
    }
})


function calculateDiff(birthDay, birthMonth, birthYear){
    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    const thisDay = today.getDate();

    let yearDiff = thisYear - birthYear;
    let monthDiff = thisMonth - birthMonth;
    let dayDiff = Math.abs(thisDay - birthDay);

    if(monthDiff < 0){
        yearDiff--;
        monthDiff = Math.abs(monthDiff);
    }

    return{
        yearDiff, monthDiff, dayDiff
    }
}

function showDiff(yearDiff, monthDiff, dayDiff){
    const text = `You are ${yearDiff} years, ${monthDiff} months and ${dayDiff} days old.`;
    result.innerHTML = text;
}








