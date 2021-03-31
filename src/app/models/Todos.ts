export class Todo {
    public id: string;
    public title: string;
    public completed: boolean;

    constructor(id:string, tit:string, comp:boolean){
        this.id= id;
        this.title=tit;
        this.completed=comp;
    }
} 

//short syntax 
/*export class Todo {
   constructor(public id:number,public title:string, public completed:boolean){} 
}*/