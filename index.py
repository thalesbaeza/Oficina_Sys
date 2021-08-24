import sqlite3
from datetime import datetime

con = sqlite3.connect('oficina.db')

cur = con.cursor()

cur.execute('''CREATE TABLE IF NOT EXISTS pedidos (modelo_carro text, data_inicial datetime, data_final datetime, vls_compra real, vls_total_pecas real , vls_lucro real )''')
con.commit()

cur.execute('''CREATE TABLE IF NOT EXISTS pedidos (modelo_carro text, data_inicial datetime, data_final datetime, vls_compra real, vls_total_pecas real , vls_lucro real )''')
con.commit()



con.close()

#cur.execute("INSERT INTO stocks VALUES ('2006-01-05','BUY','RHAT',100,35.14)")

#con.commit()
 #   data_final = datetime.today()
#    con = sqlite3.connect('oficina.db')
#    cur = con.cursor()
#   query = '''CREATE TABLE IF NOT EXISTS pedidos (modelo_carro text, data_inicial datetime, data_final datetime, vls_compra real, vls_total_pecas real , vls_lucro real )'''
#  query2 = '''INSERT INTO pedidos (modelo_carro, data_inicial, data_final, vls_compra, vls_total_pecas, vls_lucro ) VALUES ({}, {}, {}, {}, {}, {})''', format(modelo, data_inicial,data_final, int(valorIncial), valores, (int(valorVenda) - (int(valorIncial) + valores)) )


    # cur.execute(query, query2)
    # con.commit()
    # #con.close()
