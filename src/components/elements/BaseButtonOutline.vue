<template>
  <button 
    type="button"
    class="btn-outline text-uppercase fw-bold"
  > 
    <span class="btn-outline__text">{{ text }}</span>
  </button>

</template>

<script>
export default {
  name: 'BaseButtonOutline',
  props: {
    text: {
      type: String,
      default: 'Push'
    }
  }
};
</script>

<style lang="scss" module>
.btn-outline {
  color: $purple;
  font-size: 12px;
  padding: 15px 20px;
  border: 2px solid $purple;
  border-radius: 40px;
  background-color: #fff;

  &:hover {
    color: $purple;
  }
}
</style>
