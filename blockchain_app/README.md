# Aplicación Blockchain CriptoNFT

Esta carpeta contiene el núcleo de la blockchain CriptoNFT, desarrollada sobre el **Lisk SDK v5**.

## Estructura de Archivos

- `nft_module/`:
    - `index.js`: Punto de entrada de la aplicación. Configura la red Devnet, el bloque génesis y registra los módulos y plugins.
    - `nft_module.js`: Definición de la clase `NFTModule`, esquema de cuenta y registro de activos.
    - `nft.js`: Lógica compartida para el manejo de tokens, esquemas de almacenamiento y funciones de utilidad.
    - `transactions/`: Implementación de los activos de transacción (`Create`, `Purchase`, `Transfer`).
- `nft_api_plugin/`:
    - `index.js`: Plugin que expone una API REST adicional para el frontend.
    - `db.js`: Manejo de una base de datos local para persistir el historial de transacciones y estados de los NFTs de manera eficiente.

## Detalles Técnicos del Módulo NFT

El módulo utiliza el ID `1024` (personalizado) y extiende las cuentas de Lisk para incluir un campo `nft` que almacena una lista de IDs de tokens de los que la cuenta es propietaria.

### Activos de Transacción

1. **CreateNFT (ID: 0)**: Permite crear un nuevo NFT. El costo de creación es el valor inicial definido.
2. **PurchaseNFT (ID: 1)**: Permite comprar un NFT. Verifica que el monto ofrecido supere el margen mínimo de ganancia respecto al valor actual.
3. **TransferNFT (ID: 2)**: Permite la transferencia directa de propiedad sin intercambio monetario.

## API Plugin (Puerto 8080)

Endpoints personalizados:
- `GET /api/nft_tokens`: Lista todos los tokens registrados con su historial.
- `GET /api/nft_tokens/:id`: Obtiene detalles de un token específico.
- `GET /api/transactions`: Lista todas las transacciones procesadas por el plugin.

## Ejecución

```bash
node nft_module/index.js
```
