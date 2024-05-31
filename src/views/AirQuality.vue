
<script setup>
import sidebar from '../components/sidebar.vue'
import navbar from '../components/navbar.vue'
import foter from '../components/footer.vue'
</script>

<template>
    <!-- side bar -->
    <sidebar />
    <!-- end of side bar -->

    <!-- content main -->
    <div class="content">
       <navbar />

       <foter />
    </div>
     <!-- content main -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

