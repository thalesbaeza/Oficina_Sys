import sqlite3
from datetime import datetime



#ABERTURA DA APLICAÇÃO

print("*************************")

print("*************************")


while True:
    escolha =  input("1-) DEMONSTRATIVO DE FLUXO DE CAIXA \n2-) CONTROLE DE ESTOQUE \n \n Qual é a opção desejada: ")
    if escolha == '1': 
        break
    elif escolha == '2': 
        break
    else:
        True


if escolha == '1': #DEMONSTRATIVO DE FLUXO DE CAIXA
    modelo = input("Inserir o modelo do Carro: ")
    
    data_inicial = datetime.today()
    valores = 0
    valor = True

    valorIncial = input("Informe o valor inicial de compra: ")
    if modelo != '':
        while valor:
            valor = int(input("Inserir o valor da peça: "))
            valores += valor
    else:
        modelo = input("Inserir o modelo do Carro: ")
        
    valorVenda = input("Inserir o valor de venda: ")
    
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

    data = [modelo,data_inicial,data_final, valorIncial, valores, lucro]

    con = sqlite3.connect('oficina_car.db')

    cur = con.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS pedidos (id INTEGER PRIMARY KEY AUTOINCREMENT, modelo_carro TEXT, data_inicial DATETIME, data_final DATETIME, vls_compra REAL, vls_total_pecas REAL , vls_lucro REAL )''')
    cur.execute('''INSERT INTO pedidos (modelo_carro, data_inicial, data_final, vls_compra, vls_total_pecas, vls_lucro ) VALUES (?, ?, ?, ?, ?, ?)''', data)

    con.commit()
    con.close()

elif escolha == '2': #DEMONSTRATIVO DE FLUXO DE CAIXA
    escolhaEstoque =  input("1-) Inserir peça no estoque  \n2-) Retirar peça do estoque \n3-) Visualizar o Estoque \n\n Qual é a opção desejada: ")
    con = sqlite3.connect('oficina_car.db')

    cur = con.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS Estoque (id INTEGER PRIMARY KEY AUTOINCREMENT, modelo_peca TEXT, data DATETIME, Qtd int )''')

    con.commit()
    con.close()
    if escolhaEstoque == '1':
        print("Inserir peça no estoque")
    elif escolhaEstoque == '2':
        print("Retirar peça do estoque")
    else:
        print("Mostrar o estoque atual")
else:
    sair = input("Deseja sair? (y/n)")
    if sair.lower() == 'y':
        print("Exit")
    else:
        print("Precisa voltar para o menu") 








