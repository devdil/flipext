/*
    @author: Diljit PR
    @date: 15/09/2016
    @description: flip.js contains the main logic to flip around the characters entered by user.
    It relies on an mapping between english characters and its mirrored versions which are stored as unicode points.
    For lookup, its basically a dictionary. happy O(1).
*/

define(["jquery"], function($) {

    var sourceTextArea = "#sourceTextArea";
    var destinationTextArea = "#outputText";
    var mirrorErrorMessage = "Mirroring does not work for these characters";
    var flippedCharactersInUnicode = {
        "a": "\u0250",
        "b": "\u0071",
        "c": "\u0254",
        "d": "\u0254",
        "d": "\u0070",
        "e": "\u01DD",
        "f": "\u025F",
        "g": "\u0253",
        "h": "\u0265",
        "i": "\u0131",
        "j": "\u027E",
        "k": "\u029E",
        "l": "\u006C",
        "m": "\u026F",
        "n": "\u0075",
        "o": "\u006F",
        "p": "\u0064",
        "q": "\u0062",
        "r": "\u0279",
        "s": "\u0073",
        "t": "\u0287",
        "u": "\u006E",
        "v": "\u028C",
        "w": "\u028D",
        "x": "\u0078",
        "y": "\u028E",
        "z": "\u007A"
    };



    function flipText() {
        var sourceText = $(sourceTextArea).val();
        var sourceTextLength;
        var invertedText = "";
        var character;
        var index;

        if (sourceText) {
            sourceTextLength = sourceText.length;
            for (index = 0; index < sourceTextLength; index++) {
                character = sourceText[index];
                invertedText += (flippedCharactersInUnicode[character]) ? (flippedCharactersInUnicode[character]) : character ;
            }
            displayInvertedText(invertedText);
        } else
            displayInvertedText("");
    }

    function displayInvertedText(invertedText) {
        $(destinationTextArea).val(invertedText);
    }

    function initializeEvents() {
        $(sourceTextArea).on("keyup", flipText);
        console.log("Initiaized properly");
    }

    // return a public api to initialize events
    return {
        initialize: initializeEvents
    };

});
