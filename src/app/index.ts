import { createApp } from 'vue'
import App from './App.vue'
import { regUi, router } from './providers';
import { store } from './providers';

const initApp = createApp(App).use(router).use(store);

regUi(initApp)

export const app = initApp