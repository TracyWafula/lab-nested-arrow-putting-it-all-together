


// module.exports = {
//   ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
// };


//Initialize log in feature with the  object userInfo as a parameter. 

 let userInfo = {
    username:"user1",
    password:"password123"
  }

function createLoginTracker(userInfo){


//   //Initialize login tracker
  let attemptCount = 1; 

//   //Create arrow fuction to handle login attempts 

  let userLogin=(passwordAttempt)=>{

    for (attemptCount; attemptCount<=3 && userInfo.password!==passwordAttempt; attemptCount++){
      const prompt = require('prompt-sync')();
      console.log(`Kindly enter the password`)
      passwordAttempt=prompt("Enter the password: ");

      if(userInfo.password===passwordAttempt){
        console.log("Login successful")
        break;
      }else if(userInfo.password!==passwordAttempt){
        let attempts = 3;
        console.log(`Login failed.You have ${attempts - attemptCount} attempts left`);

        if(attemptCount===3){
          console.log(` Due to ${attemptCount} log in attempts your account is locked`)

        }
        
      }


    } 
    
     
    
  } 

   return userLogin();
}

createLoginTracker(userInfo);

