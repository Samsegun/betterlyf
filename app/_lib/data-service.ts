import { db } from "../_db";
import { specialistsTable } from "../_db/schema";

export async function getSpecialists() {
    const specialists = await db.select().from(specialistsTable);

    return specialists;
}
