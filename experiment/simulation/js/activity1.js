let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Metacenter and Stability of Circular Log</h5>
        <p>Learning Objective: Metacenter and Stability of Circular Log</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A block of wood of specific gravity 0.7 floats in wate. Determine the meta-centric height of the block if its diamter is ${diameter}m and height is ${height}m</h5>
        <br>

        <div style='text-align: center;'><img style='width: 30%;' src='./images/dia.png'></div>

        <br><br>
        <h5>let Depth of immersion be h<sub>w</sub></h5>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            d is diameter and h is height of the wooden block
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ \\rho_w  = 1000 \\ kg/m^3 $$
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ g  = 9.81 \\ m/s^2 $$
            </span>
        </p>


        <p style='text-align: center;'> 
            Weight of wooden block (y)
            <span style='display: inline-block;' > $$ = specific \\ gravity \\times \\rho_w \\times g \\ \\frac{\\pi}{4} \\times d^2 \\times height  $$ </span>  
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal-inp' > <span id='cal-val-sp'></span> N
        </p>


        <p style='text-align: center; font-size: 18px;'>
        Weight of water displaced =
            <span style='display: inline-block;' >
                $$ \\rho_w \\times g \\times \\frac{\\pi}{4} \\times d^2 \\times h_w $$
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ = z \\times h_w $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal0-inp' > <span id='cal0-val-sp'></span> x h<sub>w</sub> &nbsp; &nbsp; &nbsp; N
            <br>
        </p>

        <h5>For Equilibrium, weight of the wooden log = weight of the water displaced (W) </h5>
        <br>
        <p style='text-align: center; font-size: 22px;'> <span style='display: inline-block;' > $$ z \\times h_w = y $$ </span> </p>
        <p style='text-align: center;'> 
            <span style='display: inline-block;' > $$ h_w = \\frac{y}{z} $$ </span>  
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal1-inp' > <span id='cal1-val-sp'></span> m
        </p>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' > $$ AB = \\frac{h_w}{2} $$ </span>  
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal2-inp' > <span id='cal2-val-sp'></span> m
        </p>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' > $$ AG = \\frac{h}{2} $$ </span>  
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal3-inp' > <span id='cal3-val-sp'></span> m
        </p>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' > $$ BG = AG - AB $$ </span>  
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal4-inp' > <span id='cal4-val-sp'></span> m
        </p>

        <p style='text-align: center;'> 
            <span style='display: inline-block;' > $$ I = \\frac{\\pi}{64}d^4 $$ </span>  
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal5-inp' > <span id='cal5-val-sp'></span> kg.m<sup>2</sup>
        </p>



        <h5> Volume of wood in water </h5>
        <br>
        <p style='text-align: center;'> 
            <span style='display: inline-block;' >
            $$ V_w = \\frac{\\pi}{4} \\times d^2 \\times h_w  $$
            </span> 

            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal6-inp' > <span id='cal6-val-sp'></span> m<sup>3</sup>
            <br>
        </p>


        <h5> Meta-Centric Height  </h5>
        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ GM = \\frac{I}{V_w} - BG $$
            </span>

            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal7-inp' > <span id='cal7-val-sp'></span> m
            <br>

        </p>


        


       
        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    weight = 0.7 * 1000 * 9.81 * (Math.PI / 4) * (Math.pow(diameter, 2)) * height;
    h_w = weight / z;
    AB = h_w / 2;
    AG = height / 2;
    BG = AG - AB;
    I = Math.PI / 64 * Math.pow(diameter, 4);
    v_w = Math.PI / 4 * Math.pow(diameter, 2) * h_w;
    GM = I / v_w - BG;
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`weigth = ${weight} \n z = ${z} \n h_w => ${h_w} \n AB => ${AB} \n AG  => ${AG} \n  BG => ${BG} \n I => ${I} \n v_w => ${v_w} \n GM => ${GM}`);
    let inp = document.getElementById('cal-inp');
    let sp = document.getElementById('cal-val-sp');
    let inp0 = document.getElementById('cal0-inp');
    let sp0 = document.getElementById('cal0-val-sp');
    let inp1 = document.getElementById('cal1-inp');
    let sp1 = document.getElementById('cal1-val-sp');
    let inp2 = document.getElementById('cal2-inp');
    let sp2 = document.getElementById('cal2-val-sp');
    let inp3 = document.getElementById('cal3-inp');
    let sp3 = document.getElementById('cal3-val-sp');
    let inp4 = document.getElementById('cal4-inp');
    let sp4 = document.getElementById('cal4-val-sp');
    let inp5 = document.getElementById('cal5-inp');
    let sp5 = document.getElementById('cal5-val-sp');
    let inp6 = document.getElementById('cal6-inp');
    let sp6 = document.getElementById('cal6-val-sp');
    let inp7 = document.getElementById('cal7-inp');
    let sp7 = document.getElementById('cal7-val-sp');
    if (!verify_values(parseFloat(inp.value), weight)) {
        alert('weight is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp0.value), z)) {
        alert('z is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), h_w)) {
        alert('depth of log in water is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), AB)) {
        alert('AB is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), AG)) {
        alert('AG is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), BG)) {
        alert('BG is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp5.value), I)) {
        alert('I is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp6.value), v_w)) {
        alert('volume of wooden block in water is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp7.value), GM)) {
        alert('GM is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${(weight).toFixed(4)}`;
    inp0.remove();
    sp0.innerText = `${(z).toFixed(4)}`;
    inp1.remove();
    sp1.innerText = `${(h_w).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(AB).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(AG).toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${(BG).toFixed(4)}`;
    inp5.remove();
    sp5.innerText = `${(I).toFixed(4)}`;
    inp6.remove();
    sp6.innerText = `${(v_w).toFixed(4)}`;
    inp7.remove();
    sp7.innerText = `${(GM).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
// function verify2() {
//     let inp2: HTMLInputElement = <HTMLInputElement> document.getElementById('cal2-inp');
//     let sp2: HTMLSpanElement = <HTMLSpanElement> document.getElementById('cal2-val-sp');
//     if(!verify_values(parseFloat(inp2.value), h)) {
//         alert('depth (h) is incorrect, calculate again.');
//         return;
//     }
//     inp2.remove();
//     sp2.innerText = `${h.toFixed(4)}`;
// }
activity1();
//# sourceMappingURL=activity1.js.map