export const formatAgo = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) return `${h} ч ${m} мин ${s} сек`;

    if (m > 0) return `${m} мин ${s} сек`;

    return `${s} сек`;
}
