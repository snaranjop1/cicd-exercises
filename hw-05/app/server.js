const app = require("./app.js");

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running in port ${process.env.PORT} 👽`);
});
