Ext.define('Sample.view.EmployeeView' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.employeelist',

    title: 'Список сотрудников',
    store: 'EmployeeStore',

    initComponent: function() {

        this.columns = [
            {header: 'ID',  dataIndex: 'employeeId',  flex: 1},
            {header: 'Имя', dataIndex: 'firstName', flex: 5},
            {header: 'Фамилия', dataIndex: 'lastName', flex: 5}
        ];

        this.callParent(arguments);
    }
});