Ext.define('Sample.view.Viewport', {
    extend : 'Ext.container.Viewport',
    layout : 'fit',
    initComponent : function() {

        var me = this;

        Ext.apply(me, {
            layout: 'accordion',
            items : [
                {
                    xtype : 'departmentlist',
                    layout: 'fit'
                },
                {
                    xtype : 'employeelist',
                    layout: 'fit'
                }
            ]

        });
        me.callParent(arguments);
    }
});
