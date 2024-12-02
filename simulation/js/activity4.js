function activity4() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find the height at neutral point</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act4();' id='temp-btn-4' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    plot8();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act4() {
    let temp_btn = document.getElementById('temp-btn-4');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate position of center of pressure force", "tb4-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb4-box'>


    <p> <span style='display: inline-block;' >
        What is the height of cylinder that represents neutral condition?
    </p>

    <p style='text-align: center;'> 
        <span style='display: inline-block;' > $$ h_{neutral}  $$ </span>  
        = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal40-inp' > <span id='cal40-val-sp'></span> m
    </p>


    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a4();'  id='temp-btn-40' >Verify</button></div>
   
    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations3();
    plot8();
    setTimeout(() => { show_step('tb4-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations3() {
    let minimum = Math.min(...M_abs);
    neutral_height = H[M_abs.indexOf(minimum)];
    console.log(`neutral height = ${neutral_height}`);
}
function verify_a4() {
    let btn = document.getElementById('temp-btn-40');
    console.log(`neutral height = ${neutral_height}`);
    let inp = document.getElementById('cal40-inp');
    let sp = document.getElementById('cal40-val-sp');
    if (!verify_values(parseFloat(inp.value), neutral_height)) {
        alert('neutral height is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${neutral_height}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
}
//# sourceMappingURL=activity4.js.map