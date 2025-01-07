import { currentUser } from "@clerk/nextjs/server";
// import { db } from "../_db";
// import { usersTable } from "../_db/schema";
// import { eq } from "drizzle-orm";
import { supabase } from "./supabase";

export async function checkUser() {
    const user = await currentUser();

    // check for current logged in user
    // if user is not logged-in, return null
    if (!user) {
        return null;
    }

    // check if user is already in db
    // const loggedInUser = await db
    //     .select()
    //     .from(usersTable)
    //     .where(eq(usersTable.clerkId, user.id))
    //     .limit(1);

    const loggedInUser = await supabase
        .from("users")
        .select()
        .eq("clerkId", user.id)
        .single();

    // if loggedInUser, return user
    // if (loggedInUser.length > 0) return loggedInUser[0];
    if (loggedInUser.data) return loggedInUser.data;

    // if not in db, create user
    const name = user.fullName ?? "";
    // const newUser = await db
    //     .insert(usersTable)
    //     .values({
    //         clerkId: user.id,
    //         fullName: name,
    //         imageUrl: user.imageUrl,
    //         email: user.emailAddresses[0].emailAddress,
    //     })
    //     .returning();

    // return newUser[0];
    const { data } = await supabase
        .from("users")
        .insert({
            clerkId: user.id,
            fullName: name,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress,
        })
        .select()
        .single();

    return data;
}
