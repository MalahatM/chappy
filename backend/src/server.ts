import express from "express";
import users from "./routes/users.js";
import channels from "./routes/channels.js";
import messages from "./routes/messages.js";
import auth from "./routes/auth.js"; 
	 

 const app = express();
//middleware to parse json
app.use(express.json());

//routes
 app.use("/api/users", users);
 console.log("Users route loaded"); 
 app.use("/api/channels", channels);
 app.use("/api/messages", messages);
 app.use("/api/auth", auth); 

//for debugging
 app.use((req, res, next) => {
console.log(`Received request: ${req.method} ${req.url}`);
 next();
 });
//start server
const PORT = process.env.PORT ;
 console.log(" Server starting...");
 app.listen(PORT, () => {   console.log(` Server is running on http://localhost:${PORT}`);
     });