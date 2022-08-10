import {MikroORM} from "@mikro-orm/core"
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config"

async function main() {
    const orm = await MikroORM.init(mikroConfig);

    // await orm.getMigrator().up();

    const generator = orm.getSchemaGenerator();
    await generator.updateSchema(false);


    const post = orm.em.create(Post, {title: 'My first post'});
    await orm.em.persistAndFlush(post);
}

main();