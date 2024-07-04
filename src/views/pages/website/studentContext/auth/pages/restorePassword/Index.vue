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
                <h3>{{ $t('studentContext.auth.restore_password.title') }}</h3>
                <p class="text-muted">{{ $t('studentContext.auth.restore_password.label') }}</p>
              </div>

              <!-- Forgot Password Form -->
              <form method="POST" @submit.prevent="send">

                <div class="form-group">
                  <label class="form-control-label">{{ $t('studentContext.auth.restore_password.form.password') }}</label>
                  <input type="password" v-model="form.password" class="form-control" placeholder="New password" required>
                </div>

                <div class="form-group">
                  <label class="form-control-label">{{ $t('studentContext.auth.restore_password.form.password_confirmation') }}</label>
                  <input type="password" v-model="form.password_confirmation" class="form-control" placeholder="New password confirmation" required>
                </div>
              
                <div class="text-end">
                  <router-link class="forgot-link" :to="$tMakeRoute({ name: 'student-login' })">{{ $t('studentContext.auth.restore_password.remember_your_password') }}</router-link>
                </div>

                <button class="btn btn-primary login-btn" type="submit">{{ $t('studentContext.auth.restore_password.reset_password_btn_text') }}</button>
              </form>
              <!-- /Forgot Password Form -->
            </div>
          </div>

          <HorizontalLanguageSwitcher />
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
  import HorizontalLanguageSwitcher from '@/views/pages/components/horizontalLanguageSwitcher/Index.vue'

  const {
    form,

    send,
  } = useBehavior();

</script>

