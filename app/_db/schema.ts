import {
    pgTable,
    varchar,
    text,
    timestamp,
    date,
    time,
    integer,
    unique,
    numeric,
    uuid,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const usersTable = pgTable(
    "users",
    {
        id: uuid("id")
            .primaryKey()
            .notNull()
            .default(sql`gen_random_uuid()`),
        clerkId: varchar("clerk_id", { length: 50 }).notNull().unique(), // Clerk's user.id
        fullName: varchar("full_name", { length: 255 }).notNull(),
        email: varchar("email", { length: 255 }).notNull().unique(),
        imageUrl: varchar("image_url", { length: 500 }),
        phoneNumber: varchar("phone_number", { length: 20 }),
        role: varchar("role", { length: 20 }).notNull().default("patient"), // 'patient', 'specialist' or 'admin'
        lastLoginAt: timestamp("last_login_at"),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    () => [
        {
            tableConstraints: {
                roleCheck: sql`CHECK (role IN ('patient', 'specialist', 'admin'))`,
            },
        },
    ]
);

// Specialists Table
export const specialistsTable = pgTable("specialists", {
    id: uuid("id")
        .primaryKey()
        .notNull()
        .default(sql`gen_random_uuid()`),
    fullName: varchar("full_name", { length: 100 }).notNull(),
    specialization: varchar("specialization", { length: 50 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    phoneNumber: varchar("phone_number", { length: 20 }),
    profilePictureUrl: text("profile_picture_url"),
    bio: text("bio"),
    price: numeric("price", { precision: 10, scale: 2 }).notNull(),
    location: varchar("location", { length: 150 }),
    expertiseYears: integer("expertise_years").default(0),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

// Patients Table
export const patientsTable = pgTable(
    "patients",
    {
        id: uuid("id")
            .primaryKey()
            .notNull()
            .default(sql`gen_random_uuid()`),
        userId: varchar("user_id", { length: 50 })
            .notNull()
            .unique()
            .references(() => usersTable.clerkId),
        dateOfBirth: date("date_of_birth"),
        gender: varchar("gender", { length: 10 }),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    () => [
        {
            tableConstraints: {
                genderCheck: sql`CHECK (gender IN ('male', 'female', 'other'))`,
            },
        },
    ]
);

export const bookingsTable = pgTable(
    "bookings",
    {
        id: uuid("id")
            .primaryKey()
            .notNull()
            .default(sql`gen_random_uuid()`),
        patientId: varchar("patient_id", { length: 50 })
            .notNull()
            .references(() => patientsTable.userId),
        specialistId: uuid("specialist_id")
            .notNull()
            .references(() => specialistsTable.id),
        fullName: varchar("full_name", { length: 255 }).notNull(),
        appointmentDate: date("appointment_date").notNull(),
        timeSlot: time("time_slot").notNull(),
        phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
        status: varchar("status", { length: 20 }).notNull(),
        purposeOfVisit: varchar("purpose_of_visit", { length: 255 }),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    bookings => [
        {
            uniqueAppointment: unique().on(
                bookings.specialistId,
                bookings.appointmentDate,
                bookings.timeSlot
            ),
        },
        {
            tableConstraints: {
                timeSlotCheck: sql`CHECK (time_slot IN ('09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'))`,
                statusCheck: sql`CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed', 'no-show'))`,
            },
        },
    ]
);
