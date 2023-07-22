import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../index.js"; 

chai.use(chaiHttp);
const expect = chai.expect;

describe("Hotel Routes", () => {
    it("should return all hotels", (done) => {
    chai.request(app).get("/hotels")
      .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            expect(res.body).to.not.be.empty;
        done();
      });
});

    it("should return one hotel by its id", (done) => {
        const hotelId = 1;
        chai.request(app).get(`/hotels/${hotelId}`)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array").to.have.lengthOf(1);
        done();
      });
  });
});
