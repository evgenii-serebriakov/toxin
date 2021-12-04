<template>
  <div class="input">
    <input
      :id="idAttr"
      :class="classAttr"
      class="input__text"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    idAttr: {
      type: String,
      default: ''
    },
    classAttr: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  &__text {
    border: 1px solid $darkShade25;
    color: $darkShade75;
    &:hover,
    &:focus {
      color: $darkShade75;
      outline: none;
      border: 1px solid $darkShade50;
      box-shadow: none;
    }
    &::placeholder {
      color: $darkShade25;
    }
  }
}
</style>