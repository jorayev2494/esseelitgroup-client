<template>
    <!-- Sidebar -->
        <div class="profile-sidebar">
            <div class="user-widget">
                <div class="pro-avatar">JD</div>
                <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="user-info-cont">
                    <h4 class="usr-name">Jonathan Doe</h4>
                    <p class="mentor-type">English Literature (M.A)</p>
                </div>
            </div>
            <div class="progress-bar-custom">
                <h6>Complete your profiles ></h6>
                <div class="pro-progress">
                    <div class="tooltip-toggle" tabindex="0"></div>
                    <div class="tooltip">80%</div>
                </div>
            </div>
            <div class="custom-sidebar-nav">
                <ul>
                    <li><router-link to="/mentor/index" v-bind:class="{'active': currentPath == 'mentor-dashboard'}"><i class="fas fa-home"></i>Dashboard <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentor/my-bookings" v-bind:class="{'active': currentPath == 'mentor-bookings'}"><i class="fas fa-clock"></i>Bookings <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentor/schedule-timings" v-bind:class="{'active': currentPath == 'mentor-schedule-timings'}"><i class="fas fa-hourglass-start"></i>Schedule Timings <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentor/chat" v-bind:class="{'active': currentPath == 'mentor-chat'}"><i class="fas fa-comments" ></i>Messages <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentor/invoices" v-bind:class="{'active': currentPath == 'mentor-invocies'}"><i class="fas fa-file-invoice" ></i>Invoices <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentor/reviews" v-bind:class="{'active': currentPath == 'mentor-invoice-view'}"><i class="fas fa-eye"></i>Reviews <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentor/blog" v-bind:class="{'active': currentPath == 'mentor-blog' || currentPath == 'add-blog' || currentPath == 'edit-blog'}"><i class="fab fa-blogger-b"></i>Blog <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentee/mentor-profile" v-bind:class="{'active': currentPath == 'mentor-profile-settings'}"><i class="fas fa-user-cog"></i>Profile <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/pages/login"><i class="fas fa-sign-out-alt"></i>Logout <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                </ul>
            </div>
        </div>
    <!-- /Sidebar -->
</template>

<script>
export default {
    computed: {
        currentPath() {
            return this.$route.name;
        }
    }
}
</script>