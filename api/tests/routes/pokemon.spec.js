/* eslint-disable import/no-extraneous-dependencies */
//const { expect } = require('chai');
const session = require("supertest-session");
const app = require("../../src/app.js");
//const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);

// const agent = session(app);
// const pokemon = {
//   name: 'Pikachu',
// };

describe("Pokemon routes", () => {
  describe("GET /types", () => {
    it("/types => should get 200", () => agent.get("/types").expect(200));
  });

  // describe("GET /pokemons/:id", () => {
  //   it("/pokemons/:id => should get 200", () =>
  //     agent.get("/pokemons/1").expect(200));
  // });

  // describe("GET /pokemons", () => {
  //   it("/pokemons => should get 200", () =>
  //     agent.get("/pokemons").then((res) => expect(res)));
  // });
  // describe("POST /pokemons", () => {
  //   it("/pokemons => should get 200", () => agent.get("/pokemons").expect(200));
  // });
});
