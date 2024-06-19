// (async () => {
//     const user = 'Roshan';

//     const promise1 = new Promise((resolve, reject) => {
//         if (user === "Roshan") {
//             resolve([{ fullName: "Roshan Shikhare", age: 10 }])
//         } else {
//             reject({ error: "Invalid user" })
//         }
//     })

//     let DATA

//     promise1.then(res => {
//         console.log("res", res);
//         DATA = res
//     }).catch((err) => {
//         console.log("erro", err);
//     })


//     const data = await promise1
//     DATA = data


//     console.log("My Data is", DATA);
// })()

// https://dummy.restapiexample.com/api/v1/employees

// // xhr | fetch | ajax | jquery