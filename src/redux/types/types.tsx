interface initialStatetypes{
    email:string,
    password:string,
    loader:boolean,
    message:string,
    accessToken:string,
    refreshToken:string,
    redirect:boolean
}
export const initialState:initialStatetypes={
    email:"",
    password:"",
    message:"auth needed",
    accessToken:"",
    refreshToken:"",
    loader:false,
    redirect:false
}
export type actions =
  | ChangeEmail
  | ChangePassword
  | ChangeAccessToken
  | ChangeRefreshToken
  | ChangeLoader
  | ChangeMessage
  | ChangeRedirect
export enum actionTypes {
ChangeEmail="CHANGE_EMAIL",
ChangePassword="CHANGE_PASSWORD",
ChangeAccessToken="CHANGE_ACCESS_TOKEN",
ChangeRefreshToken="CHANGE_REFRESH_TOKEN",
ChangeLoader="CHANGE_LOADER",
ChangeMessage="CHANGE_MESSAGE",
ChangeRedirect="CHANGE_REDIRECT"
}


interface ChangeEmail {
  type: actionTypes.ChangeEmail;
  payload: any;
}
interface ChangePassword {
  type: actionTypes.ChangePassword;
  payload: any;
}
interface ChangeMessage {
  type: actionTypes.ChangeMessage;
  payload: any;
}
interface ChangeLoader {
  type: actionTypes.ChangeLoader;
  payload: any;
}
interface ChangeRedirect {
  type: actionTypes.ChangeRedirect;
  payload: any;
}
interface ChangeAccessToken {
  type: actionTypes.ChangeAccessToken;
  payload: any;
}
interface ChangeRefreshToken {
  type: actionTypes.ChangeRefreshToken;
  payload: any;
}