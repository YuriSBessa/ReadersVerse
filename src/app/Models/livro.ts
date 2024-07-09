export class Livro {
    id: number;
    titulo: string;
    autor: string;
    genero: string;
    dataPublicacao: Date
    editora: string;
    preco: number;
    quantidade: number;
    imagem_url: string;
    descricao: string;
    disponibilidade: boolean;

    constructor(id: number, titulo: string, autor: string, genero: string, dataPublicacao: Date, editora: string, preco: number, quantidade: number, imagem_url: string, descricao: string, disponibilidade: boolean){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.dataPublicacao = dataPublicacao;
        this.editora = editora;
        this.preco = preco;
        this.quantidade = quantidade;
        this.imagem_url = imagem_url;
        this.descricao = descricao;
        this.disponibilidade = disponibilidade;
    }
}