import { app } from "./app";

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT:${port}`.inverse.green);
});

process.on("unhandledRejection", (err) => {
  console.log(`Server halted due to unhandled rejection ${err}`.red);
});
