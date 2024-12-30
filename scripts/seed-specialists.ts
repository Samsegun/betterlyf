import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { InferInsertModel } from "drizzle-orm";
import { specialistsTable } from "@/app/_db/schema";

type SpecialistInput = Omit<
    InferInsertModel<typeof specialistsTable>,
    "id" | "createdAt" | "updatedAt"
>;

// Sample specialist data
const specialistsData: SpecialistInput[] = [
    {
        fullName: "Sarah Johnson",
        specialization: "general practitioner",
        email: "sarah.johnson@example.com",
        phoneNumber: "+2348012345678",
        profilePictureUrl: "/specialists/gp1.jpg",
        bio: "An experienced GP with over 10 years of practice in family medicine, dedicated to providing comprehensive healthcare.",
        price: "10000",
        location: "lagos",
        expertiseYears: 10,
    },
    {
        fullName: "Michael Chen",
        specialization: "pediatrician",
        email: "michael.chen@example.com",
        phoneNumber: "+2348023456789",
        profilePictureUrl: "/specialists/ped1.jpg",
        bio: "Dedicated pediatrician with a passion for children's health and development.",
        price: "12000",
        location: "abuja",
        expertiseYears: 8,
    },
];

async function seedSpecialists() {
    // Initialize your database connection
    const sql = neon(process.env.DATABASE_URL!);
    const db = drizzle(sql);

    try {
        console.log("Starting to seed specialists...");

        // Insert all specialists
        const result = await db
            .insert(specialistsTable)
            .values(specialistsData)
            .returning();

        console.log(`Successfully seeded ${result.length} specialists`);
        return result;
    } catch (error) {
        console.error("Error seeding specialists:", error);
        throw error;
    }
}

// Run the seeding function
seedSpecialists()
    .then(() => {
        console.log("Seeding completed successfully");
        process.exit(0);
    })
    .catch(error => {
        console.error("Seeding failed:", error);
        process.exit(1);
    });
