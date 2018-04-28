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
                itemclick:this.showEmployees
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
    },

    showEmployees: function (grid, record) {
        var departmentId = record.data.departmentId;
        console.log(departmentId);


    }
});