import {Post} from "./entities/Post";
import {__prod__} from "./constants";
import { MikroORM } from "@mikro-orm/core"
import path from 'path';

export default {
    config: {
        migrations: {
            path: path.join(__dirname, "./migrations"), // path to the folder with migrations
            glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
        }
    },
    entities: [Post],
    dbName: 'reddit',
    user: 'redditpostgres',
    password: 'reddit',
    debug: !__prod__,
    type: 'postgresql'
} as Parameters<typeof MikroORM.init>[0];