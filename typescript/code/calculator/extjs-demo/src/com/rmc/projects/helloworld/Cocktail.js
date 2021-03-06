/**
 * Copyright (C) 2005-2012 by Rivello Multimedia Consulting (RMC).
 * code [at] RivelloMultimediaConsulting [dot] com
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and#or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//Marks the right margin of code *******************************************************************
Ext.define('com.rmc.projects.helloworld.Cocktail', {
    // --------------------------------------
    // Super Class
    // --------------------------------------
    extend: "Ext.util.Observable",
    // --------------------------------------
    // Properties
    // --------------------------------------
    //	TEST PUBLIC PROPERTY
    samplePublicVariable: 'UnknownPublicVariable',
    //	TEST STATIC PROPERTY
    statics: {
        TEST_STATIC_PROPERTY: 'TestStaticProperty',
    },
    //	TEST AUTO-GENERATED PUBLIC GETTER/SETTER
    config: {
        countForFun: 20,
    },
    // --------------------------------------
    // Constructor
    // --------------------------------------
    constructor: function (config) {
        // SUPER
        this.initConfig(config);
        this.callParent(arguments);
        // EVENTS
        this.addEvents({
            customEventCalled: true
        });
        // VARIABLES
        // PROPERTIES
        samplePublicVariable = arguments[0]; //first item passed in, we'll consider the cocktailName
        //	TEST PRIVATE VARIABLES
        var samplePrivateVariable = "samplePrivateVariable";
        // METHODS
        //	TEST PRIVATE VARIABLES
        var samplePrivateMethod = function () {
            console.log("this.samplePrivateMethod() : " + samplePrivateVariable);
        };
        samplePrivateMethod(); //cannot be called from outside the class
        // RETURN
        return this;
    },
    // --------------------------------------
    // Methods
    // --------------------------------------
    customEventCall: function () {
        this.fireEvent('customEventCalled', " 'Argument String Message' ");
    }
});
//# sourceMappingURL=Cocktail.js.map