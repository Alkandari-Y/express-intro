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
    },
    {
      id: 2,
      name: "The Hen Bag Handbag",
      slug: "the-hen-bag-handbag",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1571683417-rubber-chicken-purse-1571683378.jpg",
      description: "Is that the latest Hermès bag straight off the runway? No, it's a rubber chicken purse.",
      color: "yellow",
      quantity: 9,
      price:24
    },
    {
      id:3,
      name: "Pet Chicken Helmet",
      slug: "pet-chicken-helmet",
      image: "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHc9611807ce8e45959f2b83563d341239r.jpg",
      description: "Prevent the chicken from smash and protect the chicken's head.",
      color: "green",
      quantity: 2,
      price:2
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
//Writing Obj to file with relative path
// try {
//     fs.writeFileSync('./test.txt', `${JSON.stringify(d)}`, 'utf-8')
//     console.log('done')
//   } catch (err) {
//     console.error(err)
//   }

//Appending Obj to file with relative path with, not merging the obj with new data.... needs new line or merge

fs.appendFile('./test.txt', JSON.stringify(d2), (err) => {
    if(err) {
        console.log('done')
    }
})
  


// const n_obj = {
//     id:4,
//     name: "Pet Chicken Helmet",
//     slug: "pet-chicken-helmet",
//     image: "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHc9611807ce8e45959f2b83563d341239r.jpg",
//     description: "Prevent the chicken from smash and protect the chicken's head.",
//     color: "green",
//     quantity: 2,
//     price:2
// }

// fs.readFile('test.txt', function (err, data) {
//     let json = JSON.parse(data)
//     json.push(n_obj)

//     fs.writeFile('test.txt', JSON.stringify(json))
// })

