
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
       <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary rounded p-4 container-electricity">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Data Usage</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex align-content-center container-dougnut-main mt-2 " >
                                <div class="d-flex">
                                    <canvas id="doughnut-chart2"></canvas>
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
                                <h6 class="mb-0">Authentication Logs</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="line-chart2"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4 container-electricity">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">Response Time</h6>
                                <a href="">Show All</a>
                            </div>
                            <canvas id="Response-time"></canvas>
                        </div>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <div class="bg-secondary text-center rounded p-4 container-electricity">
                            <div class="d-flex align-items-center justify-content-between mb-4">
                                <h6 class="mb-0">System Performance</h6>
                                <a href="">Show All</a>
                            </div>
                            <div class="d-flex align-items-center justify-content-center mb-4 gap-5">
                                <div class="electricity-circular">
                                    <h6 class="mb-3">CPU</h6>
                                    <div class="electricity-outer">
                                        <div class="electricity-inner">
                                            <div id="number-electricity"></div>
                                            <p>%</p>
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
                                    <h6 class="mb-3">RAM</h6>
                                    <div class="electricity-outer">
                                        <div class="electricity-inner">
                                            <div id="number-electricity2"></div>
                                            <p>%</p>
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

        // d2
        const chartData2 = {
        labels: ["IoT", "Cloud App" ],
        data: [65,35],
    };
    var doughnut_chart2 = $("#doughnut-chart2").get(0);
    if(doughnut_chart2) {
        var ctx6d2 = $("#doughnut-chart2").get(0).getContext("2d");
        var myChartd2 = new Chart(ctx6d2, {
            type: "doughnut",
            data:{
                labels: chartData2.labels,
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
        const dataset2 = myChartd2.data.datasets[0];
        const ul = document.querySelector(".detail-cost ul");
        const populateUl = () => {
        chartData2.labels.forEach((l, i) => {
        let li = document.createElement("li");
        const backgroundColordiv = dataset2.backgroundColor[i]; 
        li.innerHTML = `
        <span style='background-color: ${backgroundColordiv};
        width: 40px;
        height: 8px;
        display: inline-block;
        ' >
        </span>
        ${l}: <span class='percentage-electricity'>
        ${chartData2.data[i]}
        %</span>`;
        ul.appendChild(li);
    });
    };
    populateUl();
    } else {
        console.log("This ID not found!");
    }

    // Single Line Chart 2
    var single_line_chart2 = $("#line-chart2").get(0);
    if(single_line_chart2) {
        var ctx32 = single_line_chart2.getContext("2d");
        var myChart3 = new Chart(ctx32, {
            type: "line",
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "Authentication Logs",
                    fill: false,
                    backgroundColor: "rgba(235, 22, 22, .7)",
                    data: [7, 8, 8, 3, 4, 6, 1]
                }]
            },
            options: {
                responsive: true
            }
        });
    } else {
        console.log("This ID not found!");
    }

    
    var responsetime = $("#Response-time").get(0);
    if(responsetime) {
        var ctxlhrp = $("#Response-time").get(0).getContext("2d");
        var myChartlhrp = new Chart(ctxlhrp, {
            type: "line",
            data: {
                labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
                datasets: [{
                        label: "Response Time",
                        data: [15, 30, 55, 20, 55, 25, 30],
                        backgroundColor: "rgba(235, 22, 22, .7)",
                        fill: true
                    },
                ]
                },
            options: {
                responsive: true
            }
        });
    } else {
        console.log("This ID not found!");
    }

    let number = document.getElementById("number-electricity");
    let counter = 0;
    setInterval(() => {
        if(counter == 65) {
            clearInterval();
        } else {
            counter += 1;
            number.innerHTML = 
            `${counter} `
        }
    },70);

    let number2 = document.getElementById("number-electricity2");
    let counter2 = 0;
    setInterval(() => {
        if(counter2 == 47) {
            clearInterval();
        } else {
            counter2 += 1;
            number2.innerHTML = 
            `${counter2} `
            
        }

    },70);




    

}
}
</script>

