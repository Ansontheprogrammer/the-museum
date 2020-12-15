import axios from "axios";

export async function sendEmail(messageBody, toEmail) {
  const url = `${config.aeSystemURL}/api/send/email`;
  try {
    await axios({
      url,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        ...messageBody,
        to: toEmail
      })
    });
    return;
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function sendConfirmationEmailToVendor(customerDetails) {
  return await sendEmail(customerDetails, config.vendorEmail);
}

export async function sendConfirmationEmailToAEInc(ourIncome, checkoutDetails) {
  const messageBody = {
    checkoutDetails,
    message: "Customer just checked and we made for $" + ourIncome
  };
  return await sendEmail(messageBody, config.aeEmail);
}
