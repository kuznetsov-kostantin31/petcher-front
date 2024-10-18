import { aboutUsPage } from "./AboutUsPage";
import { createProjectPage } from "./CreateProjectPage";
import { HomePage } from "./HomePage";
import { logPage } from "./LogPage";
import { mainPage } from "./MainPage";
import { profilePage } from "./ProfilePage";
import { projectPage } from "./ProjectPage";
import { regPage } from "./RegPage";
import { responsePage } from "./ResponsePage";



export const routes = [
    { 
        path: "/", 
        component: mainPage, 
        name: "main", 
    },
    { 
        path: "/aboutUs", 
        component: aboutUsPage, 
        name: "about-us", 
    },
    { 
        path: "/createProject", 
        component: createProjectPage, 
        name: "create-project", 
    },
    { 
        path: "/reg", 
        component: regPage, 
        name: "reg", 
    },
    { 
        path: "/login", 
        component: logPage, 
        name: "login", 
    },
    { 
        path: "/home", 
        component: HomePage, 
        name: "home", 
    },
    { 
        path: "/profile", 
        component: profilePage, 
        name: "profile", 
    },
    { 
        path: "/project", 
        component: projectPage, 
        name: "project", 
    },
    { 
        path: "/response", 
        component: responsePage,
        name: "response",
    },
];