import { gql, ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { connectToDatabase } from "@/utils/mongo";

const users = [
  {
    username: "AwaisYusaf",
    email: "awaixkhan3@gmail.com",
    phone: "0306-5396548",
    linkedin: "https://www.linkedin.com/AwaisYusaf",
    company: "TopTech",
  },
  {
    username: "AamirYusaf",
    email: "aamir@gmail.com",
    phone: "0302-5396548",
    linkedin: "https://www.linkedin.com/AwaisYusaf",
    company: "DevSinc",
  },
  {
    username: "ZeeshanAhmad",
    email: "zeesham@gmail.com",
    phone: "0303-5396548",
    linkedin: "https://www.linkedin.com/AwaisYusaf",
    company: "Spotify",
  },
  {
    username: "HammadAmjad",
    email: "hammad@gmail.com",
    phone: "0310-5356548",
    linkedin: "https://www.linkedin.com/AwaisYusaf",
    company: "Microsoft",
  },
  {
    username: "Naeem",
    email: "Naeem@gmail.com",
    phone: "0316-5396548",
    linkedin: "https://www.linkedin.com/AwaisYusaf",
    company: "TeraData",
  },
];

export const config = {
  api: {
    bodyParser: false
  }
}


const typeDefs = gql`
type User {
  _id:String
  username:String
  phone:String
  email:String
  linkedin:String
  company:String
}
type Query {
  users: [User],
  oneuser: User
}
`

const resolvers = {
  Query: {
    users: async () => {
      const { db } = await connectToDatabase();
      const targetUsers = await db.collection('users').find({}).toArray();
      console.log(targetUsers);
      return targetUsers;
    },
    oneuser: async () => {
      const { db } = await connectToDatabase();
      const targetUser = await db.collection('users').findOne({ username: "AwaisYusaf" });
      return targetUser;
    }
  },

}
const cors = Cors();

const server = new ApolloServer({
  resolvers,
  typeDefs,
  context: ({ req }) => { },
  introspection: true,
})

const startServer = server.start();

export default cors(async (req, res) => {
  if (req.method == "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
})
