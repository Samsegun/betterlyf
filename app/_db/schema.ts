import {
    pgTable,
    serial,
    varchar,
    text,
    timestamp,
    date,
    time,
    integer,
    unique,
    numeric,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const usersTable = pgTable(
    "users",
    {
        id: varchar("id", { length: 50 }).primaryKey(), // Clerk's user.id
        fullName: varchar("full_name", { length: 255 }).notNull(),
        email: varchar("email", { length: 255 }).notNull().unique(),
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
    id: serial("id").primaryKey(),
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
        userId: varchar("user_id", { length: 50 })
            .primaryKey()
            .references(() => usersTable.id),
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
        id: serial("id").primaryKey(),
        patientId: varchar("patient_id", { length: 50 })
            .notNull()
            .references(() => patientsTable.userId),
        specialistId: integer("specialist_id")
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
                statusCheck: sql`CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed'))`,
            },
        },
    ]
);

// Bookings Table
// export const bookings = pgTable(
//     "bookings",
//     {
//         id: serial("id").primaryKey(),
//         patientId: integer("patient_id")
//             .notNull()
//             .references(() => patients.id),
//         specialistId: integer("specialist_id")
//             .notNull()
//             .references(() => specialists.id),
//         appointmentDate: date("appointment_date").notNull(),
//         timeSlot: time("time_slot")
//             .notNull()
//             .check(
//                 sql`time_slot IN ('09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00')`
//             ),
//         status: varchar("status", { length: 20 })
//             .notNull()
//             .check(
//                 sql`status IN ('pending', 'confirmed', 'cancelled', 'completed')`
//             ),
//         notes: text("notes"),
//         createdAt: timestamp("created_at", { withTimezone: true }).default(
//             sql`CURRENT_TIMESTAMP`
//         ),
//         updatedAt: timestamp("updated_at", { withTimezone: true }).default(
//             sql`CURRENT_TIMESTAMP`
//         ),
//     },
//     bookings => ({
//         uniqueAppointment: unique().fields([
//             bookings.specialistId,
//             bookings.appointmentDate,
//             bookings.timeSlot,
//         ]),
//     })
// );
