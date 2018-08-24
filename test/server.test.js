const tape = require("tape");
const request = require("supertest");
const app = require("../src/app");
const runDbTestBuild = require("../src/database/test_build");

tape("check that landing page route is working", t => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.error(err, "home route returns 200 status code");
      t.end();
    });
});

tape("check that board route is working", t => {
  request(app)
    .get("/board/1")
    .expect(200)
    .end((err, res) => {
      t.error(err, "board/1 returns 200 status code");
      t.end();
    });
});

tape("check that nonexistent route gets 404", t => {
  request(app)
    .get("/kdsghflsdkfjs/")
    .expect(404)
    .end((err, res) => {
      t.error(err, "404 status code returned");
      t.end();
    });
});

tape("check that server errors are handled appropriately", t => {
  request(app)
    .get("/make_error/")
    .expect(500)
    .end((err, res) => {
      t.error(err, "500 status code returned");
      t.end();
    });
});

tape("Check that a topic can be removed", t => {
  runDbTestBuild().then(
    request(app)
      .get("/removetopic/1/")
      .expect(302)
      .end((err, res) => {
        t.equal(res.statusCode, 302, "should return a 302");
        t.end();
      })
  );
});
