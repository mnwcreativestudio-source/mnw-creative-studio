import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type InquiryRow = {
  id?: string;
  name: string;
  email: string;
  business_name?: string | null;
  project_type?: string | null;
  message: string;
  created_at?: string;
};

export type SubmitInquiryInput = {
  name: string;
  email: string;
  business?: string | null;
  projectType?: string | null;
  message: string;
};

let cachedClient: SupabaseClient | null = null;

/**
 * Returns the initialized Supabase client with public anon key.
 * Throws a descriptive error if environment variables are not configured.
 */
export function getSupabase(): SupabaseClient {
  if (cachedClient) {
    return cachedClient;
  }

  const supabaseUrl =
    (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SUPABASE_URL) ||
    (typeof process !== "undefined" && (process.env?.VITE_SUPABASE_URL || process.env?.SUPABASE_URL)) ||
    "";

  const supabaseAnonKey =
    (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_SUPABASE_ANON_KEY) ||
    (typeof process !== "undefined" && (process.env?.VITE_SUPABASE_ANON_KEY || process.env?.SUPABASE_ANON_KEY)) ||
    "";

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase configuration is missing. Please ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables are configured.",
    );
  }

  cachedClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return cachedClient;
}

/**
 * Validates and submits an inquiry to the Supabase `inquiries` table.
 * Adheres strictly to INSERT-only permissions under Row Level Security (RLS).
 */
export async function submitInquiry(input: SubmitInquiryInput): Promise<{ success: boolean }> {
  const name = input.name?.trim() || "";
  const email = input.email?.trim().toLowerCase() || "";
  const message = input.message?.trim() || "";
  const businessName = input.business?.trim() || null;
  const projectType = input.projectType?.trim() || null;

  // Validation
  if (!name || name.length < 2) {
    throw new Error("Please enter your name (at least 2 characters).");
  }

  if (name.length > 100) {
    throw new Error("Name must be 100 characters or fewer.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (email.length > 255) {
    throw new Error("Email address must be 255 characters or fewer.");
  }

  if (!message || message.length < 5) {
    throw new Error("Please enter a message (at least 5 characters).");
  }

  if (message.length > 5000) {
    throw new Error("Message must be 5000 characters or fewer.");
  }

  const client = getSupabase();

  // Perform INSERT without .select() so it works seamlessly under INSERT-only RLS policy
  const { error } = await client.from("inquiries").insert([
    {
      name,
      email,
      business_name: businessName,
      project_type: projectType,
      message,
    },
  ]);

  if (error) {
    console.error("Supabase inquiry insert error:", error);
    throw new Error(error.message || "Failed to submit inquiry to database. Please try again.");
  }

  return { success: true };
}
