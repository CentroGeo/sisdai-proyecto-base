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
<script>
import CreditosInvestigadoras from '@/assets/data/creditos-investigadoras.json'

export default {
  setup() {
    const cdn_archivos_dominio = process.env.VUE_APP_CDN_ARCHIVOS
    return {
      cdn_archivos_dominio,
    }
  },
  props: ['id'],
  data() {
    return {
      investigadora: Object,
    }
  },
  mounted() {
    this.investigadora = CreditosInvestigadoras.filter(
      d => d.id === this.$route.params.id
    )[0]
  },
}
</script>

<template>
  <main id="principal">
    <div class="contenedor ancho-lectura m-y-maximo">
      <div class="lista-compuesta lista-avatar borde-b">
        <div class="flex p-y-3">
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
        </div>
      </div>
      <p
        v-for="(parrafo, index) in investigadora.semblanza"
        :key="`parrafo-${index}`"
      >
        {{ parrafo }}
      </p>
      <p><router-link to="/creditos"> Regresar </router-link></p>
    </div>
  </main>
</template>

<style lang="scss">
.avatar-filtro {
  filter: grayscale(1);
}
</style>
