function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Rahul", isPremium: true });
    }, 1000);
  });
}

function fetchOrders(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { item: "Laptop", price: 1000, status: "delivered" },
        { item: "Phone", price: 500, status: "pending" },
      ]);
    }, 2000);
  });
}

async function displayDashboard(id) {
  try {
    console.log("Loading dashboard...\n");

    const [user, orders] = await Promise.all([fetchUser(id), fetchOrders(id)]);

    console.log(`Welcome, ${user.name}!`);
    console.log(`Account Type: ${user.isPremium ? "Premium" : "Regular"}\n`);

    const deliveredOrders = orders.filter(
      (order) => order.status === "delivered"
    );

    const discountedOrders = deliveredOrders.map((order) => {
      const discount = user.isPremium ? order.price * 0.1 : 0;
      const finalPrice = order.price - discount;
      return {
        item: order.name || order.item,
        originalPrice: order.price,
        discount: discount,
        finalPrice: finalPrice,
      };
    });

    console.log("Delivered Orders:");
    let total = 0;
    discountedOrders.forEach((order) => {
      console.log(
        `  ${order.item}: ₹${order.originalPrice} ${
          order.discount > 0 ? `- ₹${order.discount} (10% discount)` : ""
        } = ₹${order.finalPrice}`
      );
      total += order.finalPrice;
    });

    console.log(`\nTotal Amount: ₹${total}`);
  } catch (error) {
    console.log("Error:", error);
  }
}

displayDashboard(1);
