export class Model
{
    user: string='';
    items: any = [];

    constructor()
    {
        this.user='Stefan';
        this.items=
        [
            {action:'learn', done:false},
            {action:'work', done:false},
            {action:'play', done:false},
            {action:'buy stuff', done:false},
            {action:'sleep', done:false},
        ];
    }
}


export class TodoItem
{
    action;
    done;

    constructor(action, done)
    {
        this.action=action;
        this.done=done;
    }
}