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
::div{ class="flex flex-col" }
  ::label{ for="test-input" }
    Test input
  ::
  ::input{ label="Test input" name="test input" id="test-input" class="border border-white" }
  ::
::

#code
```vue
<template>
  <Bindle type="text" label="Test input" >
</template>
```
::