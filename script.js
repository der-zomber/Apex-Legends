$(".game").click(function() {
    $("h1").text("You're flying over World's edge, Where are you dropping?");
    $(".game").fadeOut(10);
    $(".apex").fadeOut(10);
    $(".fragment").fadeIn(1000);
    $(".skyhook").fadeIn(1000);
    $(".death").fadeIn(1000);
    $(".survive").fadeIn(1000);
});

$(".death").click(function() {
    $("h1").text("You've landed with another squad, choose your weapon:");
    $(".survive").fadeOut(10);
    $(".skyhook").fadeOut(10);
    $(".death").fadeOut(10);
    $(".fragment").fadeOut(10);
    $(".301").fadeIn(1000);
    $(".r-301").fadeIn(2000);
    $(".wingman").fadeIn(1000);
    $(".wingmanp").fadeIn(2000);
    $(".textf").fadeIn(1000);
});

$(".r-301").click(function() {
    $("h1").text("Good choice legend, you somehow managed to kill an entire squad.");
    $(".wipe").fadeIn(1000);
    $(".301").fadeOut(10);
    $(".wingman").fadeOut(10);
    $(".wingmanp").fadeOut(10);
    $(".r-301").fadeOut(10);
    $(".continue-f").fadeIn(2000);
});

$(".continue-f").click(function() {
    $("h1").text("You have good loot, and theres more death boxes to loot, what are you gonna do next legend?");
    $(".wipe").fadeOut(10);
    $(".box").fadeIn(1000);
    $(".continue-f").fadeOut(10);
    $(".rotate").fadeIn(1000);
    $(".boxes").fadeIn(1000);
    $(".wipe").fadeOut(10);
});

$(".rotate").click(function() {
    $("h1").text("You've rotated and you are in a safe spot now. You hear the last two squads fighting, what will you do legend?");
    $(".pathfinder").fadeIn(1000);
    $(".continue-f").fadeOut(10);
    $(".boxes").fadeOut(10);
    $(".box").fadeOut(10);
    $(".rotate").fadeOut(10);
    $(".killed").fadeIn(1000);
    $(".win").fadeIn(1000);
});

$(".killed").click(function() {
    $("h1").text("After the fighting was done, the standing squad found you and killed you.");
    $(".pathfinder").fadeOut(10);
    $(".killed").fadeOut(10);
    $(".win").fadeOut(10);
    $(".over").fadeIn(1000);
    $(".restart").fadeIn(1000);
});

$(".win").click(function() {
    $("h1").text("You came right on time and finished killing both squads. You are our Apex Champion.");
    $(".champion").fadeIn(1000);
    $(".pathfinder").fadeOut(10);
    $(".killed").fadeOut(10);
    $(".win").fadeOut(10);
    $(".restart1").fadeIn(1000);
});

$(".boxes").click(function() {
    $("h1").text("You took too long, another squad heard your shoot and killed you while you were looting.");
    $(".die").fadeIn(1000);
    $(".boxes").fadeOut(10);
    $(".rotate").fadeOut(10);
    $(".box").fadeOut(10);
    $(".restart").fadeIn(1000);
});

$(".wingmanp").click(function() {
    $("h1").text("Not your greatest performance legend, you missed all your shots and died.");
    $(".die").fadeIn(1000);
    $(".301").fadeOut(10);
    $(".r-301").fadeOut(10);
    $(".wingman").fadeOut(10);
    $(".wingmanp").fadeOut(10);
    $(".restart").fadeIn(1000);
});

$(".survive").click(function() {
    $("h1").text("You've landed safe with no squads near and looted up");
    $(".loot").fadeIn(1000);
    $(".skyhook").fadeOut(10);
    $(".fragment").fadeOut(10);
    $(".survive").fadeOut(10);
    $(".death").fadeOut(10);
    $(".continue-s").fadeIn(1000);
});

$(".continue-s").click(function() {
    $(".wraith").fadeIn(1000);
    $("h1").text("You hear shooting in the distance, what are you gonna do legend?");
    $(".loot").fadeOut(10);
    $(".continue-s").fadeOut(10);
    $(".fight").fadeIn(1000);
    $(".looting").fadeIn(1000);
});

$(".looting").click(function() {
    $("h1").text("While you were looting a squad sneaked up on you and killed you.");
    $(".die").fadeIn(1000);
    $(".wraith").fadeOut(10);
    $(".fight").fadeOut(10);
    $(".looting").fadeOut(10);
    $(".restart").fadeIn(1000);
});

$(".fight").click(function() {
    $("h1").text("You went to fight by your self, got killed, and disconnected now your teammates are alone.");
    $(".dc").fadeIn(1000);
    $(".wraith").fadeOut(10);
    $(".fight").fadeOut(10);
    $(".looting").fadeOut(10);
    $(".restart").fadeIn(1000);
});

$(".restart").click(function() {
    $(".wingman").hide();
    $(".wingmanp").hide();
    $(".wing-man").hide();
    $(".die").hide();
    $(".restart").hide();
    $(".r-301").hide();
    $(".301").hide();
    $(".ar").hide();
    $(".wipe").hide();
    $(".fragment").hide();
    $(".skyhook").hide();
    $(".survive").hide();
    $(".death").hide();
    $(".loot").hide();
    $(".continue-s").hide();
    $(".wraith").hide();
    $(".fight").hide();
    $(".looting").hide();
    $(".continue-f").hide();
    $(".rotate").hide();
    $(".boxes").hide();
    $(".box").hide();
    $(".pathfinder").hide();
    $(".killed").hide();
    $(".win").hide();
    $(".over").hide();
    $(".dc").hide();
    $("h1").text("Welcome to the Apex Games");
    $(".apex").fadeIn();
    $(".game").fadeIn();
});

$(".restart1").click(function() {
    $(".champion").hide();
    $(".wingman").hide();
    $(".wingmanp").hide();
    $(".wing-man").hide();
    $(".die").hide();
    $(".restart").hide();
    $(".r-301").hide();
    $(".301").hide();
    $(".ar").hide();
    $(".wipe").hide();
    $(".fragment").hide();
    $(".skyhook").hide();
    $(".survive").hide();
    $(".death").hide();
    $(".loot").hide();
    $(".continue-s").hide();
    $(".wraith").hide();
    $(".fight").hide();
    $(".looting").hide();
    $(".continue-f").hide();
    $(".rotate").hide();
    $(".boxes").hide();
    $(".box").hide();
    $(".pathfinder").hide();
    $(".killed").hide();
    $(".win").hide();
    $(".over").hide();
    $("h1").text("Welcome to the Apex Games");
    $(".apex").fadeIn();
    $(".game").fadeIn();
    $(".restart1").hide();
});

$(".wingman").hide();
$(".wingmanp").hide();
$(".wing-man").hide();
$(".die").hide();
$(".restart").hide();
$(".r-301").hide();
$(".301").hide();
$(".ar").hide();
$(".wipe").hide();
$(".fragment").hide();
$(".skyhook").hide();
$(".survive").hide();
$(".death").hide();
$(".loot").hide();
$(".continue-s").hide();
$(".wraith").hide();
$(".fight").hide();
$(".looting").hide();
$(".continue-f").hide();
$(".rotate").hide();
$(".boxes").hide();
$(".box").hide();
$(".pathfinder").hide();
$(".killed").hide();
$(".win").hide();
$(".over").hide();
$(".champion").hide();
$(".restart1").hide();
$(".dc").hide();