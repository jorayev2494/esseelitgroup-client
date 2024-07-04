<template>
  <div class="account-page">
    <div class="main-wrapper">
      <!-- Page Content -->
			<div class="bg-pattern-style">
				<div class="content">
							
					<!-- Login Tab Content -->
					<div class="account-content">
						<div class="account-box">
							<div class="login-right">
								<div class="login-header">
									<h3>{{ $t('studentContext.auth.login.title') }}</h3>
									<p class="text-muted">{{ $t('studentContext.auth.login.label') }}d</p>
								</div>

								<form action="#" @submit.prevent="login">
									<div class="form-group">
										<label class="form-control-label">{{ $t('studentContext.auth.login.form.email') }}</label>
										<input type="email" v-model="form.email" class="form-control" :placeholder="$t('studentContext.auth.login.form.email')" required>
									</div>

									<div class="form-group">
										<label class="form-control-label">{{ $t('studentContext.auth.login.form.password') }}</label>
										<div class="pass-group">
											<input :type="isShowPassword ? 'text' : 'password'" v-model="form.password" class="form-control pass-input" :placeholder="$t('studentContext.auth.login.form.password')" required>
											<span class="toggle-password fas" :class="isShowPassword ? 'fa-eye-slash' : 'fa-eye'" @click="toggleIsShowPassword"></span>
										</div>
									</div>

									<div class="text-end">
										<router-link class="forgot-link" :to="$tMakeRoute({ name: 'student-restore-password-link' })">{{ $t('studentContext.auth.login.forgot_password') }}</router-link>
									</div>

									<button type="submit" class="btn btn-primary login-btn">{{ $t('studentContext.auth.login.login_btn_text') }}</button>
									<!-- <div class="text-center dont-have">Don’t have an account? <router-link to="/pages/register">Register</router-link></div> -->
								</form>

							</div>
						</div>

						<HorizontalLanguageSwitcher />
					</div>
					<!-- /Login Tab Content -->

				</div>

			</div>
			<!-- /Page Content -->
    </div>
  </div>
</template>

<script setup>
  import behavior from './useBehavior'
  import HorizontalLanguageSwitcher from '@/views/pages/components/horizontalLanguageSwitcher/Index.vue'

  const {
    isShowPassword,
    form,

    toggleIsShowPassword,
    login,
  } = behavior();
  
</script>

