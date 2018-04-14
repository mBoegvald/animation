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


    $("#keeper_container").addClass("keeper_position");
    $("#football_container").addClass("football_position");

    $("#scene").on("click", startHistorie);
}



function startHistorie() {
    console.log("startHistorie");

    $("#scene").off("click", startHistorie);
    //start lyd: Tilskuerstøj

    $("#cloud").addClass("cloud_animation");


    $("#shooter_sprite").addClass("shooter_walkcycle");


    $("#shooter_container").addClass("shooter_walk_right");

    $("#shooter_container").on("animationend", activateKeeperButton);


}

function activateKeeperButton() {
    $("#shooter_container").off("animationend");
    $("#keeper_container").on("click", dommerFloejt);

    $("#shooter_sprite").removeClass("shooter_walkcycle");
}


function dommerFloejt() {


    console.log("dommerFloejt");

    $("#keeper_container").off("click", dommerFloejt);




    setTimeout(shotcycleStart, 1000)


    //  $("#shooter_container").on("animationend", shotcycleStart);



    //start lyd: dommerfløjt

}




function shotcycleStart() {
    console.log("shotcycleStart");

    $("#shooter_container").removeClass("shooter_walk_right");

    $("#shooter_sprite").addClass("shooter_shotcycle");

    $("#shooter_container").addClass("shooter_run_right");



    $("#shooter_container").on("animationend", redning);

}




function redning() {
    console.log("redning");
    $("#shooter_container").off("animationend");
    //1 sekund efter.
    $("#football_container").addClass("football_middle");
    $("#keeper_sprite").addClass("keeper_catchcycle")

    $("#keeper_container").on("animationend", buRaab);
}




function buRaab() {
    console.log("buRaab");

    $("#keeper_container").off("animationend");

    //stop lyd: tilskuerstøj

    //start lyd: Bu-råb fra tilskuere

    setTimeout(shooterTrist, 1000);

}




function shooterTrist() {
    console.log("shooterTrist");
    $("#shooter_sprite").removeClass("shooter_shotcycle");


    $("#shooter_sprite").addClass("shooter_sad");
}
