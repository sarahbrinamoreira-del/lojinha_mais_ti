const Database = require ('better-sqlite3');

class ConexaoBanco {



    this._criarTabela ();
}

_criarTabela (){
    const sql = 

`CREATE TABLE PRODUTOS (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nome TXT NOT NULL,
valor REAL NOT NULL,
qtd INTEGER NOT NULL
)`

    this.db.prepare(sql).run();
}

module.exports = new ConexaoBanco().db;
