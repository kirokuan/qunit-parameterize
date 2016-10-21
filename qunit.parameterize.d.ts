interface QUnit {
    cases(c:any[]):QUnit;
    test(name:string,callback:(param:any,assert:Assert)=>void):void;
}