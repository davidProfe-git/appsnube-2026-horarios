david = 1
laura = 2
ronny = 5
vanessa = 8

tiempo = 0

# 1) David y Laura cruzan
tiempo += laura  # tarda el más lento (2)

# 2) David regresa
tiempo += david  # 1

# 3) Ronny y Vanessa cruzan
tiempo += vanessa  # tarda el más lento (8)

# 4) Laura regresa
tiempo += laura  # 2

# 5) David y Laura cruzan
tiempo += laura  # 2

if tiempo <= 15:
    print(f"Todos se salvaron en {tiempo} minutos")
else:
    print(f"No se logró, tiempo total: {tiempo} minutos")



          