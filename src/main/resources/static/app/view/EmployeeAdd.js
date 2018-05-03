Ext.define('Sample.view.EmployeeAdd', {
    extend: 'Ext.window.Window',
    alias: 'widget.employeeadd',
    id: 'employeeaddId',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                id: 'formAddId',
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
                        fieldLabel: 'Имя',
                        id: 'firstName'
                    },
                    {
                        xtype: 'textfield',
                        name : 'lastName',
                        fieldLabel: 'Фамилия',
                        id: 'lastName'
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