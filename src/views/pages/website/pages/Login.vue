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
								<form action="/">
									<div class="form-group">
										<label class="form-control-label">Email Address</label>
										<input type="email" class="form-control">
									</div>
									<div class="form-group">
										<label class="form-control-label">Password</label>
										<div class="pass-group">
											<input type="password" class="form-control pass-input">
											<span class="fas fa-eye toggle-password"></span>
										</div>
									</div>
									<div class="text-end">
										<router-link class="forgot-link" to="/pages/forgot-password">Forgot Password ?</router-link>
									</div>
									<button class="btn btn-primary login-btn" type="button" @click="$router.push('/mentor/index')">Login</button>
									<div class="text-center dont-have">Don’t have an account? <router-link to="/pages/register">Register</router-link></div>
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