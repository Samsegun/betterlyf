-- Specialists Table
CREATE TABLE specialists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    profile_picture_url TEXT,
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Patients Table
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10) CHECK (gender IN ('Male', 'Female', 'Other', 'Prefer not to say')),
    address TEXT,
    medical_history TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Bookings Table
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER NOT NULL REFERENCES patients(id),
    specialist_id INTEGER NOT NULL REFERENCES specialists(id),
    appointment_date DATE NOT NULL,
    time_slot TIME NOT NULL CHECK (time_slot IN ('09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00')),
    status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(specialist_id, appointment_date, time_slot)
);

-- Indexes for performance
CREATE INDEX idx_specialist_specialization ON specialists(specialization);
CREATE INDEX idx_patient_email ON patients(email);
CREATE INDEX idx_booking_patient ON bookings(patient_id);
CREATE INDEX idx_booking_specialist ON bookings(specialist_id);
CREATE INDEX idx_booking_date ON bookings(appointment_date);


-- a more comprehensive table
-- CREATE TABLE bookings (
--     id SERIAL PRIMARY KEY,
--     patient_id INTEGER NOT NULL REFERENCES patients(id),
--     specialist_id INTEGER NOT NULL REFERENCES specialists(id),
--     appointment_date TIMESTAMP WITH TIME ZONE NOT NULL,
--     duration_minutes INTEGER DEFAULT 30,
--     status VARCHAR(20) NOT NULL CHECK (status IN ('scheduled', 'confirmed', 'cancelled', 'completed')),
--     notes TEXT,
    
--     -- New field for appointment type
--     appointment_type_id INTEGER REFERENCES appointment_types(id),  -- Assuming an appointment_types table exists
    
--     -- New field for checking overlaps
--     CONSTRAINT no_overlap CHECK (
--         NOT EXISTS (
--             SELECT 1 FROM bookings b
--             WHERE b.specialist_id = specialist_id
--             AND b.appointment_date < appointment_date + INTERVAL '1 minute' * duration_minutes
--             AND b.appointment_date + INTERVAL '1 minute' * b.duration_minutes > appointment_date
--         )
--     ),
    
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );

-- Appointment types table
-- CREATE TABLE appointment_types (
--     id SERIAL PRIMARY KEY,
--     type_name VARCHAR(100) NOT NULL UNIQUE,
--     default_duration INTEGER NOT NULL CHECK (default_duration > 0),  -- Duration in minutes
--     description TEXT,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );


-- example insertions
-- INSERT INTO appointment_types (type_name, default_duration, description)
-- VALUES 
-- ('Initial Consultation', 60, 'A comprehensive evaluation of the patient’s health.'),
-- ('Follow-up Visit', 30, 'A check-up to monitor progress after initial treatment.'),
-- ('Telehealth Appointment', 45, 'A virtual consultation via video or phone call.'),
-- ('Routine Check-up', 30, 'Regular health screening and assessment.');
