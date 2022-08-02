async function displayErrorMessage(message, timed = true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleMintPopup() {
    $("#mint-pop-up").toggle().css('display', 'none');
}

// function revealMint() {
//     $("#about").addClass("fading-out");
//     $('#about').on("animationend", function () {
//         $("#about").addClass("hidden");
//         $("#mint").removeClass("hidden");
//         $("#mint").addClass("fading-in");
//     });
// }