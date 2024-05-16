import { createApp } from "./src/app.js";
import { UserModel } from "./src/models/usersql.js";

createApp({ userModel: UserModel });
