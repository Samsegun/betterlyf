import { db } from "../_db";
import { specialistsTable } from "../_db/schema";

// export async function getUser() {
//     const user =  await db.query.postsTable.findFirst({
//         where: (post, { eq }) => eq(post.slug, slug)
//     });

//     return user;
// }

export async function getSpecialists() {
    const specialists = await db.select().from(specialistsTable);

    return specialists;
}
