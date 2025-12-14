<script setup>
  import {LogIn, User, Lock, CircleDollarSign} from 'lucide-vue-next'
</script>

<template>

     <div class="container-fluid">
          <div class="card">
            <div class="card-header"><CircleDollarSign></CircleDollarSign> Sistema financeiro v5.0</div>
              <div class="card-body">
                  <form>
                      <div class="form-group login-form-row">
                           <User class="login-icon"></User>
                          <input type="text" class="form-control form-control-sm" placeholder="Usuário">
                      </div>

                    <div class="form-group login-form-row">
                      <Lock class="login-icon"></Lock>
                      <input type="password" class="form-control form-control-sm" placeholder="Senha de acesso">
                    </div>

                    <div class="form-group login-form-row">
                      <button type="submit" class="btn btn-primary login-button"> <LogIn></LogIn> LOGIN</button>
                    </div>

                  </form>
              </div>
              <p class="copyright">Todos os direitos reservados 2025</p>
          </div>
     </div>


</template>

<style scoped>
    .container-fluid {
      width: 100%;
      height: 100vh;
      background-color: var(--background-color);
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    .card-header {
       background-color: var(--primary-color);
       color: white;
       font-weight: bold;
      text-align: center;
    }

    .card {
       width: 300px;
       height: 250px;
       margin-top: 20px;
    }

    .login-form-row {
        margin-bottom: 30px;
        display: flex;
    }

    .login-form-row input {
        border: none;
        border-radius: 0;
        border-bottom: solid 1px #ccc;
        outline: none;
    }

    .login-button {
      width: 100%;
      background: var(--primary-color);
      border: none;
    }

    .copyright {
      text-align: center;
      font-size: 12px;
    }

    .login-icon {
       color: var(--primary-color);
    }

</style>