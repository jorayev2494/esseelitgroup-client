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
									<h3>Login <span>Mentoring</span></h3>
									<p class="text-muted">Access to our dashboard</p>
								</div>

								<form action="/" @submit.prevent="login">
									<div class="form-group">
										<label class="form-control-label">Email Address</label>
										<input type="email" v-model="form.email" class="form-control" required>
									</div>

									<div class="form-group">
										<label class="form-control-label">Password</label>
										<div class="pass-group">
											<input :type="isShowPassword ? 'text' : 'password'" v-model="form.password" class="form-control pass-input" required>
											<span class="toggle-password fas" :class="isShowPassword ? 'fa-eye-slash' : 'fa-eye'" @click="toggleIsShowPassword"></span>
										</div>
									</div>

									<div class="text-end">
										<router-link class="forgot-link" :to="$tMakeRoute({ name: 'student-restore-password-link' })">Forgot Password ?</router-link>
									</div>

									<button type="submit" class="btn btn-primary login-btn">Login</button>
									<!-- <div class="text-center dont-have">Don’t have an account? <router-link to="/pages/register">Register</router-link></div> -->
								</form>

							</div>
						</div>
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

  const {
    isShowPassword,
    form,

    toggleIsShowPassword,
    login,
  } = behavior();
  
</script>

