function getUser(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: username, type: "Premium" });
    }, 1500);
  });
}

function checkSubscription(user) {
  return new Promise((resolve, reject) => {
    if (user.type === "Premium") {
      resolve("Access Granted to Netflix");
    } else {
      reject("Please Subscribe");
    }
  });
}

async function authenticate(username) {
  try {
    console.log(`Authenticating user: ${username}`);

    const user = await getUser(username);
    console.log("User found:", user);

    const result = await checkSubscription(user);
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

authenticate("Rahul");
