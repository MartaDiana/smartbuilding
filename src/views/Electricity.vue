
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

       <div class="container-fluid pt-4 px-4">
            <div class="bg-secondary text-center rounded p-4">
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
                                <th scope="col">Electricity</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input class="form-check-input" type="checkbox"></td>
                                <td>SCCIC</td>
                                <td>15 Mar 2024</td>
                                <td>87,611</td>
                                <td>Normal</td>
                                <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input class="form-check-input" type="checkbox"></td>
                                <td>Residensi</td>
                                <td>15 Mar 2024</td>
                                <td>87,611</td>
                                <td>Normal</td>
                                <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input class="form-check-input" type="checkbox"></td>
                                <td>Laboratorium Dasar 1</td>
                                <td>15 Mar 2024</td>
                                <td>87,611</td>
                                <td>Normal</td>
                                <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input class="form-check-input" type="checkbox"></td>
                                <td>Laboratorium Komputer</td>
                                <td>15 Mar 2024</td>
                                <td>87,611</td>
                                <td>Normal</td>
                                <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            <tr>
                                <td><input class="form-check-input" type="checkbox"></td>
                                <td>Tata Usaha</td>
                                <td>15 Mar 2024</td>
                                <td>87,611</td>
                                <td>Normal</td>
                                <td><a class="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            <!-- Recent Sales End -->

            <!-- Sales Chart Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded p-4 container-electricity">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Labtek VIII Cost Predicted</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex align-content-center container-dougnut-main mt-2 " >
                                <div class="d-flex">
                                    <canvas id="doughnut-chart"></canvas>
                                </div>
                                <div class="detail-cost d-flex">
                                    <ul>
                                    </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4 container-electricity">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Labtek VII Usage Estimate</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="line-chart"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4 container-electricity">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Labtek VIII Active Appliances</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="bar-chart1"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4 container-electricity">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Labtek VIII Energy Intensity</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex align-items-center justify-content-center mb-4 gap-5">
                                <div class="electricity-circular">
                                    <h6 class="mb-3">Total Energy</h6>
                                    <div class="electricity-outer">
                                        <div class="electricity-inner">
                                            <div id="number-electricity"></div>
                                            <p>kWh/Sqft</p>
                                        </div>
                                    </div>
                  
                                    <svg class="svg-electricity" xmlns="http://www.w3.org/2000/svg" version="1.1" width="210px" height="210px">
                                        <defs>
                                        <linearGradient id="GradientColor-electricity">
                                            <stop offset="0%" stop-color="#EB1616" />
                                            <stop offset="100%" stop-color="#000000" />
                                        </linearGradient>
                                        </defs>
                                        <circle class="electricity-circle" cx="105" cy="105" r="95" stroke-linecap="round" />
                                    </svg>
                                </div>
                                <div class="electricity-circular">
                                    <h6 class="mb-3">Average Energy</h6>
                                    <div class="electricity-outer">
                                        <div class="electricity-inner">
                                            <div id="number-electricity2"></div>
                                            <p>kWh/Sqft</p>
                                        </div>
                                    </div>
                                    <svg class="svg-electricity" xmlns="http://www.w3.org/2000/svg" version="1.1" width="210px" height="210px">
                                        <defs>
                                        <linearGradient id="GradientColor-electricity">
                                            <stop offset="0%" stop-color="#EB1616" />
                                            <stop offset="100%" stop-color="#000000" />
                                        </linearGradient>
                                        </defs>
                                        <circle class="electricity-circle2" cx="105" cy="105" r="95" stroke-linecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
            </div>

       <foter />
    </div>
     <!-- content main -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>

<script>

export default {
   mounted() {
    const chartData = {
        labels: ["Electricity", "Gas" ],
        data: [65,35],
    };
    var doughnut_chart = $("#doughnut-chart").get(0);
    if(doughnut_chart) {
        var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
        var myChart6 = new Chart(ctx6, {
            type: "doughnut",
            data:{
                labels: chartData.labels,
                datasets: [{
                    backgroundColor: [
                        "rgba(235, 22, 22, .7)",
                        "rgba(235, 22, 22, .3)"
                    ],
                    data: [65,35]
                }]
            },
            options: {
            borderWidth: 13,
            borderRadius: 10,
            borderColor: "#191C24",
            hoverBorderWidth: 0,
            plugins: {
              legend: {
                display: false,
              },
            },
            responsive: true
            }
        });
        const dataset = myChart6.data.datasets[0];
        const ul = document.querySelector(".detail-cost ul");
        const populateUl = () => {
        chartData.labels.forEach((l, i) => {
        let li = document.createElement("li");
        const backgroundColordiv = dataset.backgroundColor[i]; 
        li.innerHTML = `
        <span style='background-color: ${backgroundColordiv};
        width: 40px;
        height: 8px;
        display: inline-block;
        ' >
        </span>
        ${l}: <span class='percentage-electricity'>
        ${chartData.data[i]}
        %</span>`;
        ul.appendChild(li);
    });
    };
    populateUl();
    } else {
        console.log("This ID not found!");
    }

    var single_line_chart = $("#line-chart").get(0);
    if(single_line_chart) {
        var ctx3 = single_line_chart.getContext("2d");
        var myChart3 = new Chart(ctx3, {
            type: "line",
            data: {
                labels: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
                datasets: [{
                    label: "Electricity",
                    fill: false,
                    backgroundColor: "rgba(235, 22, 22, .7)",
                    data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
                }]
            },
            options: {
                responsive: true
            }
        });
    } else {
        console.log("This ID not found!");
    }

    var single_bar_chart = $("#bar-chart1").get(0);
    if(single_bar_chart) {
        var ctx4 = single_bar_chart.getContext("2d");
        var myChart4 = new Chart(ctx4, {
            type: "bar",
            data: {
                labels: ["AC", "EV Charge", "Plug Loads", "Lighting"],
                datasets: [{
                        backgroundColor: [
                        "rgba(235, 22, 22, .7)",
                        "rgba(235, 22, 22, .6)",
                        "rgba(235, 22, 22, .5)",
                        "rgba(235, 22, 22, .4)",
                        "rgba(235, 22, 22, .3)"
                    ],
                    data: [55, 49, 44, 24, 15]
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

