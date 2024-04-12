import { BenefitType } from "./benefit-type";

export class Benefit {
    id: number;
    name: string;
    type: BenefitType;
    description: string;
    backgroundImageUri: string;


    constructor(id: number, name: string, type: BenefitType, description: string,backgroundImageUri: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.backgroundImageUri = backgroundImageUri;
    }
}
