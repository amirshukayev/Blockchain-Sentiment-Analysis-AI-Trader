import pandas as pd
import sqlite3

conn = sqlite3.connect("pricedata.db")
df = pd.read_sql_query("select * from data order by date ", conn)
print(df)



import matplotlib.pyplot as plt

plt.figure(figsize=(20,20), dpi=100)


ax = plt.subplot()
for label, sdf in df.groupby('name'):
    print(sdf)
    ax.plot(sdf.date,sdf.price,label=label,)

import matplotlib.ticker as ticker

ax.xaxis.set_major_locator(ticker.MultipleLocator(10))
plt.xticks(rotation=70)
ax.set_xlabel('Date')
ax.set_ylabel('Price (USD)')
plt.legend()

plt.gcf().subplots_adjust(bottom=0.30)

plt.savefig('fig1.png', dpi = 300)


plt.show()
