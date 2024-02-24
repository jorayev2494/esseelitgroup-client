<template>
    <!-- Home Banner -->
			<section class="section section-search home-slider-two index-three">
				<div class="container">
					<div class="banner-wrapper m-auto text-center aos" data-aos="fade-up">
						<div class="banner-header">
							<h1>Find the Perfect Mentors Near Your Location</h1>
							<p>Own your future learning new skills online</p>
						</div>
                         
						<!-- Search -->
						<div class="search-box search-three">
							<form action="/mentee/mentor-search">
								<div class="form-group search-location">
									<input type="text" class="form-control" placeholder="Keyword / Course Name">
								</div>
								<div class="form-group search-info">
									<input type="text" class="form-control" placeholder="City or Postalcode">
								</div>
								<button type="submit" class="btn btn-primary search-btn"><i><img src="@/assets/img/icon/search-white-icon.svg" alt=""></i> <span>Search</span></button>
							</form>
						</div>
						<!-- /Search -->
						<div class="poular-search">
							<p><span>Popular Search :</span> Designer, Developer, Web, iOS, PHP</p>
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->
    </template>