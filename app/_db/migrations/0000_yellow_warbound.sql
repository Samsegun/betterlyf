CREATE TABLE "bookings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"patient_id" varchar(50) NOT NULL,
	"specialist_id" uuid NOT NULL,
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
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar(50) NOT NULL,
	"date_of_birth" date,
	"gender" varchar(10),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "patients_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
CREATE TABLE "specialists" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(100) NOT NULL,
	"specialization" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
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
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerk_id" varchar(50) NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"image_url" varchar(500),
	"phone_number" varchar(20),
	"role" varchar(20) DEFAULT 'patient' NOT NULL,
	"last_login_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_patient_id_patients_user_id_fk" FOREIGN KEY ("patient_id") REFERENCES "public"."patients"("user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_specialist_id_specialists_id_fk" FOREIGN KEY ("specialist_id") REFERENCES "public"."specialists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "patients" ADD CONSTRAINT "patients_user_id_users_clerk_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("clerk_id") ON DELETE no action ON UPDATE no action;