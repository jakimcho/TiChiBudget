class User{
  constructor(userName, password){
    this._userName = userName;
    this._password = password
    this._firstName = "";
  }

  get userName(){
    return this._userName;
  }

  set userName(value){
    this._userName = value;
  }

  get password(){
    return this._password;
  }

  set password(value){
    this._password = value;
  }

  set firstName(value){
    this._firstName = value;
  }

  get firstName(){
    return this._firstName;
  }

}

export default User;
