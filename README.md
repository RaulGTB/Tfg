# 🕹️ eSports Insight – Visualización de Competiciones y Estadísticas

**RJK Score** es una plataforma desarrollada con Angular que permite explorar competiciones de videojuegos en tiempo real, consultar estadísticas, y guardar favoritos. El proyecto fue creado como parte del Trabajo de Fin de Grado (TFG) y está conectado a la API de [PandaScore](https://pandascore.co/).

## 🚀 Funcionalidades Principales

- 🎮 Visualización de ligas y partidos en vivo de juegos como **League of Legends**, **Dota 2**, **CS:GO**, entre otros.
- ⭐ Gestión de favoritos personalizados para usuarios registrados.
- 🔐 Sistema de autenticación con login y registro.
- 📄 Secciones legales: Términos de uso y política de privacidad.
- 📱 Diseño responsive con estilos personalizados y Bootstrap.
- 📊 Paginación y filtros para mejorar la experiencia de navegación.
- 🌐 Interfaz limpia, moderna y centrada en el usuario.

## 🧪 Tecnologías y Herramientas

- **Angular** (versión moderna)
- **TypeScript**
- **Bootstrap 5**
- **RxJS** para la gestión reactiva de datos
- **PandaScore API** para obtener datos de competiciones
- **HTML5/CSS3**
- **Git/GitHub** para control de versiones

## 🔐 Seguridad y Autenticación

El sistema de autenticación permite a los usuarios:
- Registrarse con validación de formularios.
- Iniciar sesión y mantener sesión con `AuthGuard`.
- Acceder a secciones privadas como favoritos y cuenta.

## 🛠️ Instalación

Clona el repositorio, instala las dependencias, lanza el servidor de desarrollo y accede en tu navegador a http://localhost:4200:

```bash
git clone https://github.com/RaulGTB/Tfg.git
cd Tfg
npm install
ng serve
