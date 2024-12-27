CREATE TABLE "bookings" (
	"id" serial PRIMARY KEY NOT NULL,
	"patient_id" varchar(50) NOT NULL,
	"specialist_id" integer NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"appointment_date" date NOT NULL,
	"time_slot" time NOT NULL,
	"phone_number" varchar(20) NOT NULL,
	"status" varchar(20) NOT NULL,
	"purpose_of_visit" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "patients" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" varchar(100) NOT NULL,
	"phone_number" varchar(20),
	"date_of_birth" date,
	"gender" varchar(10),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "patients_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "specialists" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(100) NOT NULL,
	"specialization" varchar(50) NOT NULL,
	"email" varchar(100) NOT NULL,
	"phone_number" varchar(20),
	"profile_picture_url" text,
	"bio" text,
	"price" numeric(10, 2) NOT NULL,
	"location" varchar(150),
	"expertise_years" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "specialists_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_patient_id_patients_id_fk" FOREIGN KEY ("patient_id") REFERENCES "public"."patients"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_specialist_id_specialists_id_fk" FOREIGN KEY ("specialist_id") REFERENCES "public"."specialists"("id") ON DELETE no action ON UPDATE no action;