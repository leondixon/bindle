---
title: Bindle
description: Text, title, and styling in standard markdown.
navigation:
  icon: i-lucide-heading-1
---

::code-preview
---
class: "[&>div]:*:my-0"
---
::div{ class="flex }
  ::label{ for="test-input" }
    Test input
  ::
  ::input{ label="Test input" name="test input" id="test-input" }
  ::
::

#code
```vue
<template>
  <Bindle type="text" label="Test input" >
</template>
```
::