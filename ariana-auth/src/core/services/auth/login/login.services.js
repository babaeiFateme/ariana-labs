
import API_ENDPOINTS from '../../../../core/services/constants/routes.constants'

// const loginServices = async () => {
//     const response = await fetch(API_ENDPOINTS.login);

//     if (!response.ok) {
//         let message = "Failed to fetch users";

//         // Try to get a detailed message from the server, if available
//         try {
//             const errorData = await response.json();
//             if (errorData?.message) {
//                 message = errorData.message;
//             }
//         } catch (_) {
//             // Ignore JSON parsing errors
//         }

//         throw new Error(message);
//     }

//     return response.json();
// };

// export default loginServices;


const loginServices = async () => {
  const data={
    username:"ali",
    password:'03745893475'
  }
    const response = await fetch(API_ENDPOINTS.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      let message = "Login failed";
  
      try {
        const errorData = await response.json();
        if (errorData?.message) {
          message = errorData.message;
        }
      } catch (_) {}
  
      throw new Error(message);
    }
  
    return response.json(); // response might include a token or user info
  };
  
  export default loginServices;
  