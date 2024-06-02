<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper account-page">    
    <!-- Page Content -->
    <div class="bg-pattern-style">
      <div class="content">            
        <!-- Account Content -->
        <div class="account-content">
          <div class="account-box">
            <div class="login-right">
              <div class="login-header">
                <h3>{{ $t('companyContext.auth.forgot_password.title') }}</h3>
                <p class="text-muted">{{ $t('companyContext.auth.forgot_password.label') }}</p>
              </div>

              <!-- Forgot Password Form -->
              <form method="POST" @submit.prevent="send">

                <div class="form-group">
                  <label class="form-control-label">{{ $t('companyContext.auth.forgot_password.form.email') }}</label>
                  <input type="email" v-model="form.email" class="form-control" :placeholder="$t('companyContext.auth.forgot_password.form.email')" required>
                </div>
              
                <div class="text-end">
                  <router-link class="forgot-link" :to="$tMakeRoute({ name: 'company-login' })">{{ $t('companyContext.auth.forgot_password.remember_your_password') }}</router-link>
                </div>

                <button class="btn btn-primary login-btn" type="submit">{{ $t('companyContext.auth.forgot_password.restore_password_btn_text') }}</button>
              </form>
              <!-- /Forgot Password Form -->
            </div>
          </div>
        </div>
        <!-- /Account Content -->
      </div>
    </div>		
    <!-- /Page Content -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script setup>
  import useBehavior from "./useBehavior";

  const {
    form,

    send,
  } = useBehavior();

</script>

