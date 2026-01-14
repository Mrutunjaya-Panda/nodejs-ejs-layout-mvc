// Please don't change the pre-written code
// Import the necessary modules here
//iii) Implement the 'userController' to render the details of users fetched using userModel using the 'index.ejs' view.

// Render the data in a table format, utilizing your own styling.
// Display only user's name, email, mobile number, gender, city, pincode, and profile image.
// The route provided for rendering the details is app.get("/users", userController).

import { userModel } from "../models/users.model.js";
export const userController = async (req, res) => {
  // Write your code here
    try{
        const users =  await userModel();
        res.render("index", {users});
    }catch(error){
        console.error("Error in userController:", error);
        //res.status(500).send("Internal Server Error");
    }
};
