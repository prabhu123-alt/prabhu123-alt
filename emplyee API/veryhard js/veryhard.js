// const array = [4, 8, 6, 3, 7, 9, 8, 2, 4, 5, 6, 8, 52, 41, 2];
// console.log(array);

// function checkEvenOdd() {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             console.log( array[i],"even number");
//         } else {
//             console.log( array[i],"odd number");
//         }
//     }
// }

// checkEvenOdd();
// const result = getNotesDistribution([
//     {
//         "name": "Steve",
//         "notes": [5, 5, 3, -1, 6]
//     },
//     {
//         "name": "John",
//         "notes": [3, 2, 5, ,5,0, -3]
//     }
// ]);
// function getNotesDistribution(students) {
//     let notesCount = {};
//     students.forEach(student => {
//         student.notes.forEach(note => {
//             if (notesCount.hasOwnProperty(note)) {
//                 notesCount[note]++;
//             } else {
//                 notesCount[note] = 1;
//             }
//         });
//     });

//     return notesCount;
// }

// // Test case


// console.log(result);
// const array = [1, 2, 3, 4, 5];

// array.forEach(bll => {
//     console.log(bll);
// });

// this method to use chek a to array elment are same or diffrent

// const array1 = [1, 8, 5, 7, 9, 5, 7, 1, 6, 5];
// const array2 = [1, 8, 5, 7, 9, 5, 7, 1, 6, 5];

// function doesTriangleFit() {
//     const total=array1.length - array2.length;
//     for (let i = 0; i <=total ; i++) {
//         let result = true;
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i+j] !== array2[j]) {
//                 result = false;
//                 break;
//             }
//         }
//         if (result) {
//             return true;
//         }
//     }
//     return false;
// }

// const triangle = doesTriangleFit();
// console.log(triangle);


// this API call using xml type{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// const click = document.getElementById("get-btn");
// function getWeatherData() {
//     const input = document.getElementById("get-user").value;

//     const apiUrl = `https://jsonplaceholder.typicode.com/todos?id=${input}`;
//     console.log("you are clicked button", input);

//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', apiUrl,true);

//     xhr.onprogress = function () {
//         console.log("on progress");
//     }

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             let data = JSON.parse(xhr.responseText);

//             let received = document.getElementById("recived-data");
//             let str = '';
//             if (data.length === 0) {
//                 received.innerHTML = `<div>Error: User ID ${input} not found</div>`;
//                 received.style.color = "white";
//             } else {
//                 data.forEach(user => {
//                     str += `<div>userID:${user.userId}<br>Id:-${user.id}<br>title:-${user.title}<br>completed:-${user.completed}</div>`;
//                 });
//                 received.innerHTML = str;
//                 received.style.color = "white";
//             }
//             received.style.display = "block";

//         }
//         else {
//             console.error('Request failed. Status:', xhr.status);

//         }
//     }
//     xhr.send();

// }


// click.addEventListener("click", getWeatherData);

// this API call using promise function(((((((((((((((((((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))))))))))))))))))


// const click = document.getElementById("get-btn");

// function getWeatherData() {
//     const input = document.getElementById("get-user").value;
//     const apiUrl = `https://jsonplaceholder.typicode.com/todos?id=${input}`;

//     fetch(apiUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             let received = document.getElementById("recived-data");
//             let str = '';

//             if (data.length === 0) {
//                 received.innerHTML = `<div>Error: User ID ${input} not found</div>`;
//                 received.style.color = "white";
//             } else {
//                 data.forEach(user => {
//                     str += `<div>userID:${user.userId}<br>Id:-${user.id}<br>title:-${user.title}<br>completed:-${user.completed}</div>`;
//                 });
//                 received.innerHTML = str;
//                 received.style.color = "white";
//             }
//             received.style.display = "block";
//         })
//         .catch(error => {
//             console.error('Fetch Error:', error);
//         });
// }

// click.addEventListener("click", getWeatherData);

// practies of veryhard component[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]][[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]


// array set in array zero  

// const array=[4,0,8,5,4,6,0,0,5,0]
// console.log(array);

// function nove() {
//     let zeros=0;

//     for(i=0;i<array.length;i++){

//         if(array[i]===0){
//            array.splice(i,1);
//            zeros++;
//            i--;
//         }

//     }

//     while (zeros > 0) {
//         array.push(0); 
//         zeros--; 
//     }
//     return array;
// }
// var moved=nove();
// console.log(moved);

// const fruit = [
//     { name: "grapes", quantity: 1 },
//     { name: "banana", quantity: 1 },
//     { name: "apple", quantity: 1 }
// ];

// function splitBunches(fruits) {
//     let result = [];

//     fruits.forEach(fruit => {
//         for (let i = 0; i < fruit.quantity; i++) {
//             result.push({ name: fruit.name, quantity: 14 });
//         }
//     });

//     return result;
// }

// // Example usage:
// const splitFruits = splitBunches(fruit);
// console.log(splitFruits);
// mehtod you are use enter a key and give value [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// const namelang = [
//     { 1: "css" },
//     { 2: "swift" },
//     { 3: "php" },
//     { 4: "c#" },
//     { 5: "javascript" },
//     { 6: "ruby" },
//     { 7: "react.js" },
//     { 8: "python" },
//     { 9: "c++" },
//     { 10: "java" },
// ]
// console.log(namelang);

// function getLanguage(number) {
//     for ( let i = 0; i < namelang.length; i++) {
//         let langObj = namelang[i];
//         // console.log(langObj);
//         let key = Object.keys(langObj)[0];
//         // console.log(key);

//         if (parseInt(key) === number) {
//             return langObj[key]; 
//     }
//     }
//     return "language not fond";
// }
// console.log(getLanguage(8));
var clubs= [
    {
        name: "Manchester United",
        wins: 30,
        loss: 3,
        draws: 5,
        scored: 88,
        conceded: 20,
    },
    {
        name: "Arsenal",
        wins:82,
        loss: 6,
        draws: 8,
        scored: 98,
        conceded: 29,
    },
    {
        name: "Chelsea",
        wins: 2,
        loss: 8,
        draws: 8,
        scored: 98,
        conceded: 29,
    },
];

function champions(clubs) {
    function calculatePoints(team) {
        return 3 * team.wins + 0 * team.loss + 1 * team.draws;
    }
    function calculateGoalDifference(team) {
        return team.scored - team.conceded;
    }
        let maxPoints = 0;
        let maxGoalDifference = 0;
        let champion = '';

    clubs.forEach(team => {
        let points = calculatePoints(team);
        let goalDifference = calculateGoalDifference(team);
        // Determine if current team has higher points or same points with better goal difference
        if (points > maxPoints || (points === maxPoints && goalDifference > maxGoalDifference)) {
            maxPoints = points;
            maxGoalDifference = goalDifference;
            champion = team.name;
         

        }
    });
    return champion;
};
console.log(champions(clubs));
// Return the team name with the highest points and/or goal difference
