#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.argv[1],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

// 'postgresql://${process.env.DATABASE_ROLE_NAME}:${process.env.DATABASE_PASSWORD}@localhost:5432/${process.env.DATABASE_NAME}'
