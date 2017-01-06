export class Todo {
    public DisplayName: string;
    public status: boolean;
    public Id: number;
    public Path: string;

    constructor(DisplayName: string, status, Id: number, Path: string){
        this.DisplayName = DisplayName;
        this.status = status[0] === 'active' ? true : false;
        this.Id = Id;
        this.Path = Path;
    }
}