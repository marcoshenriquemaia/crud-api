import { Postgres } from "./data/postgres";
import { client } from "./data/postgres/client";

const data = new Postgres(client)

data.query("SELECT * FROM users").then(console.log)