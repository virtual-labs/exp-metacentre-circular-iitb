function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Plot GM vs Height graph</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    internal_calculations2();
    let btn_text = get_collapse_btn_text("Calculate position of center of pressure force", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

    <canvas id='myChart'></canvas>

    <br><br>
    <div style='text-align: center;'>
        <button onclick="activity4();" class='btn btn-success'> Next </button>
    </div>
   
   
    </div>

    `;
    maindiv.innerHTML += text;
    plot8();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    for (let i = 0.4; i <= 1.2; i += 0.02) {
        p_weight = 0.7 * 1000 * 9.81 * (Math.PI / 4) * (Math.pow(p_diameter, 2)) * i;
        p_h_w = p_weight / z;
        p_AB = p_h_w / 2;
        p_AG = i / 2;
        p_BG = p_AG - p_AB;
        p_I = Math.PI / 64 * Math.pow(p_diameter, 4);
        p_v_w = Math.PI / 4 * Math.pow(p_diameter, 2) * p_h_w;
        p_GM = p_I / p_v_w - p_BG;
        H.push(parseFloat(i.toFixed(2)));
        M.push(parseFloat(p_GM.toFixed(4)));
        M_abs.push(parseFloat(Math.abs(p_GM).toFixed(4)));
    }
    console.log(`length of H array => ${H.length}, length of M array => ${M.length}`);
    console.log(M);
    console.log(M_abs);
}
function plot8() {
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = "white";
    ctx.style.marginTop = "5px";
    ctx.style.marginLeft = "10%";
    ctx.style.padding = "10px";
    ctx.style.borderRadius = "8px";
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: H,
            datasets: [
                {
                    label: 'GM',
                    data: M,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true
                    // yAxisID: 'A',
                    // borderWidth: 1,
                    // borderColor: "green",
                    // backgroundColor: "rgba(34, 139, 34, 0.5)",
                }
            ]
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Meta-centric height in meters',
                        font: { size: 14, weight: 'bold' }
                    },
                    ticks: {
                        format: {
                            maximumFractionDigits: 4,
                            minimumFractionDigits: 4
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Height in meters',
                        font: { size: 14, weight: 'bold' }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: `Meta-Center vs Height of Block`,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } }
            },
        }
    });
    //root.appendChild(ctx);
}
//# sourceMappingURL=activity3.js.map