import Post from './Post'
import {mySchema} from './schemas'
import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

const adapter = new SQLiteAdapter({
  dbName: "WatermelonDemo",
  schema: mySchema
});

const database = new Database({
  adapter,
  actionsEnabled: true,
  modelClasses: [Post]
});

export default database;