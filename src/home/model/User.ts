export class User{

    username:string;
	password:string;
	email:string;
	user_role:string;
	interests:string[];
	arr_time:number;
    is_subscribed:boolean;
    
    constructor(username:string,password:string,email:string,user_role:string,interests:string[],arr_time:number,is_subscribed:boolean){
        this.username = username;
        this.password = password;
        this.email = email;
        this.user_role = user_role;
        this.arr_time = arr_time;
        this.interests = interests;
        this.is_subscribed = is_subscribed;
    }
}