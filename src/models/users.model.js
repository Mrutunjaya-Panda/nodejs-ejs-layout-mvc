// Please don't change the pre-written code
// Import the necessary modules here
//i) You have been provided an API 'https://dummyjson.com/users' that contains a users array. The array comprises objects, each detailing user information (e.g., [User Details]).

// ii) Implement the 'userModel' function inside users.model.js to fetch users' details from the provided API using axios.

// Ensure that the function returns only the array of users obtained from the API response, excluding the entire response object.

import axios from "axios";
export const userModel = async () => {
  // Write your code here
    try{
        const response = await axios.get('https://dummyjson.com/users');
        return response.data.users;
    }catch(error){
        console.error("Error fetching users:", error);
        return [];
    }
};
