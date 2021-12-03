<template>
  <base-input 
    :id="idAttr"
    :class="classAttr"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: 'BaseInputPassword',
  props: [
    'idAttr',
    'classAttr',
    'disabled',
    'placeholder',
    'type'
  ]
};
</script>