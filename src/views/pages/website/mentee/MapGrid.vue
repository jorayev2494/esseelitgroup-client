<template>
<div class="map-page">
    <div class="main-wrapper">
        <layout-header1></layout-header1>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
	            <div class="row">
					<div class="col-xl-6 col-lg-12 order-md-last order-sm-last order-last map-left">
				
						<div class="row align-items-center mb-4">
							<div class="col-md-6 col">
								<h4>2245 Mentees found</h4>
							</div>

							<div class="col-md-6 col-auto">
								<div class="view-icons ">
									<router-link to="/mentee/map-grid" class="grid-view active"><i class="fas fa-th-large"></i></router-link>
									<router-link to="/mentee/map-list" class="list-view"><i class="fas fa-bars"></i></router-link>
								</div>
								<div class="sort-by d-sm-block d-none">
									<span class="sortby-fliter">
										<vue-select :options="options" />
									</span>
								</div>
							</div>
						</div>

							<div class="row">
								<div class="col-sm-6 col-md-4 col-xl-6" v-for="item in favourites" :key="item.id">
									<div class="profile-widget">
										<div class="user-avatar">
											<router-link to="/mentee/mentor-profile">
												<img class="img-fluid" alt="User Image" :src="require(`@/assets/img/website/user/${item.image}`)">
											</router-link>
											<a href="javascript:void(0)" class="fav-btn">
												<i class="far fa-bookmark"></i>
											</a>
										</div>
										<div class="pro-content">
											<h3 class="title">
												<router-link to="/mentee/mentor-profile">{{item.name}}</router-link> 
												<i class="fas fa-check-circle verified"></i>
											</h3>
											<p class="speciality">{{item.specialist}}</p>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="d-inline-block average-rating">{{item.ratings}}</span>
											</div>
											<ul class="available-info">
												<li>
													<i class="fas fa-map-marker-alt"></i>{{item.location}}
												</li>
												<li>
													<i class="far fa-clock"></i>{{item.available_on}}
												</li>
												<li>
													<i class="far fa-money-bill-alt"></i>{{item.fees}}<i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
												</li>
											</ul>
											<div class="row row-sm">
												<div class="col-6">
													<router-link to="/mentee/mentor-profile" class="btn view-btn">View Profile</router-link>
												</div>
												<div class="col-6">
													<router-link to="/booking" class="btn book-btn">Book Now</router-link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
					<div class="load-more text-center">
						<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>	
					</div>
	            </div>
	            <!-- /content-left-->
	            <div class="col-xl-6 col-lg-12 map-right">
	                <div id="map" class="map-listing"></div>
	                <!-- map-->
	            </div>
	            <!-- /map-right-->
	        </div>
	        <!-- /row-->
	   
				</div>

			</div>		
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</div>
</template>

<script>
import favourites from '@/assets/json/website/favourites.json'
const images = require.context('@/assets/img/website/user/', false, /\.png$|\.jpg$/)

