export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          appointmentDate: string
          created_at: string
          fullName: string
          id: number
          patientId: string
          phoneNumber: string
          purposeOfVisit: string | null
          specialistId: number
          status: string
          timeSlot: string
          updated_at: string
        }
        Insert: {
          appointmentDate: string
          created_at?: string
          fullName: string
          id?: number
          patientId: string
          phoneNumber: string
          purposeOfVisit?: string | null
          specialistId: number
          status: string
          timeSlot: string
          updated_at?: string
        }
        Update: {
          appointmentDate?: string
          created_at?: string
          fullName?: string
          id?: number
          patientId?: string
          phoneNumber?: string
          purposeOfVisit?: string | null
          specialistId?: number
          status?: string
          timeSlot?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_patientId_fkey"
            columns: ["patientId"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["userId"]
          },
          {
            foreignKeyName: "bookings_specialistId_fkey"
            columns: ["specialistId"]
            isOneToOne: false
            referencedRelation: "specialists"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          created_at: string
          dateOfBirth: string | null
          gender: string | null
          id: number
          updated_at: string
          userId: string
        }
        Insert: {
          created_at?: string
          dateOfBirth?: string | null
          gender?: string | null
          id?: number
          updated_at?: string
          userId: string
        }
        Update: {
          created_at?: string
          dateOfBirth?: string | null
          gender?: string | null
          id?: number
          updated_at?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "patients_userId_fkey"
            columns: ["userId"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["clerkId"]
          },
        ]
      }
      specialists: {
        Row: {
          bio: string | null
          created_at: string
          email: string
          experience: number | null
          fullName: string
          id: number
          imageUrl: string | null
          location: string | null
          phoneNumber: string | null
          price: number
          specialization: string
          updated_at: string
          userId: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string
          email: string
          experience?: number | null
          fullName: string
          id?: number
          imageUrl?: string | null
          location?: string | null
          phoneNumber?: string | null
          price: number
          specialization: string
          updated_at?: string
          userId?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string
          email?: string
          experience?: number | null
          fullName?: string
          id?: number
          imageUrl?: string | null
          location?: string | null
          phoneNumber?: string | null
          price?: number
          specialization?: string
          updated_at?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "specialists_userId_fkey"
            columns: ["userId"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["clerkId"]
          },
        ]
      }
      users: {
        Row: {
          clerkId: string
          created_at: string
          email: string
          fullName: string
          id: number
          imageUrl: string | null
          phoneNumber: string | null
          role: string
          updated_at: string
        }
        Insert: {
          clerkId: string
          created_at?: string
          email: string
          fullName: string
          id?: number
          imageUrl?: string | null
          phoneNumber?: string | null
          role?: string
          updated_at?: string
        }
        Update: {
          clerkId?: string
          created_at?: string
          email?: string
          fullName?: string
          id?: number
          imageUrl?: string | null
          phoneNumber?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
