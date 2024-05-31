
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
           <!-- List -->
             <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary text-center rounded p-4 container-electricity">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Labtek VII</h6>
                        <div class="search-form d-flex">
                            <div class="search-main"><input class="border-0 mt-1" type="input" placeholder="Building..."></div>
                            <div class="submit-form">Search</div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-white">
                                    <th scope="col"><input class="form-check-input" type="checkbox"></th>
                                    <th scope="col">Room</th>
                                    <th scope="col">Last Update</th>
                                    <th scope="col">Bin Type</th>
                                    <th scope="col">Weight (Kg)</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>SCCIC</td>
                                    <td>15 Mar 2024</td>
                                    <td class="bin-type-style">
                                        <select id="bin">
                                            <option value="volvo">Recycle</option>
                                            <option value="saab">Garbage</option>
                                      </select>
                                    </td>
                                    <td>68</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>Residensi</td>
                                    <td>15 Mar 2024</td>
                                    <td class="bin-type-style">
                                        <select id="bin">
                                            <option value="volvo">Recycle</option>
                                            <option value="saab">Garbage</option>
                                      </select>
                                    </td>
                                    <td>68</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>Laboratorium Dasar 1</td>
                                    <td>15 Mar 2024</td>
                                    <td class="bin-type-style">
                                        <select id="bin">
                                            <option value="volvo">Recycle</option>
                                            <option value="saab">Garbage</option>
                                      </select>
                                    </td>
                                    <td>68</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>Laboratorium Komputer</td>
                                    <td>15 Mar 2024</td>
                                    <td class="bin-type-style">
                                        <select id="bin">
                                            <option value="volvo">Recycle</option>
                                            <option value="saab">Garbage</option>
                                      </select>
                                    </td>
                                    <td>68</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox"></td>
                                    <td>Tata Usaha</td>
                                    <td>15 Mar 2024</td>
                                    <td class="bin-type-style">
                                        <select id="bin">
                                            <option value="volvo">Recycle</option>
                                            <option value="saab">Garbage</option>
                                      </select>
                                    </td>
                                    <td>68</td>
                                    <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- List -->

            <!-- graph for waste -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded p-4 d-flex container-electricity align-items-center  gap-5">
                            <div class="img-waste-bin ms-3">
                                <img src="../assets/img/bin.png" alt="">
                                <div class="caption-img-waste-bin text-center">
                                    <p class="mt-2 mb-2">Waste Bin 1</p>
                                    <button>Connected</button>
                                </div>
                            </div>
                            <div>
                                <div class="list-light d-flex align-items-center border-bottom py-2">
                                        <div class="w-100 ms-3">
                                        <div class="d-flex w-100 align-items-center justify-content-between">
                                            <span>Bin type</span>
                                            <span>Recycle</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-light d-flex align-items-center border-bottom py-2">
                                    <div class="w-100 ms-3">
                                        <div class="d-flex w-100 align-items-center justify-content-between">
                                            <span>Fill Level</span>
                                            <span>32</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-light d-flex align-items-center border-bottom py-2">
                                    <div class="w-100 ms-3">
                                        <div class="d-flex w-100 align-items-center justify-content-between">
                                            <span>Weight (Kg)</span>
                                            <span>30</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-light d-flex align-items-center border-bottom pt-2">
                                    <div class="w-100 ms-3">
                                        <div class="d-flex w-100 align-items-center justify-content-between">
                                            <span>Status</span>
                                            <span>Full</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6 ">
                        <div class="bg-secondary text-center rounded p-4 container-electricity align-items-center">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Labtek VIII</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="bar-chart2"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end of graph for waste -->
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
        var single_bar_chart = $("#bar-chart2").get(0);
if(single_bar_chart) {
    var ctxb2 = single_bar_chart.getContext("2d");
    var myChart4 = new Chart(ctxb2, {
        type: "bar",
        data: {
            labels: ["Weight", "Fill Level", "Odour"],
            datasets: [{
                    backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24]
            }]
        },
        options: {
            responsive: true, 
            plugins: {
                legend: {
                  display: false,
                },
              } 
        }
    });
} else {
    console.log("This ID not found!");
}
    }
 }
 </script>

