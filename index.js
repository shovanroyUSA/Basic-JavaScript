// Part 1: Callbacks
function getUserData(userId, callback) {
    setTimeout(() => {
      const userData = { name: 'Shovan', email: 'shovan_bd@yahoo.com' };
      if (userId === 123) {
        callback(null, userData); // Call the callback with user data if found
      } else {
        callback('User not found'); // Call the callback with an error message if not found
      }
    }, 3000);
  }
  
  function handleUserDataCallback(error, data) {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('User Data:', data);
    }
  }
  
  getUserData(123, handleUserDataCallback); // Simulate fetching user data
  
  // Part 2: Promises
  function getUserDataPromise(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userData = { name: 'Shovan', email: 'shovan_bd@yahoo.com' };
        if (userId === 123) {
          resolve(userData); // Resolve the Promise with user data if found
        } else {
          reject('User not found'); // Reject the Promise with an error message if not found
        }
      }, 3000);
    });
  }
  
  getUserDataPromise(123)
    .then((data) => {
      console.log('User Data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  // Part 3: Error Handling
  function getUserDataWithCustomError(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId < 0) {
          reject(new Error('Invalid user ID')); // Reject the Promise with a custom error if the user ID is negative
        } else {
          const userData = { name: 'Shovan', email: 'shovan_bd@yahoo.com' };
          resolve(userData);
        }
      }, 3000);
    });
  }
  
  getUserDataWithCustomError(-1)
    .then((data) => {
      console.log('User Data:', data);
    })
    .catch((error) => {
      console.error('Custom Error:', error.message);
    });
  
  // Async/Await
  async function getUserDataAsync(userId) {
    try {
      const userData = await getUserDataWithCustomError(userId);
      console.log('User Data:', userData);
    } catch (error) {
      console.error('Custom Error:', error.message);
    }
  }
  
  getUserDataAsync(123);
  getUserDataAsync(-1);
  