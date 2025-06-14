import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export const getImageUrl = (name: string) => {
    const { data } = supabase.storage.from("belanja").getPublicUrl(`public/brands/${name}`);

    return data.publicUrl;
};

export const uploadFile = async (file: File, path: "brands" | "products" = "brands") => {
    const fileType = file.type.split("/")[1];
    const filename = `${path}-${Date.now()}.${fileType}`;
    await supabase.storage.from("belanja").upload(`public/${path}/${filename}`, file, {
        cacheControl: "3600",
        upsert: false,
    });

    return filename;
};
