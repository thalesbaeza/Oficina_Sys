import sqlite3
from datetime import datetime
import os 
import conexao

clear = lambda: os.system('cls')

#ABERTURA DA APLICAÇÃO
while True:
    print("*************************")
    print("*************************")
    escolha =  input("1-) DEMONSTRATIVO DE FLUXO DE CAIXA \n2-) CONTROLE DE ESTOQUE \n \n Qual é a opção desejada: ")
    clear()
    if escolha == '1': 
        break
    elif escolha == '2': 
        break
    else:
        True


if escolha == '1': #DEMONSTRATIVO DE FLUXO DE CAIXA
    modelo = input("Inserir o modelo do Carro: ")
    clear()
    data_inicial = datetime.today()
    valores = 0
    valorReponsive = 'sim'

    valorIncial = input("Informe o valor inicial de compra: ")
    clear()
    if modelo != '':
        while valorReponsive == 'sim':
            valor = int(input("Inserir o valor da peça: "))
            valores += valor
            clear()

            valorReponsive = input("Precisa Inserir mais valores? (sim/não)")
    else:
        modelo = input("Inserir o modelo do Carro: ")
        clear()
        
    valorVenda = input("Inserir o valor de venda: ")
    clear()
    
    print("*******************************")
    print("DEMONSTRATIVO DE FLUXO DE CAIXA")
    print("*******************************")
    print("MODELO DO CARRO: ",modelo.upper())
    print("*******************************")
    print("")
    print("VALOR DE RECEITA: ",valorVenda)
    print("*******************************")
    print("DESPESAS OPERACIONAIS")
    print("*******************************")
    print("VALOR INICIAL INVESTIDO: ",valorIncial)
    print("TOTAL GASTO EM PEÇAS: ",valores)
    print("*******************************")
    
    lucro = int(valorVenda) - (int(valorIncial) + valores)
    print("") 
    print("***********LUCRO***************")
    print("LUCRO : ", lucro)
    print("*******************************")

    data_final = datetime.today()

    dataPedido = [modelo,data_inicial,data_final, valorIncial, valores, int(valorVenda), lucro]

    con = sqlite3.connect('oficina_car.db')

    cur = con.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS pedidos (id INTEGER PRIMARY KEY AUTOINCREMENT, modelo_carro TEXT, data_inicial DATETIME, data_final DATETIME, vls_compra REAL, vls_total_pecas REAL , vls_venda REAL, vls_lucro REAL )''')
    cur.execute('''INSERT INTO pedidos (modelo_carro, data_inicial, data_final, vls_compra, vls_total_pecas, vls_venda, vls_lucro ) VALUES (?, ?, ?, ?, ?, ?,?)''', dataPedido)

    con.commit()
    con.close()

elif escolha == '2': #DEMONSTRATIVO DE FLUXO DE CAIXA
    while True:
        controleEstoque =  input("1-) INSERIR PEÇA NO ESTOQUE \n2-) RETIRAR PEÇA DO ESTOQUE \n3-) MOSTRAR ITENS EM ESTOQUE \n Qual é a opção desejada: ")
        clear()
        if controleEstoque == '1':
            break
        elif controleEstoque == '2': 
            break
        elif controleEstoque == '3':
            break
        else:
            True

    con = sqlite3.connect('oficina_car.db')

    cur = con.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS estoque (id INTEGER PRIMARY KEY AUTOINCREMENT, sku INT, modelo_peca TEXT, data DATETIME, qtd INT, tipo INT)''')

    con.commit()
    con.close()

    response = 'sim'

    if controleEstoque == '1':
        con = sqlite3.connect('oficina_car.db')

        cur = con.cursor()

        peca = input("Qual nome da peça para inserir: ")
        clear()

        cur.execute("SELECT * FROM pecas_gerais WHERE nome_pecas LIKE ? ", ('%'+peca+'%',))
        for row in cur:
            print(*row, sep='\t')

        con.close()

        while response.lower() == 'sim':


            id = int(input("Inserir nome o ID da peca: "))
            clear()

            con = sqlite3.connect('oficina_car.db')
        
            cur = con.cursor()

            data_entrada = datetime.today()

            cur.execute('''CREATE TABLE IF NOT EXISTS estoque (id INTEGER PRIMARY KEY AUTOINCREMENT, sku INT, modelo_peca TEXT, data DATETIME, qtd INT, tipo INT)''')
            con.commit()

            qtd = int(input("Inserir a quantidade: "))
            clear()

            sql = cur.execute("INSERT INTO estoque (sku, modelo_peca, data, qtd, tipo) SELECT ? , nome_pecas, ?, ?, ? FROM pecas_gerais WHERE id = ? ", (id, data_entrada, qtd, 1, id,))
            con.commit()
            con.close()            

            response = input("Inserir mais peças? (sim/não) ")
            clear()
    elif controleEstoque == '2':
        con = sqlite3.connect('oficina_car.db')

        cur = con.cursor()

        peca = input("Qual nome da peça para inserir: ")
        clear()

        cur.execute("SELECT * FROM pecas_gerais WHERE nome_pecas LIKE ? ", ('%'+peca+'%',))
        for row in cur:
            print(*row, sep='\t')

        con.close()
        while response.lower() == 'sim':
            id = int(input("Inserir nome o ID da peca: "))
            clear()

            con = sqlite3.connect('oficina_car.db')
        
            cur = con.cursor()

            data_entrada = datetime.today()

            qtd = int(input("Inserir a quantidade: ")) * -1
            clear()

            sql = cur.execute("INSERT INTO estoque (sku, modelo_peca, data, qtd, tipo) SELECT ?, nome_pecas, ?, ?, ? FROM pecas_gerais WHERE id = ? ", (id, data_entrada, qtd, 1, id,))
            con.commit()
            con.close()            

            response = input("Inserir mais peças? (sim/não) ")
            clear()
    elif controleEstoque == '3':
        con = sqlite3.connect('oficina_car.db')

        cur = con.cursor()

        peca = input("Qual nome da peça para inserir: ")
        clear()

        cur.execute("SELECT * FROM pecas_gerais WHERE nome_pecas LIKE ? ", ('%'+peca+'%',))
        for row in cur:
            print(*row, sep='\t')

        id = int(input("Inserir nome o ID da peca: "))
        clear()
        
        cur.execute("SELECT sku, modelo_peca, SUM(qtd) AS qtd FROM estoque WHERE sku = ? GROUP BY sku, modelo_peca", (id,))
        for row in cur:
            print(*row, sep='\t')

        con.close()
    else:
        print("X")








