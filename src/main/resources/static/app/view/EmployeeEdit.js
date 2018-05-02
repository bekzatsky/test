Ext.define('Sample.view.EmployeeEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.employeeedit',
    id: 'employeeEditId',
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
                    },
                    {
                        xtype: 'combobox',
                        name: 'department',
                        id: 'depCombo',
                        fieldLabel: 'Департамент',
                        emptyText: 'Выберите департамент',
                        store: 'DepartmentStore',
                        displayField: 'departmentName',
                        valueField: 'departmentId',
                        grow: true
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