CREATE TABLE tb_usuarios(
    id_usuario INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(150) NOT NULL,
    imagem VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id_usuario)
);

CREATE TABLE tb_conteudos(
    id_conteudo INT AUTO_INCREMENT NOT NULL,
    id_usuario INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    texto VARCHAR(255) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    link VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id_conteudo),
    FOREIGN KEY(id_usuario) REFERENCES tb_usuarios(id_usuario) ON DELETE CASCADE
);

CREATE TABLE tb_comentarios(
    id_comentario INT AUTO_INCREMENT NOT NULL,
    id_conteudo INT NOT NULL,
    id_usuario INT NOT NULL,
    texto VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id_comentario),
    FOREIGN KEY(id_conteudo) REFERENCES tb_conteudos(id_conteudo) ON DELETE CASCADE,
    FOREIGN KEY(id_usuario) REFERENCES tb_usuarios(id_usuario) ON DELETE CASCADE
);

CREATE TABLE tb_amigos(
    id_usuario INT NOT NULL,
    amigo_id INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuarios(id_usuario)  ON DELETE CASCADE,
    FOREIGN KEY (amigo_id) REFERENCES tb_usuarios(id_usuario)  ON DELETE CASCADE
);

CREATE TABLE tb_curtidas (
     id_usuario INT NOT NULL,
     id_conteudo INT NOT NULL,
     FOREIGN KEY (id_usuario) REFERENCES tb_usuarios(id_usuario)  ON DELETE CASCADE,
      FOREIGN KEY(id_conteudo) REFERENCES tb_conteudos(id_conteudo) ON DELETE CASCADE
);


