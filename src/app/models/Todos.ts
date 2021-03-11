export class Todo {
    public id: number;
    public title: string;
    public completed: boolean;

    constructor(id:number, tit:string, comp:boolean){
        this.id= id;
        this.title=tit;
        this.completed=comp;
    }
} 

//short syntax 
/*export class Todo {
   constructor(public id:number,public title:string, public completed:boolean){} 
}*/