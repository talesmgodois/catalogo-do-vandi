export class Catalogo {
  public nome: string;
  public img: string;
  public url: string;

  constructor (nome: string, url: string, img: string) {
    this.nome = nome;
    this.url = url;
    this.img = img;
  }
}