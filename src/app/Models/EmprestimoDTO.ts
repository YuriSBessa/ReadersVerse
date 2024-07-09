export class EmprestimoDTO{
    id : number;
    userId : string;
    titulo : string;
    autor : string;
    genero : string;
    dataEmprestimo : Date;
    dataDevolucaoPrevista : Date;
    dataDevolucaoEfetiva : string;
    status : number;

    constructor(id : number, userId : string, titulo : string, autor : string, genero : string, dataEmprestimo : Date, dataDevolucaoPrevista : Date, dataDevolucaoEfetiva : string, status : number){
        this.id = id
        this.userId = userId;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
        this.status = status;
    }
}