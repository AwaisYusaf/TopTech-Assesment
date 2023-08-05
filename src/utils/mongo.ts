import { MongoClient, ServerApiVersion } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://awais_8:CebL5EGoHtlJQH6Y@cluster0.7ithz.mongodb.net/?retryWrites=true&w=majority';
const MONGODB_DB = 'TopTech';

let cachedClient: any = null;
let cachedDb: any = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = await MongoClient.connect(MONGODB_URI, {
        //@ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = await client.db(MONGODB_DB);
    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

