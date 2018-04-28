Ext.define('Sample.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: [
        'DepartmentView', 'EmployeeView'
    ],

    stores: [
        'DepartmentStore', 'EmployeeStore'
    ],

    models: [
        'Department', 'Employee'
    ],

    init: function() {
        this.control({
            'departmentlist': {
                // itemdblclick:this.editEmployee
            },
            'employeelist': {
                itemdblclick: this.editEmployee
            }
        })
    },

    editEmployee: function(grid, record) {
        Ext.create('Sample.view.EmployeeEdit');
        var formEdit = Ext.getCmp('formEditId').getForm();
        formEdit.loadRecord(record);
    }
});