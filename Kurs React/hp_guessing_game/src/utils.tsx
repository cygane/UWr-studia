export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export const randomEntries = (arr: any[], limit: number) => {
    const shuffled = arr.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, limit);
};