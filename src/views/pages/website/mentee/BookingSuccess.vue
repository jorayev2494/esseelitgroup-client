<template>
    <div class="main-wrapper">
        <layout-header1></layout-header1>
        <breadcrumb15></breadcrumb15>
        <!-- Page Content -->
			<div class="content success-page-cont">
				<div class="container-fluid">
				
					<div class="row justify-content-center">
						<div class="col-lg-6">
						
							<!-- Success Card -->
							<div class="card success-card">
								<div class="card-body">
									<div class="success-cont">
										<i class="fas fa-check"></i>
										<h3>Appointment booked Successfully!</h3>
										<p>Appointment booked with <strong>Darren Elder</strong><br> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong></p>
										<router-link to="/mentor/invoice-view" class="btn btn-primary view-inv-btn">View Invoice</router-link>
									</div>
								</div>
							</div>
							<!-- /Success Card -->
							
						</div>
					</div>
					
				</div>
			</div>		
        <!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>