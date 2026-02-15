export interface ISharedAuthProps {
  email: string;
  password: string
}

export interface ICreateAccountProps extends ISharedAuthProps{
    fullname: string
}