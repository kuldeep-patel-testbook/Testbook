import React from 'react'
import axios from 'axios';

const App = () => {
  const makePayment = async () => {

    try {
      const res = await axios.post("http://localhost:3300/create-order", {
        amount: 1,
      });

      const order = res.data;

      const options = {
        key: "rzp_test_yrtLLH33PxZPJu", // Test Key ID from Razorpay
        amount: order.amount,
        currency: "INR",
        name: "Developer Test",
        description: "Test Transaction",
        order_id: order.id,
        handler: function (response) {
          alert("Payment Successful!");
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Order ID:", response.razorpay_order_id);
          console.log("Signature:", response.razorpay_signature);
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (error) {
        console.error('error creating order', error);
        res.status(500).send('Something went wrong');
    }
    
  };

  return (
    <div style={{padding: 20}}>
      <h1>RazorPay Developer Mode Integration</h1>
      <button onClick={makePayment}>Pay ₹500</button>
    </div>
  )
}

export default App