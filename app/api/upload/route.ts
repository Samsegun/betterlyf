import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { specialistsTable } from "@/app/_db/schema";
import { db } from "@/app/_db";
import { sql } from "drizzle-orm";

// This would go in your API route handler (e.g., app/api/upload/route.ts)
export async function POST(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const filename = searchParams.get("filename");
        const specialistId = searchParams.get("specialistId");

        if (!filename || !specialistId) {
            return NextResponse.json(
                { error: "Filename and specialistId are required" },
                { status: 400 }
            );
        }

        // Handle the file upload
        const formData = await request.formData();
        const file: File | null = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file received" },
                { status: 400 }
            );
        }

        // Upload to Vercel Blob
        const blob = await put(filename, file, {
            access: "public", // Make the image publicly accessible
        });

        // Update the specialist record with the new image URL
        await db
            .update(specialistsTable)
            .set({ profilePictureUrl: blob.url })
            .where(sql`id = ${specialistId}`);

        return NextResponse.json({ url: blob.url });
    } catch (error) {
        console.error("Upload error:", error);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
