def ordenamiento_burbuja(lista):
    n = len(lista)
    # Recorrer todos los elementos de la lista
    for i in range(n):
        # Últimos i elementos ya están en su lugar
        for j in range(0, n - i - 1):
            # Intercambiar si el elemento encontrado es mayor que el siguiente
            if lista[j] > lista[j+1]:
                lista[j], lista[j+1] = lista[j+1], lista[j]
    return lista

# Ejemplo de uso:
mi_lista = [64, 34, 25, 12, 22, 11, 90]
print("Lista original:", mi_lista)
print("Lista ordenada:", ordenamiento_burbuja(mi_lista))
