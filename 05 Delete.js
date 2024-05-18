// Deletes all the documents in the collection
db.inventory.deleteMany({})

//Removes all documents from the inventory collection where the status field equals "A"
db.inventory.deleteMany({ status : "A" })

//Deletes the first document where status is "D"
db.inventory.deleteOne( { status: "D" } )