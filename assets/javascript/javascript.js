$(document).ready(function () {

    var health = [75, 100, 120, 140];
    var totalAttack = 0;
    var attack = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    var counter = [10, 15, 20, 25];

    var grievous = {
        healthPoints: health[Math.floor(Math.random() * health.length)],
        attackPoints: attack,
        counterAttackPoints: counter[Math.floor(Math.random() * counter.length)]


    };

    var palp = {
        healthPoints: health[Math.floor(Math.random() * health.length)],
        attackPoints: attack,
        counterAttackPoints: counter[Math.floor(Math.random() * counter.length)]


    };

    var vader = {
        healthPoints: health[Math.floor(Math.random() * health.length)],
        attackPoints: attack,
        counterAttackPoints: counter[Math.floor(Math.random() * counter.length)]


    };

    var maul = {
        healthPoints: health[Math.floor(Math.random() * health.length)],
        attackPoints: attack,
        counterAttackPoints: counter[Math.floor(Math.random() * counter.length)]


    };

    var characters = [grievous, palp, vader, maul];



    document.getElementById("grievous-card").addEventListener("mouseover", mouseGrievous);
    document.getElementById("grievous-card").addEventListener("mouseout", mouseOutGrievous);

    function mouseGrievous() {
        document.getElementById("grievous-card").style.boxShadow = "15px 25px 35px darkred";
    }

    function mouseOutGrievous() {
        document.getElementById("grievous-card").style.boxShadow = "15px 25px 35px white";
    }

    document.getElementById("palp-card").addEventListener("mouseover", mousePalp);
    document.getElementById("palp-card").addEventListener("mouseout", mouseOutPalp);

    function mousePalp() {
        document.getElementById("palp-card").style.boxShadow = "15px 25px 35px darkred";
    }

    function mouseOutPalp() {
        document.getElementById("palp-card").style.boxShadow = "15px 25px 35px white";
    }

    document.getElementById("vader-card").addEventListener("mouseover", mouseVader);
    document.getElementById("vader-card").addEventListener("mouseout", mouseOutVader);

    function mouseVader() {
        document.getElementById("vader-card").style.boxShadow = "15px 25px 35px darkred";
    }

    function mouseOutVader() {
        document.getElementById("vader-card").style.boxShadow = "15px 25px 35px white";
    }

    document.getElementById("maul-card").addEventListener("mouseover", mouseMaul);
    document.getElementById("maul-card").addEventListener("mouseout", mouseOutMaul);

    function mouseMaul() {
        document.getElementById("maul-card").style.boxShadow = "15px 25px 35px darkred";
    }

    function mouseOutMaul() {
        document.getElementById("maul-card").style.boxShadow = "15px 25px 35px white";
    }



    // document.getElementById("grievous-card").addEventListener("Click", grievousFight);

    // function grievousFight() {
    //     document.getElementById("fight").innerHTML =
    //         <div class="container">
    //             <div class="row">
    //                 <div class="col-1"></div>
    //                 <div class="col-4"></div>
    //                 <div class="col-2"></div>
    //                 <div class="col-4"></div>
    //                 <div class="col-1"></div>
    //             </div>





    //         </div>




    // }





})