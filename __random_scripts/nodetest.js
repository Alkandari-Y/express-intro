const os = require('os')
const fs = require('fs')

const d = [
    {
      id: 1,
      name: "Chicken Harness and Leash",
      slug: "chicken-harness-and-leash",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1565295718-41-Z274tCDL.jpg",
      description: "This leash boasts a a durable, breathable leash that won't hurt your clucking friend.",
      color: "red",
      quantity: 4,
      price:9
    }
]

const d2 =     {
    "id": 4,
    "name": "Chicken Harness and Leash",
    "slug": "chicken-harness-and-leash",
    "image": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1565295718-41-Z274tCDL.jpg",
    "description": "This leash boasts a a durable, breathable leash that won't hurt your clucking friend.",
    "color": "red",
    "quantity": 4,
    "price": 9
}
// Writing Obj to file with relative path
// try {
//     fs.writeFileSync('./test.txt', `${JSON.stringify(d)}`, 'utf-8')
//     console.log('done')
//   } catch (err) {
//     console.error(err)
//   }

//Appending Obj to file with relative path with, not merging the obj with new data.... needs new line or merge

// fs.appendFile('./test.txt', JSON.stringify(d2), (err) => {
//     if(err) {
//         console.log('done')
//     }
// })

// const fileWrite = (path, data) => {
//     try {
//         fs.writeFileSync(path, JSON.stringify(data), 'utf-8')
//         console.log('done')
//     } catch (err) {
//         console.error(err)
//     }
// }


// fs.readFile('./test.txt', function (err, data) {
//     let json = JSON.parse(data)
//     json.push(d2)
//     fileWrite('./test.txt', json)
// })

