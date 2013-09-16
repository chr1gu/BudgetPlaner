Ext.define('BudgetPlaner.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'BudgetPlaner.view.MainTitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'maintitlebar',
                docked: 'top'
            },
            {
                xtype: 'capture',
                title: 'Capture',
                iconCls: 'home'
            },
            {
                xtype: 'statistics',
                title: 'Statistics',
                iconCls: 'home'
            },
            {
                xtype: 'overview',
                title: 'Overview',
                iconCls: 'home'
            },
            {
                xtype: 'settings',
                title: 'Settings',
                iconCls: 'home'
            }
        ]
    },

    /* override internal method and fire custom event */
    doSetActiveItem: function(newActiveItem, oldActiveItem) {
        this.callParent(arguments);
        if (newActiveItem) {
            this.fireEvent('mainviewchange', this, newActiveItem);
        }
    }
});
