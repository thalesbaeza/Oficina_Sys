import sqlite3


def Conectar(string):
    conexao = sqlite3.connect('oficina_car.db')
    conexao.isolation_level = None
    cursor = conexao.cursor()
    
    sql = ""
    
    while True:
        line = string 
        if line == "":
            break
        sql += line
        if sqlite3.complete_statement(sql):
            try:
                sql = sql.strip()
                cursor.execute(sql)
            
                if sql.lstrip().upper().startswith("SELECT"):
                    print(cursor.fetchall())
                    break

            except sqlite3.Error as e:
                print("Erro ao executar a query", e.args[0])
                sql = ""
        else:
            break

    




