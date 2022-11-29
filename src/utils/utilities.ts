export default class Utilities{
    public formatAppID(appID : string){
        //const app1 = 'automation2022-1-bOosa9jORstRRBQ6itcQ2V2I37tqL2MG8koEeTJu'
        return appID.split(`-`)[2]+`.`+appID.split(`-`)[0]+`-`+appID.split(`-`)[1];
    }
}