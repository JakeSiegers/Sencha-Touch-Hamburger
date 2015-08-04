/*
 * File: app/view/Viewport.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SenchaHamburger.view.Viewport', {
    extend: 'Ext.Container',

    requires: [
        'SenchaHamburger.view.MainView',
        'SenchaHamburger.view.HamburgerMenu',
        'Ext.Container'
    ],

    config: {
        itemId: 'Viewport',
        layout: 'fit',
        items: [
            {
                xtype: 'container',
                cls: 'hamburger-mask',
                hidden: true,
                itemId: 'hamburgerMask',
                showAnimation: 'fade'
            },
            {
                xtype: 'mainview'
            },
            {
                xtype: 'hamburgermenu'
            }
        ],
        listeners: [
            {
                fn: 'onViewportInitialize',
                event: 'initialize'
            }
        ]
    },

    onViewportInitialize: function(component, eOpts) {
        //Create the listener for the hamburger mask (As it's not a button that can handle itself!)
        var MainView = Ext.ComponentQuery.query('#MainView')[0];
        Ext.ComponentQuery.query("#hamburgerMask")[0].element.addListener({
            touchstart: function() { MainView.closeHamburgerMenu(); },
            tap: function() { MainView.closeHamburgerMenu(); }
        });
    }

});