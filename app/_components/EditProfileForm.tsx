"use client";

import { updatePatient } from "../_lib/actions";
import { PatientType } from "../_types";
import SubmitButton from "./SubmitButton";
import { useLoggedInUser } from "./UserContext";

export function EditProfileForm({ patient }: { patient: PatientType }) {
    const { user } = useLoggedInUser();

    return (
        <div className='rounded-lg bg-white shadow-2xl'>
            <form
                action={updatePatient}
                className='py-8 px-6 md:px-12 text-lg flex gap-6 flex-col'>
                <div className='space-y-2'>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        name='fullName'
                        id='fullName'
                        className='bg-[#DCEBFF] capitalize text-[#12356B] px-5 py-3 w-full shadow-sm outline-none rounded-sm cursor-not-allowed'
                        required
                        readOnly
                        defaultValue={user?.fullName || ""}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='email'>Email</label>
                    <input
                        name='email'
                        id='email'
                        type='email'
                        className='bg-[#DCEBFF] text-[#12356B] px-5 py-3 w-full shadow-sm outline-none rounded-sm cursor-not-allowed'
                        required
                        readOnly
                        defaultValue={user?.email || ""}
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='gender'>Gender</label>

                    <select
                        name='gender'
                        id='gender'
                        className='bg-white text-[#12356B] border border-[#DCEBFF] focus:outline-none focus:ring-2 focus:ring-primary-blue px-5 py-3 w-full shadow-sm rounded-sm'
                        defaultValue={patient.gender || undefined}>
                        <option value='' key=''>
                            Select Gender...
                        </option>
                        <option value='male'>male</option>
                        <option value='female'>female</option>
                        <option value='other'>other</option>
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor='dateOfBirth'>Date of Birth</label>

                    <input
                        name='dateOfBirth'
                        id='dateOfBirth'
                        defaultValue={String(patient.dateOfBirth!) || undefined}
                        type='date'
                        className='bg-white text-[#12356B] border border-[#DCEBFF] focus:outline-none focus:ring-2 focus:ring-primary-blue px-5 py-3 w-full shadow-sm rounded-sm'
                    />
                </div>

                <div className='flex justify-end items-center gap-6'>
                    <SubmitButton pendingLabel={"Updating..."}>
                        Update profile
                    </SubmitButton>
                </div>
            </form>
        </div>
    );
}
