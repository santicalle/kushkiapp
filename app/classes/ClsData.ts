export class Data {

    private _mineralValues: Array<any> = [
        { option: "gold", value: 14450 },
        { option: "iron", value: 195.5 },
        { option: "silver", value: 17 },
        { option: "none", value: 1 }
    ];
    public get mineralValues() : Array<any> {
        return this._mineralValues;
    }
    public set mineralValues(v : Array<any>) {
        this._mineralValues = v;
    }

    private _romanNumbers: Array<any> = [
        { option: "I", value: 1 },
        { option: "V", value: 5 },
        { option: "X", value: 10 },
        { option: "L", value: 50 },
        { option: "C", value: 100 },
        { option: "D", value: 500 },
        { option: "M", value: 1000 },        
    ];
    public get romanNumbers() : Array<any> {
        return this._romanNumbers;
    }
    public set romanNumbers(v : Array<any>) {
        this._romanNumbers = v;
    }
    
    private _units: Array<any> = [
        { option: "glob", value: "I" },
        { option: "prok", value: "V" },
        { option: "pish", value: "X" },
        { option: "tegj", value: "L" }
    ];
    public get units() : Array<any> {
        return this._units;
    }
    public set units(v : Array<any>) {
        this._units = v;
    }


    private _total : number = 0;
    public get total() : number {
        return this._total;
    }
    public set total(v : number) {
        this._total = v;
    }


    // private _previousRomanNumber : string = '';
    // public get previousNumber() : string {
    //     return this._previousRomanNumber;
    // }
    // public set previousNumber(v : string) {
    //     this._previousRomanNumber = v;
    // }


    private _repeat : number = 0;
    public get repeat() : number {
        return this._repeat;
    }
    public set repeat(v : number) {
        this._repeat = v;
    }

}