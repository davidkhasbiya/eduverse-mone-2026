export type QuestStatus = "completed" | "in-progress" | "locked";

export interface Quest {
    id: string;
    slug: string;
    title: string;
    category: string;
    topic: string;
    description: string;
    status: QuestStatus;
}

export const quests: Quest[] = [
    {
        id: "quest-01",
        slug: "the-missing-numbers",
        title: "The Missing Numbers",
        category: "Aritmetika",
        topic: "Angka hilang",
        description: "Temukan angka yang hilang dan selesaikan tantangan aritmetika.",
        status: "completed",
    },
    {
        id: "quest-02",
        slug: "the-pizza-problem",
        title: "The Pizza Problem",
        category: "Pecahan",
        topic: "Pecahan dasar",
        description: "Pelajari pecahan dasar melalui tantangan berbagi pizza.",
        status: "in-progress",
    },
    {
        id: "quest-03",
        slug: "the-unknown-x",
        title: "The Unknown X",
        category: "Pola / Aljabar Dasar",
        topic: "Pola dan variabel dasar",
        description: "Temukan pola dan kenali variabel dasar dalam tantangan aljabar.",
        status: "locked",
    },
];
