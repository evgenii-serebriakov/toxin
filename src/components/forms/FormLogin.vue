<template>
  <section 
    class="login login-modal bg-light shadow-lg rounded"
  >
    <form class="form" ref="form">
      <legend 
        class="form__title fw-bold"
      >
        Войти
      </legend>

      <div class="form__fieldset">
        <base-input 
          type="email"
          placeholder="Email"
          class="input-user"
          class-attr="form-control"
        />
        <base-input
          type="password"
          placeholder="Пароль"
          class="input-password"
          class-attr="form-control"
        />
      </div>

      <div class="form__buttons">
        <base-button text="Войти" />

        <div class="form__buttons-box">
          <a class="form__buttons-link" href="#">Нет аккаунта на Toxin?</a>
          <base-button-outline text="Cоздать" />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'FormLogin'
};
</script>

<style lang="scss" scoped>
.login {
  max-width: 380px;
  
  &-modal {
    padding: 40px 30px 32px 30px;
  }

  .form {
    &__title {
      margin-bottom: rem(20);
    }

    .input {
      &-user {
        margin-bottom: rem(10);
      }

      &-password {
        margin-bottom: rem(20);
      }
    }

    &__buttons {
      &-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: rem(30);
      }

      &-link {
        font-size: 14px;
        color: #000;
        text-decoration: none;
      }
    }
  }
}
</style>
