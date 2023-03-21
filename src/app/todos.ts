export interface Todos {
    id: number;
    todo: string;
    completed: boolean;
    favorite?:boolean;
    description?: string;
    isDeleted?: boolean;

}
