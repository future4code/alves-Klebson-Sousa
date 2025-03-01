import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getDisplayPages } from "./endpoints/getDisplayPages";
import { getFilterOrderPage } from "./endpoints/getFilterOrderPage";
import { getUserName } from "./endpoints/getUserName";
import { getAllUsersOrder } from "./endpoints/getUserOrder";
import { getUserType } from "./endpoints/getUserType";

app.get("/users", getAllUsers);

app.get("/users/search", getUserName);

app.get("/users/order", getAllUsersOrder);

app.get("/users/:type", getUserType);

app.get("/users/page/select", getDisplayPages);

app.get("/users/full/search", getFilterOrderPage);
