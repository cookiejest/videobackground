define(["./properties", "qlik", "jquery", "./jquery.vide"],
    function(Props, qlik, $, vide) {
        'use strict';
        //$('<link rel="stylesheet" type="text/css" href="/extensions/storytime/css/timeline.css">').appendTo("head");
        //console.log(qlik);
        var app = qlik.currApp(this);
        //Function to enable console logging in debug mode.
        var logger = function() {
            var oldConsoleLog = null;
            var pub = {};
            pub.enableLogger = function enableLogger() {
                if (oldConsoleLog == null)
                    return;
                window['console']['log'] = oldConsoleLog;
            };

            pub.disableLogger = function disableLogger() {
                oldConsoleLog = console.log;
                window['console']['log'] = function() {};
            };
            return pub;
        }();



        return {
            // new object properties
            initialProperties: {
                version: 1.02,
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qDebugMode: true,
                    qInitialDataFetch: [{
                        qWidth: 10,
                        qHeight: 200
                    }]
                }
            },
            definition: Props,
            paint: function($element, layout) {

console.log($element);
/*
                    var qData = layout.qHyperCube.qDataPages[0].qMatrix;

                    console.log(qData);

                    //Loop through initial data array
                    var arrayLength = qData.length;

                    for (var i = 0; i < arrayLength; i++) {

                        console.log(qData[i][0].qText);



                    }
*/

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

console.log(layout);


var BackgroundTrans = layout.background.transparency;

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

//alert( hexToRgb("#0033ff").r ); // "51";

alert(navigator.userAgent);

var RGBAString = 'rgba(' + hexToRgb(layout.background.color).r + ',' + hexToRgb(layout.background.color).g  + ',' + hexToRgb(layout.background.color).b  + ',' + BackgroundTrans +')';

console.log(RGBAString);

					$(document).ready(function () {
						//$('#block2').vide('http://localhost:4848/extensions/videobackground/ocean.mp4');

						$('.qv-panel-content').vide({mp4: layout.background.videourl});

$('.qvt-sheet').css('background-color',RGBAString);


//$('.qvt-sheet').fadeTo( "slow" , 0.5, function() {});

//$('.qv-object-barchart').css('background-color','white');
					});


                    if (layout.DebugMode == undefined) {
                        var debugmode = false;
                    } else {
                        var debugmode = layout.DebugMode;
                    }
                    if (debugmode == true) {
                        logger.enableLogger();
                    } else {
                        logger.disableLogger();
                    }

                } //end return
                ////////////////////////////////////////////////////////
        } //close function
    }
); //close define
