import { supabase } from "./supabase";
import { v4 as uuidv4 } from "uuid";


export const getKey = async (file, bucket = "app") => {
    if (!file) return {};
    const fileExt = file.name.split(".").pop();
    const key = `${uuidv4()}.${fileExt}`;
    const { error } = await supabase.storage.from(bucket).upload(key, file);
    console.log(error);

    if (error) {
        return {};
    } else {
        return { key, name: file.name, ext: fileExt };
    }
};

export const getUrl = (
    key,
    bucket = 'app',
    defaultImage = 'img/menu/menu.jpg',
) => {
    if (!key) {
        return `/${defaultImage}`;
    }
    if (key.startsWith('http')) {
        return key;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(key);
    return data.publicUrl;
};