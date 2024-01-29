import express, { response } from "express";

const app = express();
const port = 3000;

app.get("/", (request, response) => {
  const date = new Date("2024-02-03T10:19:38.275Z");
  //   const date = new Date();
  const day = date.getDay();

  let type = "a Weekday";
  let adv = "Its time to work hard.";

  console.log(date);
  console.log(day);
  if (day === 0 || day === 6) {
    type = "Weekend";
    adv = "Its time to have Fun!";
  }
  response.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
