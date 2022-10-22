import dbConnect from "./dbConnect.js";

export async function addNewClothes(req, res) {
    const NewClothing = req.body
    const db = dbConnect()
    await db.collection('clothes').add(NewClothing)
        .catch(err => {
            res.status(500)
            return
        })
    res.status(201).send({ message: "New clothing added" })
}

//   export function getAllCoffees(req, res) {
//     const db = dbConnect()
//     db.collection('coffees').get()
//     .then(collection => {
//       const coffeeList = collection.docs.map(doc => doc.data())
//       res.send(coffeeList)
//     })
//     .catch(err => res.status(500).send({ success: false, message: err }))
// }