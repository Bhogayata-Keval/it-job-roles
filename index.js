const data = [
            {
                "role": "Developer",
                "Description": "Is a person who writes code to build an application, using a suitable programming language !"
            },
            {
                "role": "UI / UX Designer",
                "Description": "Is a person who creates design templates for better visuals of the software / product !"
            },
            {
                "role": "Tester",
                "Description": "Is a person who tests a software / product with different inputs and finds out the bug before the real customer !"
            },
         ];


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fetchRandomJobRole() {
    const index = (randomIntFromInterval(1, data.length)) - 1;
    return data[index];
};

function showRandomJobRole() {
    console.log("Developer:\nIs a person who writes code to build an application, using a suitable programming language !")
};

module.exports = {
    showRandomJobRole,
    fetchRandomJobRole
}    

