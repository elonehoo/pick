import type { InjectionKey } from 'vue'

export const pickCollapseAccordion = Symbol() as InjectionKey<boolean>
export const pickCollapseOpenHover = Symbol() as InjectionKey<boolean>
export const pickCollapseEmitChange = Symbol() as InjectionKey<()=>void>
export const pickCollapseCloseAllItems = Symbol() as InjectionKey<Function>
