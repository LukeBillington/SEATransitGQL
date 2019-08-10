import { app, gql } from "./app";

gql.applyMiddleware({ app });

app.listen(process.env.PORT || 3000);
