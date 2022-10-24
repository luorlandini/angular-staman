import { Question } from "./question.model";
import { Answer } from "./answer.model";

export interface Quiz {
    id: number;
    description: string;
    question: Question;
    answer: Answer[];
}
