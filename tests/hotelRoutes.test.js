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

    it("should return all hotels with their cities", (done) => {
        chai.request(app).get(`/hotels/hotel-by-city-ranking`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                expect(res.body).to.not.be.empty;
                
                res.body.forEach(hotel => {
                    expect(hotel).to.have.property('city_name');
                });

                done();
            });
    });

    it("should return all hotels classed by average ratings", (done) => {
        chai.request(app).get(`/hotels/rate`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array");
                expect(res.body).to.not.be.empty;
                
                res.body.forEach((hotel, index) => {
                    if(index < res.body.length - 1){
                        expect(
                            parseFloat(hotel.total_rate)
                        ).to.be.greaterThanOrEqual(parseFloat(res.body[index + 1].total_rate));
                    }
                });

                done();
            });
    });
});
