export class Todo {
    constructor(private done: boolean
        , private description: string) { }

    public setDescription(description: string) : void {
        this.description = description;
    }

    public setDone(done: boolean) : void {
        this.done = done;
    }
}