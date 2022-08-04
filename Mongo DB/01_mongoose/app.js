const mongoose = require("mongoose");

// establishing connection with the local database
mongoose
  .connect("mongodb://localhost:27017/learn", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log("Coonection Established"))
  .catch((err) => {
    console.log(err);
  });

// defining a schema for the database collection
const userSchema = new mongoose.Schema({
  name: String,
  // we can also add validators such as required or min value and max value
  // name: {
  //   type: String,
  //   required: [true, "Please check your data, no name is specified"],
  // },
  age: Number,
  role: String,
});

// mondelling the created schema and creating a new collection in the database
const User = mongoose.model("User", userSchema);

// const user = new User({
//   name: "Shivansh Jha",
//   age: 21,
//   role: "Frontend Developer",
// });

// user
//   .save()
//   .then(() => console.log("Saved Successfully"))
//   .catch((err) => console.log(err));

// const shishir = new User({
//   name: "Shishir Jha", // simple way
//   age: 21,
//   role: "Full Stack Developer",
// });

// const nisha = new User({
//   name: "Nisha Jha",
//   age: 21,
//   role: "UI Designer",
// });

// const kanak = new User({
//   name: "Kanak Jha",
//   age: 21,
//   role: "Frontend Developer",
// });

// User.insertMany([shishir, nisha, kanak], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully Inserted");
//   }
// }); to insert many things at a time

// searching
// User.find((err, persons) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close(); // to close the database when your work is done
//     persons.forEach((element) => {
//       console.log(element.name);
//     });
//   }
// });

// update
// User.updateOne({filter},{what to update}, callback to get error if any)
User.updateOne({ _id: "neofhoeofbewwobf" }, { name: "Shishir Jha" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Updated");
  }
});

// delete
// User.deleteOne({filter}, callback to get any error occured)
User.deleteOne({ name: "Kanak Jha" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Deleted");
  }
});

// to delete many entries that match the parameter
// User.deleteMany({ filter }, callback);
User.deleteMany({ name: "Kanak Jha" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully Deleted");
  }
});
