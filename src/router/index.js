import Vue from "vue";
import VueRouter from "vue-router";
import Portada from "../views/Portada.vue";
import SobreMi from "../views/SobreMi.vue";
import Contacto from "../views/Contacto.vue";
import Post from "../views/Post.vue";
import Contenido from "../views/Contenido";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  // Portada
  {
    // ruta nombrada
    path: "/",
    name: "Portada",
    component: Portada,
  },
  // Sobre Mi
  {
    // ruta nombrada
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi,
  },
  // Contacto
  {
    // Ruta estática
    path: "/contacto",
    component: Contacto,
  },
  // Último Post
  {
    // Ruta estática
    path: "/post/:entrada",
    component: Post,
    children: [
      {
        path: "contenido",
        component: Contenido,
        name: "Contenido",
      },
    ],
  },
  // Error de ruta
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
