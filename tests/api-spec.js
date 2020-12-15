import "mocha";
import {
  sendEmail,
  sendConfirmationEmailToVendor,
  sendConfirmationEmailToAEInc
} from "../src/api/email";

import nock from "nock";

//TODO: Fix tests to run

describe("Api Calls", () => {
  it("sendEmail", done => {
    sendEmail("This is a test", "ansonervin@gmail.com").then(done, done);
  });

  it("sendConfirmationEmailToVendor", done => {
    const exampleCustomerDetails = {
      customer: {
        name: "anson",
        email: "anson@gmail.com",
        address: {
          street: "20 st.louis park",
          state: "MN",
          city: "Hopkins",
          zipcode: "55343"
        },
        order: "This is a test order"
      }
    };
    sendConfirmationEmailToVendor(exampleCustomerDetails).then(done, done);
  });

  it("sendConfirmationEmailToAEInc", done => {
    const exampleCustomerDetails = {
      customer: {
        name: "anson",
        email: "anson@gmail.com",
        address: {
          street: "20 st.louis park",
          state: "MN",
          city: "Hopkins",
          zipcode: "55343"
        },
        order: "This is a test order"
      }
    };
    sendConfirmationEmailToAEInc("3", exampleCustomerDetails).then(done, done);
  });
});
