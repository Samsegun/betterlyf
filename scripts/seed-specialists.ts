import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { InferInsertModel } from "drizzle-orm";
import { config } from "dotenv";
import { specialistsTable } from "@/app/_db/schema";

config({ path: ".env" });

type SpecialistInput = Omit<
    InferInsertModel<typeof specialistsTable>,
    "id" | "createdAt" | "updatedAt"
>;

// Sample specialist data
const specialistsData: SpecialistInput[] = [
    {
        fullName: "micheal carter",
        specialization: "dentist",
        email: "micheal.carter@example.com",
        phoneNumber: "+2348088880",
        bio: "Dr. Micheal Carter is dedicated to providing high-quality dental care in a comfortable and compassionate setting. He strives to build long-term relationships with his patients and empower them to make informed decisions about their oral health.",
        price: "7500",
        location: "lagos",
        expertiseYears: 9,
    },
    {
        fullName: "anthony james",
        specialization: "dentist",
        email: "tony.james@example.com",
        phoneNumber: "+234802399990",
        bio: "Dr. Anthony James is a dentist with a special interest in cosmetic dentistry, orthodontics, pediatric dentistry. He is committed to providing high-quality dental care to the local community, underserved population and actively participate in community health initiatives.",
        price: "8000",
        location: "abuja",
        expertiseYears: 10,
    },
    {
        fullName: "olumide adebayo",
        specialization: "general practitioner",
        email: "olu.bayo@example.com",
        phoneNumber: "+234802399444",
        bio: "Dr. Adebayo is a compassionate and experienced General Practitioner dedicated to providing comprehensive and personalized healthcare for patients of all ages. With 10 years of experience, he has a strong foundation in diagnosing and treating a wide range of medical conditions, from routine check-ups and vaccinations to managing chronic illnesses like diabetes and hypertension.",
        price: "10000",
        location: "ibadan",
        expertiseYears: 10,
    },
    {
        fullName: " david johnson",
        specialization: "gynecologist",
        email: "david.john@example.com",
        phoneNumber: "+234802311111",
        bio: "Dr. David Johnson creates a comfortable and supportive environment for her patients, ensuring they feel heard and understood. He strives to build long-term relationships with his patients and provide personalized care that meets their unique needs and concerns.",
        price: "15000",
        location: "abuja",
        expertiseYears: 10,
    },
    {
        fullName: "chris adams",
        specialization: "general practitioner",
        email: "chris.adams@example.com",
        phoneNumber: "+23480202020",
        bio: "Dr. Chris Adams creates a comfortable and welcoming environment for his patients, prioritizing their individual needs and concerns. He believes in open communication and strive to empower patients to make informed decisions about their health.",
        price: "10000",
        location: "lagos",
        expertiseYears: 18,
    },
    {
        fullName: "abiodun olayemi",
        specialization: "gynecologist",
        email: "abey.yemi@example.com",
        phoneNumber: "+23480230000",
        bio: "Dr. Abiodun Olayemi is committed to staying abreast of the latest advancements in women's health and utilizes the latest diagnostic tools and treatment options to ensure the best possible outcomes for his patients. He prioritizes patient education and strives to empower women to make informed decisions about their reproductive health.",
        price: "12000",
        location: "abuja",
        expertiseYears: 9,
    },
    {
        fullName: "olivia brown",
        specialization: "dentist",
        email: "olivia.brown@example.com",
        phoneNumber: "+234802399991",
        bio: "Dr. Olivia Brown believes in a patient-centered approach to oral health, emphasizing preventative care and patient education. She works closely with patients to develop personalized treatment plans that address their individual needs and goals.",
        price: "5000",
        location: "lagos",
        expertiseYears: 8,
    },
    {
        fullName: "emma davis",
        specialization: "dentist",
        email: "emma.davis@example.com",
        phoneNumber: "+234802399992",
        bio: "Dr. Emma Davis is dedicated to providing high-quality dental care in a comfortable and compassionate setting. She strives to build long-term relationships with her patients and empower them to make informed decisions about their oral health.",
        price: "9000",
        location: "abuja",
        expertiseYears: 11,
    },
    {
        fullName: "daniel bennett",
        specialization: "general practitioner",
        email: "dan.bennett@example.com",
        phoneNumber: "+234802399993",
        bio: "Dr. Daniel Bennett is a compassionate and experienced General Practitioner dedicated to providing comprehensive and personalized healthcare for patients of all ages. With over 20 years of experience, Dr. Daniel Bennett has a strong foundation in diagnosing and treating a wide range of medical conditions, from routine check-ups and vaccinations to managing chronic illnesses like diabetes and hypertension.",
        price: "15000",
        location: "abuja",
        expertiseYears: 20,
    },
    {
        fullName: "sophia wilson",
        specialization: "dentist",
        email: "sophia.wilson@example.com",
        phoneNumber: "+234802399994",
        bio: "Dr. Sophia Wilson is committed to staying abreast of the latest advancements in dental technology and techniques to ensure patients receive the most effective and up-to-date care. She prioritizes patient comfort and strive to create a relaxed and welcoming environment for all her patients.",
        price: "6000",
        location: "lagos",
        expertiseYears: 10,
    },
    {
        fullName: "joshua brooks",
        specialization: "general practitioner",
        email: "josh.brooks@example.com",
        phoneNumber: "+234802399995",
        bio: "Dr. Joshua Brooks is a General Practitioner with a special interest in preventive medicine, geriatrics, women's health. He is committed to providing high-quality, patient-centered care to the local community, underserved population and actively participate in community health initiatives.",
        price: "20000",
        location: "lagos",
        expertiseYears: 28,
    },
    {
        fullName: "samuel morgan",
        specialization: "gynecologist",
        email: "sam.morgan@example.com",
        phoneNumber: "+2348023997777",
        bio: "Dr. Samuel Morgan is a compassionate and patient-centered gynecologist who believes in providing holistic women's healthcare. He focuses on not only treating medical conditions but also promoting overall women's wellness, including preventive care, reproductive health counseling, and addressing concerns related to sexuality and relationships.",
        price: "7500",
        location: "lagos",
        expertiseYears: 12,
    },
    {
        fullName: "hannah jenkins",
        specialization: "gynecologist",
        email: "hannah.jenkins@example.com",
        phoneNumber: "+234802399771",
        bio: "Dr. Hannah Jenkins is a highly experienced gynecologist with a focus on providing comprehensive and compassionate women's healthcare. With Over 25 years of experience, Dr. Hannah Jenkins has a strong foundation in diagnosing and treating a wide range of gynecological conditions, including menstrual disorders, infertility, pregnancy complications, and menopause.",
        price: "18000",
        location: "abuja",
        expertiseYears: 25,
    },
    {
        fullName: "ngozi ezeh",
        specialization: "gynecologist",
        email: "ngozi.ezeh@example.com",
        phoneNumber: "+234802399772",
        bio: "Dr. Ngozi Ezeh is committed to staying abreast of the latest advancements in women's health and utilizes the latest diagnostic tools and treatment options to ensure the best possible outcomes for her patients. She prioritizes patient education and strives to empower women to make informed decisions about their reproductive health.",
        price: "10000",
        location: "lagos",
        expertiseYears: 11,
    },
    {
        fullName: "charlotte rivera",
        specialization: "ophthalmologist",
        email: "charl.rivera@example.com",
        phoneNumber: "+234802399773",
        bio: "Dr. Charlotte Rivera creates a welcoming and comfortable environment for her patients, ensuring they feel heard and understood. She strives to build long-term relationships with her patients and provide comprehensive eye care that addresses their concerns and promotes optimal eye health.",
        price: "10000",
        location: "lagos",
        expertiseYears: 18,
    },
    {
        fullName: "ifeanyi uche",
        specialization: "ophthalmologist",
        email: "ifeanyi.uche@example.com",
        phoneNumber: "+234802399774",
        bio: "Dr. Uche is committed to staying abreast of the latest advancements in ophthalmology and utilizes the latest diagnostic tools and treatment options to ensure the best possible outcomes for his patients. He prioritizes patient education and strives to empower individuals to take an active role in their eye health.",
        price: "8000",
        location: "lagos",
        expertiseYears: 14,
    },
    {
        fullName: "dennis taylor",
        specialization: "ophthalmologist",
        email: "dennis.taylor@example.com",
        phoneNumber: "+234802399776",
        bio: "Dr. Dennis Taylor is a compassionate and patient-centered ophthalmologist who believes in providing personalized eye care tailored to each individual's unique needs. He utilizes the latest technology and minimally invasive techniques to provide comfortable and effective treatments for a wide range of eye conditions.",
        price: "6000",
        location: "lagos",
        expertiseYears: 10,
    },
    {
        fullName: "matthew harris",
        specialization: "ophthalmologist",
        email: "matt.harris@example.com",
        phoneNumber: "+2348023997710",
        bio: "Dr. Matthew Harris is a highly skilled ophthalmologist with over 30 years of experience providing comprehensive eye care for patients of all ages. He has a strong foundation in diagnosing and treating a wide range of eye conditions, from routine eye exams and vision correction to complex surgical procedures like cataract surgery and glaucoma management.",
        price: "20000",
        location: "abuja",
        expertiseYears: 30,
    },
    {
        fullName: "isabella hall",
        specialization: "pediatrician",
        email: "bella.hall@example.com",
        phoneNumber: "+2348023997711",
        bio: "Dr. Hall believes that every child deserves a healthy start in life. Her approach combines evidence-based medicine with a warm, empathetic demeanor, making her patients feel comfortable and valued. She specializes in managing chronic conditions such as asthma and diabetes, and she is particularly interested in nutrition and its impact on child development.",
        price: "5000",
        location: "lagos",
        expertiseYears: 8,
    },
    {
        fullName: "bimpe ayodele",
        specialization: "pediatrician",
        email: "bimpe.ayodele@example.com",
        phoneNumber: "+2348023997712",
        bio: "Dr. Ayodele emphasizes the importance of collaboration between parents and healthcare providers to ensure optimal outcomes for children. She specializes in developmental pediatrics and works closely with families to address concerns related to growth, behavior, and learning challenges.",
        price: "5000",
        location: "lagos",
        expertiseYears: 8,
    },
    {
        fullName: "amara ugoh",
        specialization: "pediatrician",
        email: "amara.ugoh@example.com",
        phoneNumber: "+2348023997713",
        bio: "Dr. Amara Ugoh, MD, is a dedicated pediatrician with over 10 years of experience in providing compassionate care to children and their families. After earning her medical degree from the University of California, San Francisco, she completed her residency at Children’s Hospital Los Angeles, where she developed a passion for preventive medicine and childhood wellness.",
        price: "8000",
        location: "abuja",
        expertiseYears: 12,
    },
    {
        fullName: "alex scott",
        specialization: "pediatrician",
        email: "alex.scott@example.com",
        phoneNumber: "+2348023997714",
        bio: "Dr. Alex Scott practice focuses on integrating telemedicine into routine pediatric care, ensuring that families have access to vital health services regardless of their location. Dr. Scott is also an advocate for mental health awareness in children and adolescents, believing that emotional well-being is just as important as physical health.",
        price: "10000",
        location: "lagos",
        expertiseYears: 12,
    },
    {
        fullName: "mia green",
        specialization: "physiotherapist",
        email: "mia.green@example.com",
        phoneNumber: "+2348023997715",
        bio: "Dr. Green believes in a patient-centered approach to care, emphasizing individualized treatment plans that address each patient's unique needs and goals. She utilizes a combination of manual therapy techniques, exercise prescription, and patient education to promote healing, reduce pain, and improve mobility.",
        price: "8000",
        location: "lagos",
        expertiseYears: 10,
    },
    {
        fullName: "mike lewis",
        specialization: "physiotherapist",
        email: "mike.lewis@example.com",
        phoneNumber: "+2348023997716",
        bio: "Dr. Mike Lewis is a highly experienced physiotherapist with a passion for helping patients achieve their optimal physical function and well-being. With over 18 years of experience in orthopedic, neurological, sports, he has a proven track record of success in treating a wide range of conditions, including back pain, stroke recovery, ACL injuries.",
        price: "14000",
        location: "abuja",
        expertiseYears: 18,
    },
    {
        fullName: "evelyn price",
        specialization: "physiotherapist",
        email: "eve.price@example.com",
        phoneNumber: "+2348023997717",
        bio: "Dr. Evelyn is a compassionate and results-oriented physiotherapist dedicated to helping individuals achieve their full physical potential. Recognizing that physical health is interconnected with overall well-being, she takes a holistic approach to patient care.",
        price: "10000",
        location: "lagos",
        expertiseYears: 10,
    },
    {
        fullName: "paul mitchell",
        specialization: "physiotherapist",
        email: "paul.mitchell@example.com",
        phoneNumber: "+2348023997718",
        bio: "Beyond treating specific injuries and conditions, Dr. Mitchell focuses on improving posture, enhancing movement patterns, and promoting a healthy lifestyle. He believes in empowering patients with the knowledge and tools to manage their own health and prevent future injuries. He creates a supportive and encouraging environment where patients can feel comfortable and confident in their recovery journey.",
        price: "9000",
        location: "lagos",
        expertiseYears: 12,
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
