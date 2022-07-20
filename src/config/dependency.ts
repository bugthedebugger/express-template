import { HTTPSource } from "../data/source/http.data.source";

const awilix = require("awilix");

// Create dependency injection container
export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

// Register dependencies
export const registerDependencies = () => {
  container.register({
    HTTPSource: awilix.asClass(HTTPSource),
  });

  console.log(`Dependencies: Registered`.blue.underline.bold);
};
