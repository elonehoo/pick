---
outline: deep
---

# Color

Pick has the main colors that are maintained throughout the application to facilitate the change and effective operation.

## Colors Defaults

We have a series of colors that are used by default. They include:

- primary
- success
- danger
- warning
- dark

For each color, we think has its functionality in the application as alerts of errors (danger), warnings to the user (warning), communications of approval (success), or main color of the application (primary).

<div class="con-colors">
  <ul class="ul">
    <li class="primary-original li">
      primary
    </li>
    <li class="success-original li">
      success
    </li>
    <li class="danger-original li">
      danger
    </li>
    <li class="warning-original li">
      warning
    </li>
    <li class="dark-original li">
      dark
    </li>
  </ul>
</div>

## Customize Theme Colors

We almost always need a personalized application with own colors. In Pick, you can change the main colors to those that you need and the branding that your application has.

When starting Pick tell it to use your colors. We add the new colors as parameters.

```css
/* index.css */
:root{
  --pick-primary: 91, 60, 196;
  --pick-secondary: 121, 49, 177;
  --pick-danger: 242, 19, 93;
  --pick-success: 23, 201, 100;
  --pick-warning: 255, 130, 0;
  --pick-dark: 36, 33, 69;
  --pick-light: 245, 245, 245;
}
```

:::warning
Only RGB colors are supported.
:::

<div class="con-colors">
  <ul class="ul">
    <li class="primary-customize li">
      primary
    </li>
    <li class="success-customize li">
      success
    </li>
    <li class="danger-customize li">
      danger
    </li>
    <li class="warning-customize li">
      warning
    </li>
    <li class="dark-customize li">
      dark
    </li>
  </ul>
</div>

<style scoped>
.con-colors .ul{
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-colors .li{
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  background: rgb(155, 250, 149);
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  cursor: default;
}
.primary-original {
  background: rgb(31, 116, 255) !important;
  box-shadow: 0px 15px 40px -10px rgba(31, 116, 255,.9);
}
.success-original {
  background: rgb(70, 201, 58) !important;
  box-shadow: 0px 15px 40px -10px rgba(70, 201, 58,.9);
}
.danger-original {
  background: rgb(255, 71, 87) !important;
  box-shadow: 0px 15px 40px -10px rgba(255, 71, 87,.9);
}
.warning-original {
  background: rgb(255,186,0) !important;
  box-shadow: 0px 15px 40px -10px rgba(255,186,0,.9);
}
.dark-original {
  background: rgb(30, 30, 30) !important;
  box-shadow: 0px 15px 40px -10px rgba(30, 30, 30,.9);
}

.primary-customize {
  background: rgb(91, 60, 196) !important;
  box-shadow: 0px 15px 40px -10px rgba(91, 60, 196,.9);
}
.success-customize {
  background: rgb(23, 201, 100) !important;
  box-shadow: 0px 15px 40px -10px rgba(23, 201, 100,.9);
}
.danger-customize {
  background: rgb(242, 19, 93) !important;
  box-shadow: 0px 15px 40px -10px rgba(242, 19, 93,.9);
}
.warning-customize {
  background: rgb(255, 130, 0) !important;
  box-shadow: 0px 15px 40px -10px rgba(255, 130, 0,.9);
}
.dark-customize {
  background: rgb(36, 33, 69) !important;
  box-shadow: 0px 15px 40px -10px rgba(36, 33, 69,.9);
}
</style>
