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
                        name : 'departmentId',
                        fieldLabel: 'ID',
                        disabled: true,
                        id: 'departmentId'
                    },
                    {
                        xtype: 'textfield',
                        name : 'departmentName',
                        fieldLabel: 'Департамент',
                        grow: true,
                        id: 'departmentName'
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