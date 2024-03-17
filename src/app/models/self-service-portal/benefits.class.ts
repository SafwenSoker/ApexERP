import { BenefitType } from "./benefit-type";

export class Benefits {
    private benefitType: BenefitType;
    private description:String;

    constructor(benefitType: BenefitType, description: String) {
        this.benefitType = benefitType;
        this.description = description;
    }
}
