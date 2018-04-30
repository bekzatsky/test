Ext.define('Sample.view.DepartmentEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.departmentedit',
    id: 'departmenteditId',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                id: 'departmentFormEditId',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'departmentName',
                        fieldLabel: 'Департамент'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Сохранить',
                action: 'save'
            },
            {
                text: 'Отменить',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});