
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

       <!-- content -->
        <!-- Mapbox Start -->
        <div class="container-fluid pt-4 px-4">
            <div id="map-camera"></div> 
        </div>
        <!-- Mapbox End -->
      <!-- end of content -->

       <foter />
    </div>
     <!-- content main -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

<script>

export default {
   mounted() {
    "use strict";
    const map = L.map("map-camera" , {attributionControl: false});
    map.setView([-6.89086, 107.61035], 17);
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
      
        const data = {
            labtekV: {
                coord: [-6.89053, 107.60979],
                title: "Labtek V",
            },
            labtekVI: {
                coord: [-6.89014,107.60968],
                title: "Labtek VI",
            },
            labtekVII: {
                coord: [-6.89062,107.61098],
                title: "Labtek VIII",
            },
            farmasi: {
                coord: [-6.89011,107.61097],
                title: "Farmasi",
            },
            ccTimur: {
                coord: [-6.89125,107.61078],
                title: "Campus Center Timur",
            },
            ccBarat: {
                coord: [-6.89126,107.60991],
                title: "Campus Center Barat",
            },
            kantinGku: {
                coord: [-6.89034,107.60878],
                title: "Kantin GKU",
            },
            doping: {
                coord: [-6.89080,107.61184],
                title: "Lab Dopping",
            },
            perpus: {
                coord: [-6.88838,107.61074],
                title: "Perpustakaan ITB",
            },
            cadl: {
                coord: [-6.88831,107.60954],
                title: "CADL",
            },
            crcs: {
                coord: [-6.88781,107.61175],
                title: "CRCS",
            },
        }

        const myIcon = L.icon({
            iconUrl: '../src/assets/img/cctv.png',
            iconSize: [35, 55],
            iconAnchor: [22, 40],
            popupAnchor: [-3, -76],
        });

        for (let key in data) {
            const building = data[key];
            L.marker(building.coord, {
                title: building.title,
                icon: myIcon,
            })
            .bindPopup(`
            <span class="popup-message">
            <video controls>
                <source src="" type="video/mp4">
            </video>
            </span>`)
            .addTo(map);
        }
    }

    

}
</script>

