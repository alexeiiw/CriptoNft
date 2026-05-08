# CriptoNFT - Plataforma Descentralizada de NFTs

CriptoNFT es una solución integral para la creación, compra y transferencia de Tokens No Fungibles (NFTs) basada en la tecnología de Lisk. El proyecto se divide en dos componentes principales: una aplicación blockchain personalizada y un frontend interactivo en React.

## Estructura del Proyecto

- `blockchain_app/`: Contiene la lógica del nodo de la blockchain, incluyendo el módulo personalizado de NFTs y un plugin de API personalizada.
- `frontend_app/`: Una aplicación web moderna construida con React para interactuar con la blockchain de manera intuitiva.

## Requisitos Previos

- **Node.js**: Versión 12.x o superior.
- **Yarn** o **npm**.

## Instalación y Configuración

### 1. Configuración de la Blockchain

Navega al directorio de la aplicación blockchain e instala las dependencias:

```bash
cd blockchain_app
npm install
```

Para iniciar el nodo de la blockchain:

```bash
node nft_module/index.js
```
*Nota: El archivo `nft_module/index.js` es el punto de entrada que registra el módulo NFT y los plugins.*

### 2. Configuración del Frontend

Navega al directorio del frontend e instala las dependencias:

```bash
cd frontend_app
npm install
```

Para iniciar la aplicación de desarrollo:

```bash
npm start
```
La aplicación estará disponible en `http://localhost:3000`.

## Funcionalidades Principales

- **Creación de NFTs**: Los usuarios pueden acuñar nuevos NFTs definiendo un valor inicial y un margen mínimo de compra.
- **Compra de NFTs**: Mercado descentralizado donde se pueden adquirir NFTs existentes si se cumple con el precio mínimo requerido.
- **Transferencia**: Envío directo de NFTs entre cuentas de la red.
- **Historial de Transacciones**: Visualización completa de la actividad en la red gracias al `NFTAPIPlugin`.

## Arquitectura Técnica

- **Lisk SDK**: Utilizado para construir la lógica on-chain mediante módulos y activos personalizados.
- **NFTAPIPlugin**: Un plugin que expone una API REST adicional en el puerto 8080 para facilitar la consulta de datos históricos y estados de los tokens.
- **React & Material-UI**: Utilizados para una interfaz de usuario fluida y receptiva.

## Contribuir

Si deseas contribuir a este proyecto, por favor abre un Pull Request o reporta cualquier problema en la sección de Issues.

---
Proyecto desarrollado como parte del ecosistema Lisk.
