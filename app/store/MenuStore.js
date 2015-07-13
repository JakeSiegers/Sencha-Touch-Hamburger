/*
 * File: app/store/MenuStore.js
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

Ext.define('SenchaHamburger.store.MenuStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        data: [
            {
                text: 'Menu 1',
                icon: 'bolt'
            },
            {
                text: 'Menu 2',
                icon: 'tachometer'
            },
            {
                text: 'Menu 3',
                icon: 'compass'
            },
            {
                text: 'Menu 4',
                icon: 'compass'
            },
            {
                text: 'Menu 5',
                icon: 'compass'
            },
            {
                text: 'Menu 6',
                icon: 'compass'
            },
            {
                text: 'Menu 7',
                icon: 'compass'
            },
            {
                text: 'Menu 8',
                icon: 'compass'
            }
        ],
        storeId: 'MenuStore',
        fields: [
            {
                name: 'text'
            },
            {
                name: 'icon'
            }
        ]
    }
});