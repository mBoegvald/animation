/*
Elementer:


#background
#cloud
#middleground
#keeper_container
#keeper_sprite
#football_container
#shooter_container
#shooter_sprite
#foreground

Animationer:

.cloud_animation
.shooter_walkcycle
.shooter_shotcycle
.shooter_sad
.shooter_shake
.shooter_walk_right
.shooter_run_right
.keeper_catchcycle
.keeper_position
.football_middle


*/

/*$("#button_startHistorie").on("click", startHistorie);*/

//$("#keeper_container").on("click", dommerFloejt);

/*$("#button_shotcycleStart").on("click", shotcycleStart);*/

/*$("#button_redning").on("click", redning);*/

/*$("#button_buRaab").on("click", buRaab);*/

/*$("#button_shooterTrist").on("click", shooterTrist);*/




$(window).on("load", sidenVises);


function sidenVises() {
    $("#start_button").hover(function () {
        $("#start_button").css({
            "transform": "scale(1.2)",
            "transition": "all 0.1s ease-out"
        });
    }, function () {
        $("#start_button").css("transform", "scale(1)");
    });

    $("#keeper_container").addClass("keeper_position");
    $("#football_container").addClass("display_none");

    $("#start_button").on("click", startHistorie);
}



function startHistorie() {
    console.log("startHistorie");
    $("#football_container").removeClass("display_none");
    $("#football_container").addClass("football_position");


    $("#start_button").addClass("display_none");
    $("#title").addClass("display_none");

    $("#start_button").off("click", startHistorie);

    $("#tilskuer_stoej")[0].play();

    $("#cloud").addClass("cloud_animation");


    $("#shooter_sprite").addClass("shooter_walkcycle");


    $("#shooter_container").addClass("shooter_walk_right");

    $("#shooter_container").on("animationend", targetKnap);


}

function targetKnap() {

    $("#shooter_container").off("animationend");




    $("#target_container1").on("click", dommerFloejtMid);
    $("#target_container2").on("click", dommerFloejtSide);
    $("#target_container3").on("click", dommerFloejtSide);

    $("#shooter_sprite").removeClass("shooter_walkcycle");

    $("#target_container1").addClass("target_middle");

    $("#target_container2").addClass("target_left");

    $("#target_container3").addClass("target_right");





    $("#target_container1").hover(function () {
        $("#target_container1").css({
            "transform": "scale(1.2)",
            "transition": "all 0.5s ease-out"
        });
    }, function () {
        $("#target_container1").css("transform", "scale(1)");
    });


    $("#target_container2, #target_container3").hover(function () {
        $("#target_container2, #target_container3").css({
            "transform": "scale(1.2)",
            "transition": "all 0.5s ease-out"
        });
    }, function () {
        $("#target_container2, #target_container3").css("transform", "scale(1)");
    });



}




function dommerFloejtMid() {


    console.log("dommerFloejtMid");

    $("#dommerfloejt")[0].play();

    $("#target_container1").removeClass("target_middle");

    $("#target_container2").removeClass("target_left");

    $("#target_container3").removeClass("target_right");

    $("#target_container1").off("click", dommerFloejtMid);

    $("#dommerfloejt").on("ended", shotcycleStartMid);


    //  $("#shooter_container").on("animationend", shotcycleStart);




}

function dommerFloejtSide() {


    console.log("dommerFloejtSide");

    $("#dommerfloejt")[0].play();

    $("#target_container1").removeClass("target_middle");

    $("#target_container2").removeClass("target_left");

    $("#target_container3").removeClass("target_right");

    $("#target_container1").off("click", dommerFloejtMid);

    $("#dommerfloejt").on("ended", shotcycleStartSide);


    //  $("#shooter_container").on("animationend", shotcycleStart);




}




function shotcycleStartMid() {
    console.log("shotcycleStartMid");

    $("#shooter_container").removeClass("shooter_walk_right");

    $("#shooter_sprite").addClass("shooter_shotcycle");

    $("#shooter_container").addClass("shooter_run_right");



    $("#shooter_container").on("animationend", redning);

}




function redning() {
    console.log("redning");
    $("#shooter_container").off("animationend");

    $("#football_container").removeClass("football_position");
    $("#football_container").addClass("football_middle");
    $("#keeper_sprite").addClass("keeper_catchcycle")

    $("#keeper_container").on("animationend", buRaab);
}




function buRaab() {
    console.log("buRaab");


    $("#bu_raab")[0].play();
    $("#keeper_container").off("animationend");




    setTimeout(shooterTrist, 1000);

}




function shooterTrist() {
    console.log("shooterTrist");
    $("#shooter_sprite").removeClass("shooter_shotcycle");


    $("#shooter_sprite").addClass("shooter_sad");
}


// Venstre ben slut.

// Højre ben.

function shotcycleStartSide() {
    console.log("shotcycleStartSide");

    $("#shooter_container").removeClass("shooter_walk_right");

    $("#shooter_sprite").addClass("shooter_shotcycle");

    $("#shooter_container").addClass("shooter_run_right");



    $("#shooter_container").on("animationend", randomValg);

}

function randomValg() {
    console.log("randomValg");


    if (Math.random >= 0.5) {
        aimGreen();
    } else {
        goalRight();
    }

}

function goalRight() {
    console.log("goalRight");

    $("#shooter_container").off("animationend");
    $("#football_container").removeClass("football_position");
    $("#football_container").addClass("football_right");

    setTimeout(jubel, 3000);

}

function jubel() {
    /*Spil lyd: celebration*/

    $("#tilskuer_jubel")[0].play();
    setTimeout(shooterHappy, 1000);

}

function shooterHappy() {
    console.log("shooterHappy");
    $("#shooter_sprite").removeClass("shooter_shotcycle");
    $("#shooter_container").removeClass("shooter_run_right");
    $("#shooter_sprite").addClass("shooter_happy");
    $("#shooter_container").addClass("shooter_jump");
}

function aimGreen() {
    console.log("aimGreen");
    // Start sigtekorn
    removeAim();

}

function removeAim() {
    console.log("removeAim");
    // stop animation sigtekorn

    hitOrMiss();
}

function hitOrMiss() {
    console.log("hitOrMiss");
    // if or else
}

function goalLeft() {
    console.log("goalLeft");


    $("#shooter_container").off("animationend");
    $("#football_container").removeClass("football_position");
    $("#football_container").addClass("football_left");

    setTimeout(jubel, 3000);
}