let infowindow = null;
let map, current = 0;
const icons = {
  'default':require('@/assets/img/website/marker.png')
};
export default {
    data() {
        return {
            favourites: favourites,
            slider: null,
			bounds: new google.maps.LatLngBounds(),
			lat: '53.470692',
			lng: '-2.220328',
			options:  ["Select", "Rating", "Popular", "Latest", "Free"],
            locations: [{
                "id": 1,
                "doc_name":"Ruby Perrin",
                "speciality":"Digital Marketer",
                "address":"Florida, USA",
                "next_available":"Available on Fri, 22 Mar",
                "amount":"$300 - $1000",
                "lat":53.470692,
                "lng":-2.220328,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"17",
                "image":'user.jpg'
                }, {
                "id": 2,
                "doc_name":"Darren Elder",
                "speciality":"Digital Marketer",
                "address":"Newyork, USA",
                "next_available":"Available on Fri, 23 Mar",
                "amount":"$50 - $300",
                "lat":53.469189,
                "lng":-2.199262,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"35",
                "image":'user1.jpg'
                }, {
                "id": 3,
                "doc_name":"Deborah Angel",
                "speciality":"UNIX, Calculus, Trigonometry",
                "address":"Georgia, USA",
                "next_available":"Available on Fri, 24 Mar",
                "amount":"$100 - $400",
                "lat":53.468665,
                "lng":-2.189269,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"27",
                "image":'user2.jpg'
                }, {
                "id": 4,
                "doc_name":"Sofia Brient",
                "speciality":"Computer Programming",
                "address":"Louisiana, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$150 - $250",
                "lat":53.463894,
                "lng":-2.177880,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"4",
                "image":'user3.jpg'
                }, {
                "id": 5,
                "doc_name":"Marvin Campbell",
                "speciality":"ASP.NET,Computer Gaming",
                "address":"Michigan, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$50 - $700",
                "lat":53.466359,
                "lng":-2.213314,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"66",
                "image":'user4.jpg'
                }, {
                "id": 6,
                "doc_name":"Katharine Berthold",
                "speciality":"Digital Marketer",
                "address":"Texas, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$100 - $500",
                "lat":53.463906,
                "lng":-2.213271,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"52",
                "image":'user5.jpg'
                }, {
                "id": 7,
                "doc_name":"Linda Tobin",
                "speciality":"UNIX, Calculus, Trigonometry",
                "address":"Kansas, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$100 - $1000",
                "lat":53.461974,
                "lng":-2.210661,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"43",
                "image":'user6.jpg'
                }, {
                "id": 8,
                "doc_name":"Paul Richard",
                "speciality":"Computer Programming",
                "address":"California, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$100 - $400",
                "lat":53.458785,
                "lng":-2.188532,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"49",
                "image":'user7.jpg'
                }, {
                "id": 9,
                "doc_name":"John Gibbs",
                "speciality":"ASP.NET,Computer Gaming",
                "address":"Oklahoma, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$500 - $2500",
                "lat":53.4558571,
                "lng":-2.1950372,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"112",
                "image":'user8.jpg'
                }, {
                "id":10,
                "doc_name":"Olga Barlow",
                "speciality":"Periodontology and Oral",
                "address":"Montana, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$75 - $250",
                "lat":53.458850,
                "lng":-2.194549,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"65",
                "image":'user9.jpg'
                }, {
                "id":11,
                "doc_name":"Julia Washington",
                "speciality":"Endocrinology",
                "address":"Oklahoma, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$275 - $450",
                "lat":53.461733,
                "lng":-2.194502,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"5",
                "image":'user10.jpg'
                }, {
                "id":12,
                "doc_name":"Shaun Aponte",
                "speciality":"Diploma in (DLO)",
                "address":"Indiana, USA",
                "next_available":"Available on Fri, 25 Mar",
                "amount":"$150 - $350",
                "lat":53.460548,
                "lng":-2.190956,
                "icons":"default",
                "profile_link":"/mentee/mentor-profile",
                "total_review":"5",
                "image":'user11.jpg'
                }
	        ]
        }
    },
    mounted() {
        this.showmap()
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
        show(value) {
			const setInfo = (marker) => {
			const content = 
			'<div class="profile-widget" style="width: 100%; display: inline-block;">'+
				'<div class="doc-img">'+
					'<a href="' + marker.profile_link + '" tabindex="0" target="_blank">'+
						'<img class="img-fluid" alt="' + marker.doc_name + '" :src="require(`@/assets/img/website/user/${marker.image}`)">'+
					'</a>'+
				'</div>'+
				'<div class="pro-content">'+
					'<h3 class="title">'+
						'<a href="' + marker.profile_link + '" tabindex="0">' + marker.doc_name + '</a>'+
						'<i class="fas fa-check-circle verified"></i>'+
					'</h3>'+
					'<p class="speciality">' + marker.speciality + '</p>'+
					'<div class="rating">'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star"></i>'+
						'<span class="d-inline-block average-rating"> (' + marker.total_review + ')</span>'+
					'</div>'+
					'<ul class="available-info">'+
						'<li><i class="fas fa-map-marker-alt"></i> ' + marker.address + ' </li>'+
						'<li><i class="far fa-clock"></i> ' + marker.next_available + '</li>'+
						'<li><i class="far fa-money-bill-alt"></i> ' + marker.amount + '</li>'+
					'</ul>'+
				'</div>'+
			'</div>';
			infowindow.setContent(content);
		}
			infowindow.close();

				if (!map.slide) {
					return;
				}
				let next, marker;
				if (this.locations.length == 0 ) {
					return
				} else if (this.locations.length == 1 ) {
					next = 0;
				}
				if (this.locations.length >1) {
					do {
						next = Math.floor (Math.random()*this.locations.length);
					} while (next == current)
				}
				current = next;
				marker = this.locations[next];
				setInfo(marker);
				infowindow.open(map, marker);
		},
		
		showmap() {
				let lat = parseFloat(this.lat);
				let lng = parseFloat(this.lng);
	
				let mapOptions = {
					zoom: 14,
					scrollwheel: false,
					mapTypeId: 'roadmap',
					center: {
						lat: lat,
						lng: lng
					}
				};
				map = new google.maps.Map(document.getElementById('map'), mapOptions);
				map.slide = true;

				this.setMarkers(map, this.locations);
				infowindow = new google.maps.InfoWindow({
					content: "loading..."
				});
				google.maps.event.addListener(infowindow, 'closeclick',function(){
					infowindow.close();
				});
				this.slider = window.setTimeout(this.show(1), 3000);		
		},
		setMarkers(map, markers) {
			const setInfo = (marker) => {
			const content = 
			'<div class="profile-widget" style="width: 100%; display: inline-block;">'+
				'<div class="doc-img">'+
					'<a href="' + marker.profile_link + '" tabindex="0" target="_blank">'+
						'<img  alt="' + marker.doc_name + '" :src="require(`@/assets/img/website/user/${marker.image}`)">'+
					'</a>'+
				'</div>'+
				'<div class="pro-content">'+
					'<h3 class="title">'+
						'<a href="' + marker.profile_link + '" tabindex="0">' + marker.doc_name + '</a>'+
						'<i class="fas fa-check-circle verified"></i>'+
					'</h3>'+
					'<p class="speciality">' + marker.speciality + '</p>'+
					'<div class="rating">'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star filled"></i>'+
						'<i class="fas fa-star"></i>'+
						'<span class="d-inline-block average-rating"> (' + marker.total_review + ')</span>'+
					'</div>'+
					'<ul class="available-info">'+
						'<li><i class="fas fa-map-marker-alt"></i> ' + marker.address + ' </li>'+
						'<li><i class="far fa-clock"></i> ' + marker.next_available + '</li>'+
						'<li><i class="far fa-money-bill-alt"></i> ' + marker.amount + '</li>'+
					'</ul>'+
				'</div>'+
			'</div>';
			infowindow.setContent(content);
		}
			for (let i = 0; i < markers.length; i++) {
				let item = markers[i];
				
				let latlng = new google.maps.LatLng(parseFloat(item.lat), parseFloat(item.lng));
				let marker = new google.maps.Marker({
					position: latlng,
					map: map,
					doc_name: item.doc_name,
					address: item.address,
					speciality: item.speciality,
					next_available: item.next_available,
					amount: item.amount,
					profile_link: item.profile_link,
					total_review: item.total_review,
					animation: google.maps.Animation.DROP,
					icon: icons[item.icons].default,
					image: item.image
					});
					this.bounds.extend(marker.position);
					markers[i] = marker;
					google.maps.event.addListener(marker, "click", function () {
						setInfo(markers[i]);
						infowindow.open(map,markers[i]);
						window.clearTimeout(this.slider);
					});
				}
			map.fitBounds(this.bounds);
			google.maps.event.addListener(map, 'zoom_changed', function() {
				if (map.zoom > 16) map.slide = false;
			});
		},
    },
}
</script>