# Definir la base de datos
base_datos = {
    "CLIENTE": ["ID_CLIENTE", "NOMB_CLIENTE", "DIRECCION", "PAIS", "BALANCE INICIAL", "PAGOS HASTA EL MES"],
    "REPRESETANTE DE VENTAS": ["ID_REP", "NOMB_REP", "ID_DIRECTOR", "OFICINA", "COMM%"],
    "PRODUCTO": ["ID_PRODUCTO", "DESC_PRODUCTO", "ID_FABRICANTE", "COSTO", "PRECIO"],
    "VENTA": ["FECHA", "ID_CLIENTE", "ID_REP", "ID_PRODUCTO", "CANTIDAD", "PRECIO TOTAL"],
    "FABRICANTE": ["ID_FABRICANTE", "NOMB_FABRICANTE", "DIRECCION", "PAIS"],
    "FACTURA": ["FACTURA-#", "FECHA", "ID_CLIENTE", "ID_REP"],
    "LINIA DE FACTURA":["FACTURA-#","LINIA-#","ID_PRODUCTO","CANTIDAD","PRECIO TOTAAL"]
    }


# Función para encontrar coincidencias en las tablas
def encontrar_coincidencias(tablas):
    coincidencias = {}
    for tabla1 in tablas:
        for tabla2 in tablas:
            if tabla1 != tabla2:
                coincidencias[(tabla1, tabla2)] = []

                # Buscar coincidencias
                for fila1 in base_datos[tabla1]:
                    for fila2 in base_datos[tabla2]:
                        if fila1 == fila2:
                            coincidencias[(tabla1, tabla2)].append(fila1)

    return coincidencias

# Obtener las coincidencias en la base de datos
coincidencias = encontrar_coincidencias(base_datos.keys())

# Mostrar las coincidencias encontradas
for tablas, coincidencia in coincidencias.items():
    tabla1, tabla2 = tablas
    if coincidencia:
        print(f"Coincidencias entre '{tabla1}' y '{tabla2}':")
        print(coincidencia)
        print("\n")

