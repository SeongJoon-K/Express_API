const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { DataSource } = require("typeorm");

app.use(cors());
app.use(express.json());

app.get("/ping", function (req, res, next) {
  res.json({ message: "pong" });
});

app.get("/postList", async (req, res) => {
  await myDataSource.query(
    `
  SELECT
  users.id AS userId,
  users.image_src AS userProfileImage,
  posts.id AS postingId,
  posts.content AS postingContent
  FROM users
  INNER JOIN posts ON
  users.id = posts.user_id;`,
    (err, rows) => {
      res.status(200).json({ data: rows });
    }
  );
});

app.get("/posts/:userId", async (req, res) => {
  // const { userId } = req.params;

  const post = await myDataSource.query(
    `
  SELECT
    users.id,
    user.name,
    posts.id,
    posts.title,
    posts.content
  FROM post
  JOIN users ON users.id = posts.user_id
  WHERE posts.id = ?`,
    [userId]
  );
  res.status(200).json({ data: post });
});

app.post("/signup", async (req, res) => {
  const { login_id, password, image_src, name } = req.body;
  await myDataSource.query(
    `INSERT INTO users(
      login_id,
      password,
      image_src,
      name
    ) VALUES(?, ?, ?, ?);
    `,
    [login_id, password, image_src, name]
  );
  res.status(201).json({ message: "userCreated" });
});

app.post("/posts", async (req, res) => {
  console.log(req.body);
  const { user_id, title, content } = req.body;
  await myDataSource.query(
    `INSERT INTO posts(
      user_id,
      title,
      content
    ) VALUES(?, ?, ?);
    `,
    [user_id, title, content]
  );
  res.status(201).json({ message: "postCreated" });
});

app.listen(3000, function () {
  "listening on port 3000";
});

const myDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

myDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
});
