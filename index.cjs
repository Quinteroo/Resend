// index.cjs
import("./mailer.js").then(({ sendEmail }) => {
  let nombre = "Qugodev";
  let email = "hello.quinteroo@gmail.com";

  sendEmail(nombre, email);
});
