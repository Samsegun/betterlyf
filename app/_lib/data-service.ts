// import { eq } from "drizzle-orm";
import { db } from "../_db";
import { specialistsTable } from "../_db/schema";

export async function getSpecialists() {
    const specialists = await db.select().from(specialistsTable);

    return specialists;
}

export async function getSpecialist(id: string) {
    const specialist = await db.query.specialistsTable.findFirst({
        where: (specialist, { eq }) => eq(specialist.id, id),
    });

    return specialist;
}
