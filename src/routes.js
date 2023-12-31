import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import NewPatient from "@/views/admin/NewPatient.vue";
import Patient from "@/views/admin/Patient.vue";
import Evaluation from "@/views/admin/evaluation/Evaluation.vue";
import SubEvaluation from "@/views/admin/evaluation/SubEvaluation.vue";
import IntervertionList from "@/views/admin/intervertion/IntervertionList.vue";
import Users from "@/views/admin/Users.vue";
import Maps from "@/views/admin/Maps.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
import Index from "@/views/Index.vue";

// routes

export default [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/patients",
        component: Tables,
      },
      {
        path: "/admin/patient/:id",
        component: Patient,
      },
      {
        path: "/admin/patients/new",
        component: NewPatient,
      },
      {
        path: "/admin/evaluation/select",
        component: Evaluation,
      },
      {
        path: "/admin/evaluation/:id/sub",
        component: SubEvaluation,
      },
      {
        path: "/admin/intervertions/",
        component: IntervertionList,
      },
      {
        path: "/admin/users",
        component: Users,
      },
      {
        path: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];