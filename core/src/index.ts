import type { App, Plugin } from 'vue'

import { pickColPlugin } from './components/pickCol'
import { pickRowPlugin } from './components/pickRow'
import { pickAvatarPlugin } from './components/pickAvatar'
import { pickIconPlugin } from './components/pickIcon'
import { pickAlertPlugin } from './components/pickAlert'
import { pickBreadcrumbPlugin } from './components/pickBreadcrumb'
import { pickButtonPlugin } from './components/pickButton'
import { pickCardPlugin } from './components/pickCard'
import { pickCheckBoxPlugin } from './components/pickCheckBox'
import { pickChipPlugin } from './components/pickChip'
import { pickChipsPlugin } from './components/pickChips'
import { pickCollapsePlugin } from './components/pickCollapse'
import { pickCollapseItemPlugin } from './components/pickCollapseItem'
import { pickDialogPlugin } from './components/pickDialog'
import { pickDividerPlugin } from './components/pickDivider'
import { pickImagePlugin } from './components/pickImage'
import { pickImagesPlugin } from './components/pickImages'
import { pickInputPlugin } from './components/pickInput'
import { pickInputNumberPlugin } from './components/pickInputNumber'
import { pickListPlugin } from './components/pickList'
import {pickListHeaderPlugin} from './components/pickListHeader'
import { pickListItemPlugin } from './components/pickListItem'
import { pickLoadingPlugin } from './components/pickLoading'
import { pickNavbarPlugin } from './components/pickNavbar'
import { pickNavbarItemsPlugin } from './components/pickNavbarItems'
import { pickNavbarTitlePlugin } from './components/pickNavbarTitle'
import { pickNavbarGroupPlugin } from './components/pickNavbarGroup'
import {pickSelectPlugin} from './components/pickSelect'
import {pickSelectItemPlugin} from './components/pickSelectItem'

const pickPlugin: Plugin = {
  install(app: App) {
    pickColPlugin.install?.(app)
    pickRowPlugin.install?.(app)
    pickAvatarPlugin.install?.(app)
    pickIconPlugin.install?.(app)
    pickAlertPlugin.install?.(app)
    pickBreadcrumbPlugin.install?.(app)
    pickButtonPlugin.install?.(app)
    pickCardPlugin.install?.(app)
    pickCheckBoxPlugin.install?.(app)
    pickChipPlugin.install?.(app)
    pickChipsPlugin.install?.(app)
    pickCollapsePlugin.install?.(app)
    pickCollapseItemPlugin.install?.(app)
    pickDialogPlugin.install?.(app)
    pickDividerPlugin.install?.(app)
    pickImagePlugin.install?.(app)
    pickImagesPlugin.install?.(app)
    pickInputPlugin.install?.(app)
    pickInputNumberPlugin.install?.(app)
    pickListPlugin.install?.(app)
    pickListHeaderPlugin.install?.(app)
    pickListItemPlugin.install?.(app)
    pickLoadingPlugin.install?.(app)
    pickNavbarPlugin.install?.(app)
    pickNavbarItemsPlugin.install?.(app)
    pickNavbarTitlePlugin.install?.(app)
    pickNavbarGroupPlugin.install?.(app)
    pickSelectPlugin.install?.(app)
    pickSelectItemPlugin.install?.(app)
  },
}

export default pickPlugin
import './style/main.css'
export * from './components/pickRow'
export * from './components/pickCol'
export * from './components/pickAvatar'
export * from './components/pickIcon'
export * from './components/pickAlert'
export * from './components/pickBreadcrumb'
export * from './components/pickButton'
export * from './components/pickCard'
export * from './components/pickCheckBox'
export * from './components/pickChip'
export * from './components/pickChips'
export * from './components/pickCollapse'
export * from './components/pickCollapseItem'
export * from './components/pickDialog'
export * from './components/pickDivider'
export * from './components/pickImage'
export * from './components/pickImages'
export * from './components/pickInput'
export * from './components/pickInputNumber'
export * from './components/pickList'
export * from './components/pickListHeader'
export * from './components/pickListItem'
export * from './components/pickLoading'
export * from './components/pickNavbar'
export * from './components/pickNavbarItems'
export * from './components/pickNavbarTitle'
export * from './components/pickNavbarGroup'
export * from './components/pickNavbarItem'
export * from './components/pickSelect'
export * from './components/pickSelectItem'

export * from './components/pickBreadcrumb/type'
