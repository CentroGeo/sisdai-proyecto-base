<script setup>
/*global globalThis*/
import store from '@/store'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'

const ruta = useRoute()
const router = useRouter()
const infoDespliegue = {
  versionProyecto: process.env.PACKAGE_VERSION,
  actualizacionProyecto: process.env.DATE_DEPLOY,
  entornoProyecto: process.env.ENV_DEPLOY,
}

const sisdaiMenuAccesibilidad = ref()
const menuAccesiblidadAbierto = ref()
const entradaInicial = ref(true)

onMounted(async () => {
  // Para obtener el estado del botón de accesiblidad
  menuAccesiblidadAbierto.value = computed(
    () =>
      sisdaiMenuAccesibilidad.value?._setupState?.menuAccesibilidadEstaAbierto
        .value
  )
  await router.onReady(() => {
    ruta.path === '/' ? (entradaInicial.value = false) : null
  })

  // agregandoAriaHidden()
})

// TO DEVS: oigans esto hay que procurarlo desde la construccion del componente
// no se debe dejar nuestra chamba al navegador

// onUpdated(agregandoAriaHidden)
// function agregandoAriaHidden() {
//   // ocultamos la lectura de los íconos que son enlaces externos
//   document.querySelectorAll('span.icono-enlace-externo').forEach(el => {
//     el.setAttribute('aria-hidden', 'true')
//   })
// }

const vistaSimplificada = computed(
  () => store.state.accesibilidad.vista_simplificada
)
const tipografiaAccesible = computed(
  () => store.state.accesibilidad.tipografia_accesible
)
const enlacesSubrayados = computed(
  () => store.state.accesibilidad.enlaces_subrayados
)

watch(vistaSimplificada, () => {
  const matomoPaq = globalThis._paq || { push() {} }
  const eventName = vistaSimplificada.value ? 'activacion' : 'desactivacion'
  matomoPaq.push([
    'trackEvent',
    'Accesibilidad',
    'Vista simplificada',
    eventName,
  ])
})

watch(tipografiaAccesible, () => {
  const matomoPaq = globalThis._paq || { push() {} }
  const eventName = tipografiaAccesible.value ? 'activacion' : 'desactivacion'
  matomoPaq.push([
    'trackEvent',
    'Accesibilidad',
    'Tipografía accesible',
    eventName,
  ])
})

watch(enlacesSubrayados, () => {
  const matomoPaq = globalThis._paq || { push() {} }
  const eventName = enlacesSubrayados.value ? 'activacion' : 'desactivacion'
  matomoPaq.push([
    'trackEvent',
    'Accesibilidad',
    'Enlaces subrayados',
    eventName,
  ])
})

watch(menuAccesiblidadAbierto, () => {
  const matomoPaq = globalThis._paq || { push() {} }
  const eventName = menuAccesiblidadAbierto.value ? 'abriendo' : 'cerrando'
  matomoPaq.push([
    'trackEvent',
    'Accesibilidad',
    'Abrir y colapsar menú',
    eventName,
  ])
})

watch(
  () => ruta.path,
  () => {
    if (!entradaInicial.value) {
      if (ruta.path) {
        nextTick(() => {
          moviendoFocoNavegacion(ruta.path)
        })
      }
    } else {
      entradaInicial.value = false
    }
  }
)

/**
 * Mueve el foco de navegación al contenido del documento o
 * todo el contenido, dependiendo si la ruta tiene más de
 * una carpeta anidada o no
 */
function moviendoFocoNavegacion(path) {
  let carpetas = path.split('/').filter(d => d !== '')

  if (carpetas.length >= 1) {
    const elemento_receptor = document.querySelector('#contenido-documento')
    if (elemento_receptor) {
      elemento_receptor.tabIndex = '-1'
      elemento_receptor.focus({ preventScroll: true })
    }
  } else {
    const elemento_receptor = document.querySelector('#contenido-todo')
    if (elemento_receptor) {
      elemento_receptor.tabIndex = '-1'
      elemento_receptor.focus({ preventScroll: true })
    }
  }
}
</script>

<template>
  <div
    id="app"
    :class="store.getters['accesibilidad/clasesAccesibles']"
  >
    <a
      href="#principal"
      class="ir-contenido-principal"
    >Ir a contenido principal</a
    >

    <SisdaiNavegacionGobMx />
    <SisdaiNavegacionPrincipal
      :navInformacion="`Sección: <b>${$route.name}</b>`"
    >
      <ul class="nav-menu">
        <li>
          <router-link
            class="nav-hipervinculo"
            to="/"
            exact
          >
            Inicio
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-hipervinculo"
            to="/disenio/"
          >
            Diseño
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-hipervinculo"
            to="/desarrollo/"
          >
            Desarrollo
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-hipervinculo"
            to="/accesibilidad/"
          >
            Accesibilidad
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-hipervinculo"
            to="/catalogo/"
          >
            Catálogo
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-hipervinculo"
            to="/acceso-abierto"
          >
            Acceso Abierto
          </router-link>
        </li>
        <li>
          <router-link
            class="nav-hipervinculo"
            to="/acerca-de"
          >
            Acerca de
          </router-link>
        </li>
      </ul>
    </SisdaiNavegacionPrincipal>

    <router-view id="contenido-todo" />
    <SisdaiMenuAccesibilidad
      ref="sisdaiMenuAccesibilidad"
      :objetoStore="store"
      perfilColor="sisdai"
    />

    <SisdaiBotonFlotante
      :enlaces="[
        {
          clasesCss: 'eni',
          contenido: 'Ir a ENI',
          enlace: 'https://eni.conahcyt.mx/',
        },
        {
          clasesCss: 'gema',
          contenido: 'Ir a GEMA',
          enlace: 'https://gema.conahcyt.mx/',
        },
      ]"
    />

    <SisdaiInfoDeDespliegue
      :entornoProyecto="infoDespliegue.entornoProyecto"
      :versionProyecto="infoDespliegue.versionProyecto"
      :actualizacionProyecto="infoDespliegue.actualizacionProyecto"
    />

    <SisdaiPiePaginaConahcyt />

    <SisdaiPiePaginaGobMx />
  </div>
</template>

<style lang="scss">
.muestra-color {
  width: 1rem;
  height: 1rem;
  border: 1px solid #707070;
  border-radius: 50%;
  position: relative;
  display: inline-block;
  transform: translateY(0.125rem);
  margin-right: 4px;
}

.a11y-oscura {
  .oscura-img-blanca {
    img {
      filter: grayscale(1) brightness(100);
    }
  }
}
</style>
