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
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// Specialists Table
export const specialistsTable = pgTable("specialists", {
    id: serial("id").primaryKey(),
    fullName: varchar("full_name", { length: 100 }).notNull(),
    specialization: varchar("specialization", { length: 50 }).notNull(),
    email: varchar("email", { length: 100 }).notNull().unique(),
    phoneNumber: varchar("phone_number", { length: 20 }),
    profilePictureUrl: text("profile_picture_url"),
    bio: text("bio"),
    createdAt: timestamp("created_at", { withTimezone: true }).default(
        sql`CURRENT_TIMESTAMP`
    ),
    updatedAt: timestamp("updated_at", { withTimezone: true }).default(
        sql`CURRENT_TIMESTAMP`
    ),
});

// Patients Table
export const patientsTable = pgTable(
    "patients",
    {
        id: serial("id").primaryKey(),
        fullName: varchar("full_name", { length: 255 }).notNull(),
        email: varchar("email", { length: 100 }).notNull().unique(),
        phoneNumber: varchar("phone_number", { length: 20 }),
        dateOfBirth: date("date_of_birth"),
        gender: varchar("gender", { length: 10 }),
        address: text("address"),
        medicalHistory: text("medical_history"),
        createdAt: timestamp("created_at", { withTimezone: true }).default(
            sql`CURRENT_TIMESTAMP`
        ),
        updatedAt: timestamp("updated_at", { withTimezone: true }).default(
            sql`CURRENT_TIMESTAMP`
        ),
    },
    () => [
        {
            tableConstraints: {
                genderCheck: sql`CHECK (gender IN ('Male', 'Female', 'Other', 'Prefer not to say'))`,
            },
        },
    ]
);

export const bookingsTable = pgTable(
    "bookings",
    {
        id: serial("id").primaryKey(),
        patientId: integer("patient_id")
            .notNull()
            .references(() => patientsTable.id),
        specialistId: integer("specialist_id")
            .notNull()
            .references(() => specialistsTable.id),
        appointmentDate: date("appointment_date").notNull(),
        timeSlot: time("time_slot").notNull(),
        status: varchar("status", { length: 20 }).notNull(),
        medicalHistory: text("medical_history"),
        createdAt: timestamp("created_at", { withTimezone: true }).default(
            sql`CURRENT_TIMESTAMP`
        ),
        updatedAt: timestamp("updated_at", { withTimezone: true }).default(
            sql`CURRENT_TIMESTAMP`
        ),
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
