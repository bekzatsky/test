Ext.define('Sample.view.EmployeeEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.employeeedit',
    title: 'Редактировать',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                id: 'formEditId',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'employeeId',
                        fieldLabel: 'ID',
                        disabled: true
                    },
                    {
                        xtype: 'textfield',
                        name : 'firstName',
                        fieldLabel: 'Имя'
                    },
                    {
                        xtype: 'textfield',
                        name : 'lastName',
                        fieldLabel: 'Фамилия'
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