export class UsuarioCadastroRequest{
    name : string;
    password : string
    confirmPassword : string

    constructor(name : string, password : string, confirmPassword : string) {
        this.name = name;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}