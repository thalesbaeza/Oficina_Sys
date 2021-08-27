#Controle de ponto
import sqlite3
from datetime import datetime
import os 

clear = lambda: os.system('cls')


ponto = 'sim'

while  ponto == 'sim':
    data = input("Inserir a data do ponto: ")
    clear()
    hora1 = input("Inserir a data de entrada: ")
    clear()
    hora2 = input("Inserir a data de saida: ")
    clear() 
    hora3 = input("Inserir a data de entrada: ")
    clear()
    hora4 = input("Inserir a data de saida: ")
    clear()
    
    data = [data , hora1, hora2, hora3, hora4]

    con = sqlite3.connect('oficina_car.db')

    cur = con.cursor()

    cur.execute('''CREATE TABLE IF NOT EXISTS ponto (id INTEGER PRIMARY KEY AUTOINCREMENT, data_dia DATETIME, data_inicial DATETIME, data_inicial_1 DATETIME, data_final_1 DATETIME, data_final DATETIME)''')
    con.commit()
    cur.execute('''INSERT INTO ponto (data_dia, data_inicial, data_inicial_1, data_final_1, data_final) VALUES (?, ?, ?, ?, ?)''', data)
    con.commit()
    con.close()


    ponto = input("Deseja marcar novamente o ponto ? (sim/não)")