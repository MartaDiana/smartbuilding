<template>
<!-- Spinner Start -->
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->

        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-building me-2"></i>SPOT</h3>
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="../assets/img/user.jpg" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Admin SPOT</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <router-link to="/" class="nav-item nav-link" :class="{ 'active': isActive('/') }"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</router-link>
                    <router-link to="/camera" class="nav-item nav-link" :class="{ 'active': isActive('/camera')}"><i class="fa fa-camera me-2"></i>Camera</router-link>
                    <router-link to="/access_control" class="nav-item nav-link" :class="{ 'active': isActive('/access_control')}"><i class="fa fa-door-open me-2"></i>Access Control</router-link>
                    <router-link to="/electricity" class="nav-item nav-link" :class="{ 'active': isActive('/electricity')}"><i class="fa fa-bolt me-2"></i>Electricity</router-link>
                    <router-link to="/lighting" class="nav-item nav-link" :class="{ 'active': isActive('/lighting')}"><i class="fa fa-lightbulb me-2"></i>Lighting</router-link>
                    <router-link to="/air_quality" class="nav-item nav-link" :class="{ 'active': isActive('/air_quality')}"><i class="fa fa-wind me-2"></i>Air Quality</router-link>
                    <router-link to="/clean_water" class="nav-item nav-link" :class="{ 'active': isActive('/clean_water')}"><i class="fa fa-water me-2"></i>Clean Water</router-link>
                    <router-link to="/waste" class="nav-item nav-link" :class="{ 'active': isActive('/waste')}"><i class="fa fa-recycle me-2"></i>Waste</router-link>
                    <router-link to="/parking" class="nav-item nav-link" :class="{ 'active': isActive('/parking')}"><i class="fa fa-car me-2"></i>Parking</router-link>
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->



</template>

<script>
import { ref } from 'vue';

export default {
   setup() {
    // Spinner
    "use strict";
    // Spinner
    
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
        
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

     // Method isActive
     const isActive = (route) => {
      return window.location.pathname === route;
    };

    // Kembalikan data dan method yang diperlukan
    return {
      isActive
    };

    //close
   }
}
</script>

