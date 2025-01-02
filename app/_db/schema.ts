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
    check,
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
    userId: varchar("user_id", { length: 50 })
        .unique()
        .references(() => usersTable.clerkId),
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
        timeSlot: time("time_slot", { precision: 0 }).notNull(),
        phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
        status: varchar("status", { length: 20 }).notNull(),
        purposeOfVisit: varchar("purpose_of_visit", { length: 255 }),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    b => [
        unique("unique_appointment_slot").on(
            b.specialistId,
            b.appointmentDate,
            b.timeSlot
        ),
        check(
            "time_slot_check",
            sql`${b.timeSlot} IN ('09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00')`
        ),
        check(
            "status_check",
            sql`${b.status} IN ('pending', 'confirmed', 'cancelled', 'completed', 'no-show')`
        ),
    ]
);

// {
//     uniqueAppointmentSlot: unique("unique_appointment_slot").on(
//         bookings.specialistId,
//         bookings.appointmentDate,
//         bookings.timeSlot
//     ),
//     timeSlotCheck: check(
//         "time_slot_check",
//         sql`${bookings.timeSlot} IN ('09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00')`
//     ),
//     statusCheck: check(
//         "status_check",
//         sql`${bookings.status} IN ('pending', 'confirmed', 'cancelled', 'completed', 'no-show')`
//     ),
// },

// tableConstraints: {
//     timeSlotCheck: sql`CHECK (time_slot IN ('09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00'))`,
//     statusCheck: sql`CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed', 'no-show'))`,
// },
