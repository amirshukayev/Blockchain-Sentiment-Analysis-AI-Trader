import pandas as pd
import sqlite3

conn = sqlite3.connect("pricedata.db")
df = pd.read_sql_query("select * from data order by date ", conn)
print(df)


import matplotlib.pyplot as plt
ax = plt.subplot()
for label, sdf in df.groupby('name'):
    print(sdf)
    ax.plot(sdf.date,sdf.price,label=label)

ax.set_xlabel('Date')
ax.set_ylabel('Price (USD)')
plt.legend()
plt.show()
