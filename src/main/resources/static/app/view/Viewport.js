Ext.define('Sample.view.Viewport', {
    extend : 'Ext.container.Viewport',
    layout : 'fit',
    initComponent : function() {

        var me = this;

        Ext.apply(me, {
            layout: 'border',
            items : [
                {
                    xtype : 'departmentlist',
                    layout: 'fit',
                    region: 'center'
                },
                {
                    xtype : 'employeelist',
                    layout: 'fit',
                    region: 'east',
                    width: 400,
                    collapsible: true
                }
            ]

        });
        me.callParent(arguments);
    }
});
