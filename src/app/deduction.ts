export class Deduction {
    public type: string;
    public description: string;
    public amount: number;
    constructor(type: string, description: string, amount: number){
        this.type = type;
        this.description = description;
        this.amount = amount;
    }
}
