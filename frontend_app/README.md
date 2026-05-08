# Frontend CriptoNFT

Interfaz de usuario para la plataforma CriptoNFT construida con **React**.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la UI.
- **Material-UI (MUI)**: Framework de diseño para componentes elegantes y responsivos.
- **Lisk Client**: Biblioteca para interactuar con la blockchain, firmar transacciones y consultar el estado del nodo.
- **React Router**: Para la navegación entre la página principal, perfiles de cuenta y transacciones.

## Estructura del Código

- `src/api/`: Servicios que encapsulan las llamadas fetch tanto al nodo Lisk (puerto 4000) como al plugin NFT (puerto 8080).
- `src/components/`:
    - `HomePage.js`: Galería de NFTs disponibles y estados globales.
    - `AccountPage.js`: Detalles de una cuenta específica y sus posesiones.
    - `TransactionsPage.js`: Historial global de transacciones.
    - `dialogs/`: Formularios emergentes para Crear, Comprar y Transferir NFTs.
- `src/context/`: Uso de React Context para proveer información del nodo (como la altura del bloque) a toda la aplicación.
- `src/utils/`: Funciones de ayuda para formatear direcciones Lisk y manejar conversiones de datos.

## Configuración y Conexión

La aplicación está configurada para conectarse a:
- **Nodo Lisk**: `http://localhost:4000` (API estándar)
- **Plugin NFT**: `http://localhost:8080` (API personalizada)

## Ejecución

```bash
npm start
```

La aplicación se recargará automáticamente si realizas cambios en el código.
