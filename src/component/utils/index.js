const auth = () => {
    let token = localStorage.getItem('token')
    if (token) return true
    return false
}
export default auth

  // create a config to send the auth token 
export   const config = {
    headers: {
      //   we are finding the token from localstorage 
      "Authorization": localStorage.getItem("token")
    },
  };
  
  
 
 