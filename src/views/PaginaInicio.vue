<!--This file is part of eni-capitulo-demo.-->

<!--eni-capitulo-demo is free software: you can redistribute it and/or modify-->
<!--it under the terms of the GNU Lesser General Public License as published by the-->
<!--Free Software Foundation, either version 3 of the License, or-->
<!--(at your option) any later version.-->

<!--eni-capitulo-demo is distributed in the hope that it will be useful,-->
<!--but WITHOUT ANY WARRANTY; without even the implied warranty of-->
<!--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General-->
<!--Public License for more details.-->

<!--You should have received a copy of the GNU Lesser General Public License along-->
<!--with eni-capitulo-demo. If not, see <https://www.gnu.org/licenses/>.-->

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

function calHeight() {
  const innerheight = window.innerHeight / 100
  document
    .querySelector(':root')
    .style.setProperty('--vh', `${innerheight.toString()}px`)
}

calHeight()

onMounted(() => {
  window.addEventListener('resize', calHeight)
})

onBeforeUnmount(() => {
  window.addEventListener('resize', calHeight)
})

const cdn_archivos_dominio = process.env.VUE_APP_CDN_ARCHIVOS
</script>

<template>
  <main id="principal">
    <div class="portada portada-secundaria">
      <img
        class="portada-imagen"
        :src="`${cdn_archivos_dominio}enis/capitulo-demo/inicio/pekihermosa.png`"
        alt="portada de ejemplo gato cálico mirando al frente"
      />
      <div class="portada-degradado">
        <hgroup class="portada-cuerpo">
          <h1 class="portada-titulo">Título del capítulo</h1>
          <h2 class="portada-subtitulo">
            Un capítulo del Ecosistema Nacional Informático de ...
          </h2>
        </hgroup>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-maximo">
      <h2 class="m-y-8-esc m-y-4-mov m-x-auto">
        Título significativo de introducción al capítulo
      </h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        laudantium sed praesentium voluptate distinctio, minus hic dolorum,
        asperiores consequuntur accusantium neque ullam molestiae laboriosam
        expedita, eveniet officia. Harum, impedit vero!
      </p>
    </div>
  </main>
</template>
