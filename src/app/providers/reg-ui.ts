import { App } from "vue";

import ui from '../../shared/ui'

export const regUi = (app: App) => {
    ui.forEach(u => {
        app.component(u.name, u)
    })
}