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
                    <li><router-link to="/mentee/index" v-bind:class="{'active': currentPath == 'mentee-dashboard'}"><i class="fas fa-home"></i>Dashboard <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentee/bookings" v-bind:class="{'active': currentPath == 'mentee-bookings'}"><i class="fas fa-clock"></i>Bookings <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentee/chat" v-bind:class="{'active': currentPath == 'mentee-chat'}"><i class="fas fa-comments"></i>Messages <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentee/favourites" v-bind:class="{'active': currentPath == 'mentee-favourites'}"><i class="fas fa-star"></i>Favourites <span><i class="fas fa-chevron-right"></i></span></router-link></li>
                    <li><router-link to="/mentee/mentor-profile" v-bind:class="{'active': currentPath == 'mentee-mentor-profile'}"><i class="fas fa-user-cog"></i>Profile <span><i class="fas fa-chevron-right"></i></span></router-link></li>
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