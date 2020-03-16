class User
{
   SetUserDetails(username, password)
    {
        this.UserName = username;
        this.Password = password;
    }
}

User.prototype.ValidateUser(username, password)
{
    return username === this.UserName && password === this.Password;
}