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

<script setup></script>

<template>
  <SisdaiNavegacionPrincipal
    :nav-informacion="`Sección: <b>${$route.name}</b>`"
  >
    <template #complementario>
      <a
        href="https://sisdai.conahcyt.mx/"
        class="nav-hipervinculo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <b>IR A ENLACE EXTERNO</b>
      </a>
    </template>
    <ul class="nav-menu">
      <li>
        <router-link
          to="/"
          class="nav-hipervinculo"
          exact
        >
          Inicio
        </router-link>
      </li>
      <li>
        <router-link
          to="/creditos"
          class="nav-hipervinculo"
        >
          Créditos
        </router-link>
      </li>
      <li>
        <router-link
          to="/otra-vista"
          class="nav-hipervinculo"
        >
          Otra vista
        </router-link>
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>
