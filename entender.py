


modelo = input("Inserir o modelo do Carro: ")

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
print("")
print("***********LUCRO***************")
print("LUCRO : ", int(valorVenda) - (int(valorIncial) + valores))
print("*******************************")




