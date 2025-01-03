import { getSpecialists } from "../_lib/data-service";
import { SpecialistFilter } from "../_types";
import { filterSpecialists } from "../_utils/helpers";
import SpecialistCard from "./SpecialistCard";

// export const mockSpecialists = [
//     {
//         id: 1,
//         fullName: "Sarah Johnson",
//         specialization: "general practitioner",
//         email: "sarah.johnson@example.com",
//         phoneNumber: "+2348012345678",
//         profilePictureUrl: "/specialists/gp1.jpg",
//         bio: "An experienced GP with over 10 years of practice in family medicine, dedicated to providing comprehensive healthcare.",
//         price: 10000,
//         location: "lagos",
//         expertiseYears: 10,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//     },
//     {
//         id: 2,
//         fullName: "Michael Adewale",
//         specialization: "pediatrician",
//         email: "michael.adewale@example.com",
//         phoneNumber: "+2348098765432",
//         profilePictureUrl: "/specialists/pd1.jpg",
//         bio: "Specialist in child healthcare, focusing on early development and preventive care for children and infants.",
//         price: 15000,
//         location: "abuja",
//         expertiseYears: 15,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//     },
//     {
//         id: 3,
//         fullName: "Fatima Yusuf",
//         specialization: "gynecologist",
//         email: "fatima.yusuf@example.com",
//         phoneNumber: "+2348076543210",
//         profilePictureUrl: "/specialists/gyn1.jpg",
//         bio: "Expert in women's health, committed to providing compassionate care for patients at every stage of life.",
//         price: 12000,
//         location: "lagos",
//         expertiseYears: 12,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//     },
//     {
//         id: 4,
//         fullName: "James Ogbu",
//         specialization: "dentist",
//         email: "james.ogbu@example.com",
//         phoneNumber: "+2348065432109",
//         profilePictureUrl: "/specialists/dent1.jpg",
//         bio: "Board-certified dermatologist with expertise in managing skin conditions and cosmetic treatments.",
//         price: 8000,
//         location: "rivers",
//         expertiseYears: 8,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//     },
//     {
//         id: 5,
//         fullName: "Chinwe Okafor",
//         specialization: "ophthamologist",
//         email: "chinwe.okafor@example.com",
//         phoneNumber: "+2348034567890",
//         profilePictureUrl: "/specialists/opt1.jpg",
//         bio: "Highly skilled cardiologist focusing on heart health and preventive care for cardiovascular diseases.",
//         price: 10000,
//         location: "lagos",
//         expertiseYears: 15,
//         createdAt: new Date().toISOString(),
//         updatedAt: new Date().toISOString(),
//     },
// ];

async function SpecialistList({ filter }: { filter: SpecialistFilter }) {
    const specialists = await getSpecialists();
    // console.log(specialists);

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 xl:gap-14'>
            {filterSpecialists(filter, specialists).map(specialist => (
                <SpecialistCard key={specialist.id} specialist={specialist} />
            ))}
        </div>
    );
}

export default SpecialistList;
