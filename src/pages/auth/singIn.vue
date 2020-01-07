<template>
  <f7-page name="Sing In" login-screen>
    <f7-navbar title="Sing In" back-link="Back"></f7-navbar>
    <!-- no-hairlines -->

    <f7-login-screen-title>Login</f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        type="text"
        name="username"
        placeholder="Your username"
        :value="email"
        @input="email = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        type="password"
        name="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button title="Sign In" login-screen-close @click="alertLoginData"></f7-list-button>
      <f7-block-footer>
        <f7-link href="/singup/">Não tem Conta? Cadastre-se</f7-link>
      </f7-block-footer>
    </f7-list>

    <!-- <f7-list no-hairlines form>
      <f7-list-input
        outline
        label="Email"
        floating-label
        type="text"
        placeholder="Email"
        clear-button
        :value="email"
        @input="email = $event.target.value"
      ></f7-list-input>
      <f7-list-input
        outline
        label="Password"
        floating-label
        type="password"
        placeholder="Your password"
        clear-button
        :value="password"
        @input="password = $event.target.value"
      ></f7-list-input>
    </f7-list>
    <f7-block>
      <f7-button outline login-screen-close @click="alertLoginData">Sing In</f7-button>
      <div style="text-align:center;">
        <f7-link href="/singup/">Não tem Conta? Cadastre-se</f7-link>
        <br />
        <f7-link>Esqueci a senha</f7-link>
      </div>
    </f7-block> -->
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    alertLoginData() {
      this.$f7.dialog.alert(
        "Email: " + this.email + "<br>Password: " + this.password
      );
    }
  }
};
</script>
