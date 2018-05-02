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

    var: recDep = null,

    init: function() {
        this.control({
            'departmentlist': {
                itemclick:this.clickItemDepartment
            },
            'departmentlist button[action=add]': {
                click: this.addDepartment
            },
            'departmentlist button[action=edit]': {
                click: this.editDepartment
            },
            'departmentedit button[action=save]': {
                click: this.saveDepartment
            },
            'departmentlist button[action=delete]': {
                click: this.deleteDepartment
            },
            'employeelist': {
                itemclick:this.clickItemEmployee
            },
            'employeelist button[action=add]': {
                click: this.addEmployee
            },
            'employeelist button[action=edit]': {
                click: this.editEmployee
            },
            'employeeedit button[action=save]': {
                click: this.saveEmployee
            },
            'employeelist button[action=delete]': {
                click: this.deleteEmployee
            }

        })
    },

    addEmployee: function() {
        Ext.create('Sample.view.EmployeeEdit').setTitle('Добавить сотрудника');
    },

    editEmployee: function() {
        Ext.create('Sample.view.EmployeeEdit').setTitle('Редактировать сотрудника');
        var formEdit = Ext.getCmp('formEditId').getForm();
        formEdit.loadRecord(this.rec);
        //устанавливаем значение департамента по умолчанию
        var department = this.rec.raw.department.departmentId;
        Ext.getCmp('depCombo').setValue(department);
    },

    clickItemEmployee: function (grid, record) {
        Ext.getCmp('editEmployeeId').setDisabled(false);
        Ext.getCmp('deleteEmployeeId').setDisabled(false);
        this.rec = record;
    },

    saveEmployee: function () {
        var id = this.rec.data.employeeId;

        var form = Ext.getCmp('formEditId').getForm();
        console.log(form.getValues().department)

        Ext.Ajax.request({

            url :'/api/employee/update/' + id ,
            method: 'put',
            jsonData: Ext.encode(
                {"firstName" : form.getValues().firstName,
                    "lastName" : form.getValues().lastName
                }),

            success: function () {
                Ext.getStore('EmployeeStore').load();

                Ext.getCmp('employeeEditId').destroy();
            }
        });
    },

    deleteEmployee: function () {
        console.log('employee deleted')
    },

    addDepartment: function() {
        Ext.create('Sample.view.DepartmentEdit').setTitle('Добавить департамент');
        var departmentName = Ext.getCmp('departmentName').getValue();
        console.log(departmentName);
    },

    editDepartment: function() {
        Ext.create('Sample.view.DepartmentEdit').setTitle('Редактировать департамент');
        var formEdit = Ext.getCmp('departmentFormEditId').getForm();
        formEdit.loadRecord(this.rec);
    },

    clickItemDepartment: function (grid, record) {

        Ext.getCmp('editDepartmentId').setDisabled(false);
        Ext.getCmp('deleteDepartmentId').setDisabled(false);

        this.rec = record;

        var departmentId = record.data.departmentId;
        Ext.getStore('EmployeeStore').getProxy().url='/api/employeeByDepartment/' + departmentId;
        Ext.getStore('EmployeeStore').load();
    },

    saveDepartment: function () {

        var id = this.rec.data.departmentId;

        var form = Ext.getCmp('departmentFormEditId').getForm();

        Ext.Ajax.request({

            url :'/api/department/update/' + id ,
            method: 'put',
            jsonData: Ext.encode({"departmentName" : form.getValues().departmentName}),

            success: function () {
                Ext.getStore('DepartmentStore').load();

                Ext.getCmp('departmenteditId').destroy();
            }
        });
    },

    deleteDepartment: function () {
        var id = this.rec.data.departmentId;
        Ext.Ajax.request({

            url :'/api/department/delete/' + id ,
            method: 'delete',

            success: function () {
                Ext.getStore('DepartmentStore').load();
            }
        });
    }
});