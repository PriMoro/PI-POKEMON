const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });

      it("should throw an error if health points is not number", (done) => {
        Pokemon.create({ name: "Pikachu", hp: "sarasa" })
          .then(() => done(new Error("It requires a valid health points")))
          .catch(() => done());
      });

      it("should throw an error if attack is not number", (done) => {
        Pokemon.create({ name: "Pikachu", attack: "sarasa" })
          .then(() => done(new Error("It requires a valid attack")))
          .catch(() => done());
      });

      it("should throw an error if defense is not number", (done) => {
        Pokemon.create({ name: "Pikachu", defense: "sarasa" })
          .then(() => done(new Error("It requires a valid defense")))
          .catch(() => done());
      });

      it("should throw an error if speed is not number", (done) => {
        Pokemon.create({ name: "Pikachu", speed: "sarasa" })
          .then(() => done(new Error("It requires a valid speed")))
          .catch(() => done());
      });

      it("should throw an error if height is not number", (done) => {
        Pokemon.create({ name: "Pikachu", height: "sarasa" })
          .then(() => done(new Error("It requires a valid height")))
          .catch(() => done());
      });

      it("should throw an error if weight is not number", (done) => {
        Pokemon.create({ name: "Pikachu", weight: "sarasa" })
          .then(() => done(new Error("It requires a valid weight")))
          .catch(() => done());
      });
    });
  });
});
