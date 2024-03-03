function validaAutor(autor) {
    const errors = [];
    if (!autor.nome) {
        errors.push("Nome do autor não pode ser vazio.");
    }
    if (!autor.email) {
        errors.push("E-mail do autor não pode ser vazio.");
    }
    else if (!isValidEmail(autor.email)) {
        errors.push("E-mail do autor é inválido.");
    }
    if (!autor.biografia) {
        errors.push("Biografia do autor não pode ser vazia.");
    }
    else if (autor.biografia.length < 100 || autor.biografia.length > 500) {
        errors.push("Biografia do autor deve ter entre 100 e 500 caracteres.");
    }
    return errors;
}
function cadastraAutor(autor) {
    const errors = validaAutor(autor);
    if (errors.length > 0) {
        console.log("Erro(s) ao cadastrar autor:");
        errors.forEach(error => console.log("- " + error));
    }
    else {
        autor.dataCadastro = new Date();
        console.log("Autor cadastrado com sucesso!");
        console.log("Detalhes do autor:");
        console.log(autor);
    }
}
function isValidEmail(email) {
    return true;
}

