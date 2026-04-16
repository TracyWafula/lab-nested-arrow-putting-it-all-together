
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

//Define outer function 
function createLoginTracker(userInfo){

// Initialize login tracker
    let attemptCount = 0; 

// Create arrow fuction to handle login attempts 
    return (passwordAttempt)=>{
    //Increment attempt count on each login attempt
    attemptCount++;
    //Check password matches and attempt count is less than 4
    if(passwordAttempt===userInfo.password && attemptCount<4){
      return `Login successful`;
    }else if(passwordAttempt!==userInfo.password && attemptCount<4){
      return `Attempt ${attemptCount}: Login failed`;
    }else if(passwordAttempt!==userInfo.password && attemptCount===4){
      return `Account locked due to too many failed login attempts`;
    }
    

    }

  }

    





