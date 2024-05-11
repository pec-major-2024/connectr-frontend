import { get } from "./rest";

export const getMatches = async (noteId) => {
    const res = await get(`matching?noteId=${noteId}`);
    return res;
}