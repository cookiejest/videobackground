define([], function() {
    'use strict';


    // *****************************************************************************
    // Settings section
    // *****************************************************************************
    var appearanceSection = {
        uses: "settings",
        items: {
            landingpage: {
                type: "items",
                label: "Background Info",
                ref: "BackgroundInfo",
                items: {
                    background_video_url: {
                        ref: "background.videourl",
                        label: "Media URL",
                        type: "string",
                        expression: "optional"
                    },
                    background_transparency: {
                        ref: "background.transparency",
                        label: "transparency",
                        type: "string",
                        expression: "optional"
                    },
                    background_color: {
                        ref: "background.color",
                        label: "Background Hex Color",
                        type: "string",
                        expression: "optional"
                    }
                }
            },
            debugmode: {
                type: "boolean",
                label: "Debug Mode",
                ref: "DebugMode",
                defaultValue: true
            }
        }
    };
    // *****************************************************************************
    // Main properties panel definition
    // Only what is defined here is returned from properties.js
    // *****************************************************************************
    return {

        type: "items",
        component: "accordion",
        items: {
            Settings: appearanceSection,
            addons: {
                uses: "addons",
                items: {
                    dataHandling: {
                        uses: "dataHandling"
                    }
                }
            },

        }
    }
});
