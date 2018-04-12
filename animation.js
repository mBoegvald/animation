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

$(window).on("load", sidenVises);

function sidenVises() {
    $("#keeper_container").addClass("keeper_position");
    $("#football_container").addClass("football_position");
}

$("#button_startHistorie").on("click", startHistorie);

function startHistorie() {
    console.log("startHistorie");

    //start lyd: Tilskuerstøj

    $("#cloud").addClass("cloud_animation");


    $("#shooter_sprite").addClass("shooter_walkcycle");


    $("#shooter_container").addClass("shooter_walk_right");


}

$("#button_dommerFloejt").on("click", dommerFloejt);

function dommerFloejt() {
    console.log("dommerFloejt");

    $("#shooter_sprite").removeClass("shooter_walkcycle");


    //start lyd: dommerfløjt

}


$("#button_shotcycleStart").on("click", shotcycleStart);

function shotcycleStart() {
    console.log("shotcycleStart");

    $("#shooter_container").removeClass("shooter_walk_right");

    $("#shooter_sprite").addClass("shooter_shotcycle");

    $("#shooter_container").addClass("shooter_run_right");


}

$("#button_redning").on("click", redning);


function redning() {
    console.log("redning");

    //1 sekund efter.
    $("#football_container").addClass("football_middle");
    $("#keeper_sprite").addClass("keeper_catchcycle")

}


$("#button_buRaab").on("click", buRaab);

function buRaab() {
    console.log("buRaab");

    //stop lyd: tilskuerstøj

    //start lyd: Bu-råb fra tilskuere

}


$("#button_shooterTrist").on("click", shooterTrist);

function shooterTrist() {
    console.log("shooterTrist");
    $("#shooter_sprite").removeClass("shooter_shotcycle");


    $("#shooter_sprite").addClass("shooter_sad");
}
