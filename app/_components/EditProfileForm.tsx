"use client";

import { updatePatient } from "../_lib/actions";
import { PatientType } from "../_types";
import SubmitButton from "./SubmitButton";
import { useLoggedInUser } from "./UserContext";

export function EditProfileForm({ patient }: { patient: PatientType }) {
    const { user } = useLoggedInUser();

    return (
        <div className='rounded-lg shadow-2xl'>
            <form
                action={updatePatient}
                className='bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col'>
                <div className='space-y-2'>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        name='fullName'
                        id='fullName'
                        className='bg-[#2f4978] capitalize text-gray-300 px-5 py-3 w-full shadow-sm outline-none rounded-sm cursor-not-allowed'
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
                        className='bg-[#2f4978] text-gray-300 px-5 py-3 w-full shadow-sm outline-none rounded-sm cursor-not-allowed'
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
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
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
                        className='bg-[#1b2b47] px-5 py-3 w-full shadow-sm rounded-sm'
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
