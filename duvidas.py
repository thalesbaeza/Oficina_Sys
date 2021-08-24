import sqlite3
from datetime import datetime



#ABERTURA DA APLICAÇÃO

print("*************************")

print("*************************")


while True:
    escolha =  input("1-) DEMONSTRATIVO DE FLUXO DE CAIXA \n2-) CONTROLE DE ESTOQUE \n \n Qual é a opção desejada: ")
    if escolha == '1': #DEMONSTRATIVO DE FLUXO DE CAIXA
        break
    elif escolha == '2': #CONTROLE DE ESTOQUE
        break
    else:
        True


if escolha == '1':
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

    con = sqlite3.connect('oficina.db')

    cur = con.cursor()

    query = '''CREATE TABLE IF NOT EXISTS pedidos (modelo_carro text, data_inicial datetime, data_final datetime, vls_compra real, vls_total_pecas real , vls_lucro real )'''

    query2 = '''INSERT INTO pedidos (modelo_carro, data_inicial, data_final, vls_compra, vls_total_pecas, vls_lucro ) VALUES (?, ?, ?, ?, ?, ?)'''

    data = [modelo,data_inicial,data_final, valorIncial, valores, lucro]

    cur.execute(query2, data)
    con.commit()
    con.close()





