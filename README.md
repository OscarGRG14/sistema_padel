# Sistema de torneos para padel
Servidor de torneos de pádel, contiene le servidor y el panel básico de administrador 

## Para ejecutar el servidor 
1. Primero debemos de tener instalado MySQL o similar que sea SQL (Recomiendo la paqueteria de XAMPP)
2. Segundo debemos de configurar la base de datos para el servidor en la carpeta raiz del servidor hay un archivo llamado db.sql ejecutar el archivo en el servidor SQL que hayamos instalado
3. Debemos configurar las credenciales en el archivo db.js
4. Ejecutar el siguiente comando para instalar todas las dependecias necesarias para el servidor
```{r}
npm install
```
5. Para correr el sevidor eh dejado el comando para desarrollo que ejecuta el servidor con nodemon
```{r}
npm run dev
```
## Para ejecutar el panel de administrador
1. para visualizar el sistema como tal debemos de ir para la caepeta de admin-padel
2. abrir una consola y ejecutar
```{r}
npm install
```
3. el panel de admin esta en react.js asi que demos de ejecutar el siguiente comando 
```{r}
npm start
```
