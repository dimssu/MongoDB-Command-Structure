db.inventory.find() - //Fetch all data
db.inventory.find({}) - //Fetch all data
db.inventory.find({qty:90})

db.inventory.find( { status: { $in: [ "A", "D" ] } } )

//AND
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

//OR
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

db.inventory.findOne( { status: { $in: [ "A", "D" ] } } )
