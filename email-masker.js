// This function takes in an email and returns the email with astericks to protect the sensitive portions of the email
function maskEmail(email) {
   const endEmail = email.slice(email.indexOf("@") - 1);
   const numberOfAstericks = email.indexOf("@") - 2;
   return email[0] + "*".repeat(numberOfAstericks) + endEmail;
}

// Same function but arrow notation
const maskEmailV2 = (email) => {
   const endEmail = email.slice(email.indexOf("@") - 1);
   const numberOfAstericks = email.indexOf("@") - 2;
   return email[0] + "*".repeat(numberOfAstericks) + endEmail;
};

let email = "example-email-1@email.com";
console.log(maskEmail(email));
console.log(maskEmailV2(email));
