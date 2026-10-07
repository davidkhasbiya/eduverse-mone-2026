export type QuestionDifficulty = "easy" | "medium";

export interface Question {
    id: string;
    questSlug: string;
    question: string;
    options: string[];
    correctOption: string;
    explanation: string;
    difficulty: QuestionDifficulty;
    topic: string;
}

export const questions: Question[] = [
    { id: "missing-01", questSlug: "the-missing-numbers", question: "12 + ? = 20", options: ["6", "7", "8", "9"], correctOption: "8", explanation: "12 + 8 = 20.", difficulty: "easy", topic: "arithmetic" },
    { id: "missing-02", questSlug: "the-missing-numbers", question: "25 - ? = 10", options: ["10", "12", "15", "20"], correctOption: "15", explanation: "25 - 15 = 10.", difficulty: "easy", topic: "arithmetic" },
    { id: "missing-03", questSlug: "the-missing-numbers", question: "7 × ? = 42", options: ["5", "6", "7", "8"], correctOption: "6", explanation: "7 × 6 = 42.", difficulty: "easy", topic: "arithmetic" },
    { id: "missing-04", questSlug: "the-missing-numbers", question: "48 ÷ ? = 6", options: ["6", "7", "8", "9"], correctOption: "8", explanation: "48 ÷ 8 = 6.", difficulty: "easy", topic: "arithmetic" },
    { id: "missing-05", questSlug: "the-missing-numbers", question: "19 + ? = 31", options: ["10", "11", "12", "13"], correctOption: "12", explanation: "19 + 12 = 31.", difficulty: "easy", topic: "arithmetic" },
    { id: "pizza-01", questSlug: "the-pizza-problem", question: "A pizza is divided into 8 equal pieces. David eats 3 pieces. What fraction did he eat?", options: ["3/8", "3/5", "5/8", "8/3"], correctOption: "3/8", explanation: "He ate 3 of 8 equal pieces, so the fraction is 3/8.", difficulty: "easy", topic: "fractions" },
    { id: "pizza-02", questSlug: "the-pizza-problem", question: "What is 1/2 + 1/4?", options: ["1/4", "2/4", "3/4", "4/4"], correctOption: "3/4", explanation: "1/2 is 2/4, and 2/4 + 1/4 = 3/4.", difficulty: "easy", topic: "fractions" },
    { id: "pizza-03", questSlug: "the-pizza-problem", question: "Which fraction is equal to 2/4?", options: ["1/2", "1/3", "2/3", "3/4"], correctOption: "1/2", explanation: "Dividing the numerator and denominator by 2 gives 1/2.", difficulty: "easy", topic: "fractions" },
    { id: "pizza-04", questSlug: "the-pizza-problem", question: "A pizza has 10 slices. If 7 are left, what fraction is left?", options: ["3/10", "7/10", "7/3", "10/7"], correctOption: "7/10", explanation: "7 of the 10 slices are left, so the fraction is 7/10.", difficulty: "easy", topic: "fractions" },
    { id: "pizza-05", questSlug: "the-pizza-problem", question: "Which is greater?", options: ["1/4", "1/2", "They are equal", "Cannot tell"], correctOption: "1/2", explanation: "One half is greater than one quarter.", difficulty: "easy", topic: "fractions" },
    { id: "unknown-x-01", questSlug: "the-unknown-x", question: "x + 5 = 12. What is x?", options: ["5", "6", "7", "8"], correctOption: "7", explanation: "12 - 5 = 7, so x = 7.", difficulty: "easy", topic: "patterns and variables" },
    { id: "unknown-x-02", questSlug: "the-unknown-x", question: "x - 4 = 9. What is x?", options: ["5", "11", "13", "14"], correctOption: "13", explanation: "9 + 4 = 13, so x = 13.", difficulty: "easy", topic: "patterns and variables" },
    { id: "unknown-x-03", questSlug: "the-unknown-x", question: "2 × x = 16. What is x?", options: ["6", "7", "8", "9"], correctOption: "8", explanation: "16 ÷ 2 = 8, so x = 8.", difficulty: "easy", topic: "patterns and variables" },
    { id: "unknown-x-04", questSlug: "the-unknown-x", question: "The pattern is 3, 6, 9, __. What comes next?", options: ["10", "11", "12", "13"], correctOption: "12", explanation: "The pattern adds 3 each time.", difficulty: "easy", topic: "patterns and variables" },
    { id: "unknown-x-05", questSlug: "the-unknown-x", question: "If x = 4, what is x + 6?", options: ["8", "9", "10", "12"], correctOption: "10", explanation: "4 + 6 = 10.", difficulty: "easy", topic: "patterns and variables" },
];
