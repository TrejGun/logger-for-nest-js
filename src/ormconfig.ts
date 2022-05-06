import "./env";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { UserEntity } from "./user/user.entity";
import { AddTsdSchema1561991006215 } from "./migrations/1561991006215-add-schema";
import { AddUserTable1562222612033 } from "./migrations/1562222612033-add-user-table";
import { SetupUser1563804021014 } from "./migrations/1563804021014-setup-user";

// Check typeORM documentation for more information.
const config: PostgresConnectionOptions = {
  name: "default",
  type: "postgres",
  url: process.env.POSTGRES_URL,
  entities: [UserEntity],
  // We are using migrations, synchronize should be set to false.
  synchronize: false,
  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: process.env.NODE_ENV !== "production",
  namingStrategy: new SnakeNamingStrategy(),
  logging: process.env.NODE_ENV !== "test",
  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [AddTsdSchema1561991006215, AddUserTable1562222612033, SetupUser1563804021014],
};

export default config;
