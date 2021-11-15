export interface Update {
    update: boolean
}
export interface ToUpdate {
    toUpdate: (e: boolean) => boolean
}
export interface Task {
    taskName: { value: string[] }
}

export interface MainData {
    id: number,
    content: string
}
export interface Datatype {
    GetListReducer: {
        data: MainData[],
        loading: boolean
    }
}

interface DispatchData {
    type:string,
    payload:{}
}
export interface Dispatch {
    type:string,
    payload:{}
    
}
// export interface MyInterface extends Array<MainData> { }
// export interface Data {
//     GetListReducer:{data:Datatype}
// }
