function checkOrderStatus(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof orderId === "number") {
        resolve("Order Shipped");
      } else {
        reject("Invalid Order ID");
      }
    }, 1000);
  });
}

async function displayOrderStatus() {
  try {
    console.log("Checking order status for order ID: 12345");
    const result1 = await checkOrderStatus(12345);
    console.log("Result:", result1);

    console.log("\nChecking order status for order ID: 'ABC123'");
    const result2 = await checkOrderStatus("ABC123");
    console.log("Result:", result2);
  } catch (error) {
    console.log("Error:", error);
  }
}

displayOrderStatus();
