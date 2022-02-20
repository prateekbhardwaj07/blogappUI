export enum usertypes {
    AUTHOR = 'Author',
    EDITOR = 'Editor',
    ADMIN = 'Admin'
}
export class User {

    uid:number;
    username:string;
	password:string;
	email:string;
	role_id:number;
	interests:string[];
	arr_time:number;
    is_subscribed:boolean;
    
    
    constructor(uid:number,username:string,password:string,email:string,role_id:number,interests:string[],arr_time:number,is_subscribed:boolean){
        this.uid=uid;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role_id = role_id;
        this.arr_time = arr_time;
        this.interests = interests;
        this.is_subscribed = is_subscribed;
    }

    static decodeToJSON(user:User):any{
        return {
            'username':user.username,
            'password':user.password,
            'email':user.email,
            'role_id':user.role_id+1,
            'arr_time':user.arr_time,
            'interests':user.interests,
            'is_subscribed':user.is_subscribed
        };
    }
    
}