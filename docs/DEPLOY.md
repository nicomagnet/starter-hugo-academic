# Deploy con Netlify

> Tu portfolio se despliega automáticamente en Netlify con cada push a la rama principal.

---

## 1. Cómo Funciona

```
git push origin main
       ↓
Netlify detecta el cambio
       ↓
Ejecuta: hugo --gc --minify -b $URL
       ↓
Publica la carpeta: public/
       ↓
Sitio actualizado en https://nicolas.magnetang.com/
```

No hay comandos manuales de deploy. Solo haz push.

---

## 2. Configuración Actual (`netlify.toml`)

```toml
[build]
  command = "hugo --gc --minify -b $URL"
  publish = "public"

[build.environment]
  HUGO_VERSION = "0.111.3"
  HUGO_ENABLEGITINFO = "true"

[context.production.environment]
  HUGO_ENV = "production"

[context.deploy-preview]
  command = "hugo --gc --minify --buildFuture -b $DEPLOY_PRIME_URL"

[context.branch-deploy]
  command = "hugo --gc --minify -b $DEPLOY_PRIME_URL"
```

### Contextos de deploy

| Contexto | Cuándo | Nota |
|----------|--------|------|
| `production` | Push a `main` | Build normal |
| `deploy-preview` | Pull Request | Incluye contenido futuro (`--buildFuture`) |
| `branch-deploy` | Push a otra rama | Para testing |

---

## 3. Formulario de Contacto

El formulario de contacto usa **Netlify Forms** — funciona sin backend.

### Configuración

En `content/_index.md`, bloque `contact`:

```yaml
- block: contact
  content:
    form:
      provider: netlify
      netlify:
        captcha: false    # true para evitar spam
```

### Cómo funciona

1. Hugo genera el formulario HTML con atributos `data-netlify="true"`
2. Netlify detecta el formulario automáticamente al hacer deploy
3. Los envíos aparecen en el dashboard de Netlify → Forms

### Ver envíos

Netlify Dashboard → Tu sitio → Forms → Ver submissions.

También puedes configurar notificaciones por email:
Netlify → Forms → Notifications → Add notification → Email.

---

## 4. Netlify CMS

El CMS integrado permite editar contenido desde el navegador sin tocar código.

### Acceder

```
https://nicolas.magnetang.com/admin/
```

### Estado actual

El CMS está configurado pero con la salida `wowchemycms_config` comentada. Si quieres activarlo:

1. En `content/admin/index.md`, descomentar:
   ```yaml
   outputs:
     - wowchemycms_config
     - HTML
   ```

2. En `config/_default/params.yaml`, verificar:
   ```yaml
   extensions:
     cms:
       branch: main
       local_backend: false
   ```

> **Nota:** El CMS requiere autenticación con GitHub/Netlify Identity.

---

## 5. Dominio Personalizado

Tu dominio actual: `https://nicolas.magnetang.com/`

Configurado en `config/_default/config.yaml`:

```yaml
baseURL: 'https://nicolas.magnetang.com/'
```

Si necesitas cambiarlo:
1. Actualiza `baseURL` en `config.yaml`
2. Verifica en Netlify → Domain management que el dominio esté configurado

---

## 6. Cache de Recursos

Netlify usa el plugin `netlify-plugin-hugo-cache-resources` para cachear recursos entre builds y acelerar el deploy.

```toml
[[plugins]]
  package = "netlify-plugin-hugo-cache-resources"
  [plugins.inputs]
    debug = true
```

---

## 7. Deploy Preview (Pull Requests)

Al crear un Pull Request, Netlify genera una vista previa con URL única donde puedes ver los cambios antes de mergear.

- Los contenidos con fecha futura se incluyen automáticamente
- El link del preview aparece en el PR de GitHub

---

## 8. Troubleshooting

| Problema | Solución |
|----------|----------|
| Build falla | Revisa logs en Netlify → Deploys → Build log |
| Imágenes no aparecen | Verifica que estén en `assets/media/` o `static/` |
| Contenido no se actualiza | Hard refresh del navegador (Ctrl+Shift+R) |
| Formulario no funciona | Verifica `provider: netlify` en el bloque contact |
| Hugo version error | Actualizar `HUGO_VERSION` en `netlify.toml` |

---

## 9. Variables de Entorno en Netlify

Si necesitas añadir variables (API keys, etc.):

Netlify → Site settings → Environment variables → Add a variable.

Las variables definidas en `netlify.toml` bajo `[build.environment]` son:

| Variable | Valor | Uso |
|----------|-------|-----|
| `HUGO_VERSION` | `0.111.3` | Versión de Hugo |
| `HUGO_ENABLEGITINFO` | `true` | Usa git info para fechas |
