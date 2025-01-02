"use client";

import { useState } from "react";

export function ProfileImageUpload({ specialistId }: { specialistId: string }) {
    const [uploading, setUploading] = useState(false);

    async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files?.[0]) return;

        setUploading(true);
        const file = event.target.files[0];
        // const filename = `specialist-${specialistId}-${Date.now()}-${
        //     file.name
        // }`;
        const filename = createUniqueFileName(file, specialistId);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch(
                `/api/upload?filename=${encodeURIComponent(
                    filename
                )}&specialistId=${specialistId}`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json();
            console.log("Upload successful:", data.url);

            // You might want to update your UI here with the new image URL
        } catch (error) {
            console.error("Upload error:", error);
        } finally {
            setUploading(false);
        }
    }

    return (
        <div>
            <input
                type='file'
                accept='image/*'
                onChange={handleUpload}
                disabled={uploading}
            />
            {uploading && <p>Uploading...</p>}
        </div>
    );
}

const createUniqueFileName = (originalFile: File, specialistId: string) => {
    // Get the file extension from the original file
    const extension = originalFile.name.split(".").pop();

    // Take just the first 8 characters of the specialistId
    const shortId = specialistId.slice(0, 8);

    // Use a shorter timestamp (last 6 digits)
    const shortTimestamp = Date.now().toString().slice(-6);

    // Combine them with underscores for better readability
    return `sp_${shortId}_${shortTimestamp}.${extension}`;
};
