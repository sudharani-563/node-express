// const express= require('express');
// const app =express();
// const db = require("./db");

// app.use(express.json());
// app.post("/create", (req, res) => {
// 	try {
// 	  const inputs = req.body;
// 	  let users = db.users || [];
// 	  users = [inputs, ...users];
// 	  db.users = users;
// 	  return res.status(201).json({ message: `created user successfully ${inputs.name}` });
// 	} catch (error) {
// 	  return res.status(500).json({ message: `internal server error` });
// 	}
//   });
  
// app.get("/get",(req,res) =>{
//     try {
//         const users = db.users || [];
//         if (users.length < 1) {
//           throw new Error("no-users-found");
//         }
//         return res.status(201).json(users);
//       } catch (error) {
//         if (error.toString().match("no-users-found")) {
//           return res.status(400).json({ message: `No Users Found` });
//         }
//         return res.status(500).json({ message: `internal server error` });
//       }
// });

// app.get("/get/:id", (req, res) => {
// 	try {
// 	  const users = db.users || [];
// 	  const { id } = req.params;
// 	  let user;
// 	  users.forEach((u) => {
// 		if (u.id == id) {
// 		  user = u;
// 		}
// 	  });
// 	  if (user) {
// 		return res.status(201).json(user);
// 	  }
// 	  throw new Error("failed-to-get");
// 	} catch (error) {
// 	  if (error.toString().match("failed-to-get")) {
// 		return res.status(400).json({ message: `failed to get user` });
// 	  }
// 	  return res.status(500).json({ message: `server error` });
// 	}
// });

// app.put("/update/:id", (req, res) => {
// 	try {
// 	  let users = db.users || [];
// 	  const { id } = req.params;
// 	  const inputs = req.body;
// 	  const indexOfUser = users.findIndex((u) => {
// 		return u.id == id;
// 	  });
// 	  if (indexOfUser == -1) {
// 		throw new Error("no-user-found");
// 	  }
// 	  users[indexOfUser] = inputs;
// 	  users[indexOfUser].id = id;
// 	  db.users = users;
// 	  return res.status(201).json({ message: `updated user successfully` });
// 	} catch (error) {
// 	  if (error.toString().match("no-user-found")) {
// 		return res.status(400).json({ message: `no user found` });
// 	  }
// 	  return res.status(500).json({ message: `internal server error` });
// 	}
//   });

//   app.put("/delete/:id", (req, res) => {
// 	try {
// 	  let users = db.users || [];
// 	  const { id } = req.params;
// 	  const indexOfUser = users.findIndex((u) => {
// 		return u.id == id;
// 	  });
// 	  if (indexOfUser == -1) {
// 		throw new Error("no-user-found");
// 	  }
// 	  users.splice(indexOfUser, 1);
// 	  db.users = users;
// 	  return res.status(201).json({ message: `deleted user successfully` });
// 	} catch (error) {
// 	  if (error.toString().match("no-user-found")) {
// 		return res.status(400).json({ message: `no user found` });
// 	  }
// 	  return res.status(500).json({ message: `internal server error` });
// 	}
//   });
// const port = 8800;
//   app.listen(port, () => {
//     console.log(`server running at http://localhost:${port}`);
//   });