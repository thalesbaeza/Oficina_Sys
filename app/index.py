import sqlite3
from datetime import datetime
import os 

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
    valorReponsive = True

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

    cur.execute('''CREATE TABLE IF NOT EXISTS estoque (id INTEGER PRIMARY KEY AUTOINCREMENT, sku int, modelo_peca TEXT, data DATETIME, qtd int, setor int, valor real, tipo int)''')

    con.commit()
    con.close()

    response = 'sim'

    if controleEstoque == '1':
        while response.lower() == 'sim':
            peca = input("Inserir nome do modelo da peça: ")
            clear()
            qtd = int(input("Inserir a quantidade de peça: "))
            clear()
            setor = int(input("Inserir o número do setor: ")) #RANGE 1 A 7
            clear()
            data_entrada = datetime.today()
            valorEntrada = int(input("Valor das peças: "))
            clear()

            dataEstoque = [peca, data_entrada, qtd, setor, valorEntrada, 1]

            con = sqlite3.connect('oficina_car.db')
            cur = con.cursor()
            cur.execute(''' INSERT INTO estoque ( sku, modelo_peca, data, qtd, setor, valor) VALUES (?, ?, ?, ? ?)''', dataEstoque)
            con.commit()
            con.close()

            response = input("Incluir mais peça no estoque?  (sim/não)")
            clear()

    elif controleEstoque == '2':
        print("Retirar peça do estoque")
        data_saida = datetime.today()
    else:
        print("Mostrar o estoque atual")
else:
    sair = input("Deseja sair? (y/n)")
    if sair.lower() == 'y':
        print("Exit")
    else:
        print("Precisa voltar para o menu") 








