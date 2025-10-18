# 🌐 Página Genérica (Astro + Tailwind)

Plantilla **one-page** moderna creada con **Astro** y **Tailwind CSS**.  
Incluye secciones de **inicio**, **servicios**, **proyectos**, **contacto** y **menú móvil** totalmente responsive.

---

## 🚀 Requisitos

- **Node.js** (recomendado ≥ 18)
- **npm**

---

## 🧩 Inicio rápido

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Levantar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Build de producción:**
   ```bash
   npm run build
   ```

4. **Vista previa del build:**
   ```bash
   npm run preview
   ```

---

## 🗂️ Estructura principal

```
src/
 ├─ layouts/
 │   └─ Layout.astro          # Layout principal y meta SEO
 ├─ pages/
 │   └─ index.astro           # Página principal
 ├─ components/
 │   ├─ Header.astro          # Cabecera con menú
 │   ├─ Footer.astro          # Pie de página
 │   └─ icons/                # Iconos sociales como componentes
 ├─ data/
 │   ├─ servicios.json        # Lista de servicios
 │   ├─ proyectos.json        # Proyectos destacados
 │   └─ redes.json            # Redes sociales
 └─ styles/
     └─ global.css            # Variables y configuración de Tailwind

public/
 ├─ images/                   # Imágenes públicas
 └─ scripts/                  # JS (menuHeader.js, contactForm-v2.js)
```

---

## ⚙️ Personalización rápida

- **Textos y listas:** editar los archivos JSON en `src/data/`.
- **Imágenes:** reemplazar o agregar en `public/images/`.
- **Correo / WhatsApp:** modificar en `public/scripts/contactForm-v2.js`.
- **Redes sociales:** agregar una entrada en `src/data/redes.json` y su ícono correspondiente en `src/components/icons/`.

---

## 🧠 Notas técnicas

- El menú móvil está controlado por `public/scripts/menuHeader.js`.
- El layout carga la fuente **Poppins** desde Google Fonts.
- Las variables de color están definidas en `src/styles/global.css` bajo el selector `:root`.

---

## 💡 Buenas prácticas

- Mantener los datos en archivos **JSON** para separar contenido y presentación.
- Usar **imágenes optimizadas** dentro de `public/images/`.
- Ajustar los **meta tags** (title, description, etc.) en `src/layouts/Layout.astro` para un mejor SEO.

---

## 🪪 Licencia

Podés usar y modificar este proyecto libremente.  
Si querés, añadí una licencia (por ejemplo, **MIT**) en el archivo `LICENSE`.

---

✨ **Hecho con Astro + Tailwind — adaptable, rápido y minimalista.**
