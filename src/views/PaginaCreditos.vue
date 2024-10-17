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
import { ref } from 'vue'
import CreditosInvestigadoras from '@/assets/data/creditos-investigadoras.json'
import CreditosInstituciones from '@/assets/data/creditos-instituciones.json'

const investigadoras = ref(CreditosInvestigadoras)
const instituciones = ref(CreditosInstituciones)
const cdn_archivos_dominio = process.env.VUE_APP_CDN_ARCHIVOS
</script>

<template>
  <main id="principal">
    <div class="contenedor m-y-maximo">
      <h1>Créditos</h1>
      <div class="flex">
        <div class="columna-8">
          <h2 class="h4 borde-b borde-color-secundario p-b-2">
            Instituciones y organizaciones
          </h2>
          <ul class="lista-compuesta lista-logotipo">
            <li
              v-for="institucion in instituciones"
              :key="institucion.id"
            >
              <a
                :href="institucion.web"
                target="_bank"
                rel="noopener noreferrer"
              >
                <div class="lista-logotipo-imagen">
                  <img
                    class="a11y-oscura-filtro-blanco a11y-simplificada-mantener-imagen"
                    :src="`${cdn_archivos_dominio}enis/capitulo-demo/creditos/${institucion.logo}`"
                    alt=""
                  />
                </div>
                <div class="lista-compuesta-cuerpo">
                  <p class="lista-compuesta-texto-primario">
                    {{ institucion.nombre }}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="columna-8">
          <h2 class="h4 borde-b borde-color-secundario p-b-2">
            Investigadoras e investigadores
          </h2>
          <ul class="lista-compuesta lista-avatar">
            <li
              v-for="investigadora in investigadoras"
              :key="investigadora.id"
            >
              <router-link
                :to="{
                  name: 'Créditos / Investigadora',
                  params: { id: `${investigadora.id}` },
                }"
              >
                <div class="lista-avatar-imagen avatar-filtro">
                  <img
                    :src="`${cdn_archivos_dominio}enis/capitulo-demo/creditos/${investigadora.foto}`"
                    alt=""
                  />
                </div>
                <div class="lista-compuesta-cuerpo">
                  <p class="lista-compuesta-titulo">
                    {{ investigadora.nombre }}
                  </p>
                  <p class="lista-compuesta-texto-primario">
                    {{ investigadora.rol }}
                  </p>
                  <p class="lista-compuesta-texto-secundario">
                    {{ investigadora.institucion }}
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.avatar-filtro {
  filter: grayscale(1);
}
</style>
