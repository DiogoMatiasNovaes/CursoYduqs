interface Autor {
  nome: string;
  email: string;
  biografia: string;
  dataCadastro?: Date;
}

function validaAutor(autor: Autor): string[] {
  const errors: string[] = [];

  if (!autor.nome) {
    errors.push("Nome do autor não pode ser vazio.");
  }

  if (!autor.email) {
    errors.push("E-mail do autor não pode ser vazio.");
  } else if (!isValidEmail(autor.email)) {
    errors.push("E-mail do autor é inválido.");
  }

  if (!autor.biografia) {
    errors.push("Biografia do autor não pode ser vazia.");
  } else if (autor.biografia.length < 100 || autor.biografia.length > 500) {
    errors.push("Biografia do autor deve ter entre 100 e 500 caracteres.");
  }

  return errors;
}

function cadastraAutor(autor: Autor): void {
  const errors = validaAutor(autor);

  if (errors.length > 0) {
    console.log("Erro(s) ao cadastrar autor:");
    errors.forEach(error => console.log("- " + error));
  } else {
    
    autor.dataCadastro = new Date();
    console.log("Autor cadastrado com sucesso!");
    console.log("Detalhes do autor:");
    console.log(autor);
  }
}


function isValidEmail(email: string): boolean {

  return true;
}


export { Autor, cadastraAutor };
