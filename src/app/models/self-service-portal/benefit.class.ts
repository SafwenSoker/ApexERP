import { BenefitType } from "./benefit-type";

export class Benefit {
    private id: Number;
    name: String;
    type: BenefitType;
    description: String;
    backgroundImage: String;


    constructor(id: Number, name: String, type: BenefitType, description: String,backgroundImage: String) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.description = description;
        this.backgroundImage = backgroundImage;
    }
}
