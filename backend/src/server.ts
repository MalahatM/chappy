import express from "express";
     import users from "./routes/users.js";
     import channels from "./routes/channels.js";
     import messages from "./routes/messages.js";
     import auth from "./routes/auth.js"; 




     const app = express();

     app.use(express.json());


     app.use("/api/users", users);
     console.log("Users route loaded"); 
     app.use("/api/channels", channels);
     app.use("/api/messages", messages);
     app.use("/api/auth", auth); 


     app.use((req, res, next) => {
       console.log(`Received request: ${req.method} ${req.url}`);
       next();
     });

     const PORT = process.env.PORT || 3000;
     console.log(" Server starting...");
     app.listen(PORT, () => {
       console.log(` Server is running on http://localhost:${PORT}`);
     });