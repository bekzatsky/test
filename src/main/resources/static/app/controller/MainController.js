Ext.define('Sample.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: [
        'DepartmentView', 'EmployeeView', 'DownloadView'
    ],

    stores: [
        'DepartmentStore', 'EmployeeStore', 'DownloadStore'
    ],

    models: [
        'Department', 'Employee', 'Download'
    ],

    config: {
        rec: null
    },

    init: function() {
        this.control({
            'departmentlist': {
                itemclick:this.clickItemDepartment
            },
            'departmentlist button[action=add]': {
                click: this.addDepartmentWin
            },
            'departmentlist button[action=edit]': {
                click: this.editDepartment
            },
            'departmentadd button[action=save]': {
                click: this.addDepartment
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
                click: this.addEmployeeWin
            },
            'employeelist button[action=edit]': {
                click: this.editEmployee
            },
            'employeeadd button[action=save]': {
                click: this.addEmployee
            },
            'employeeedit button[action=save]': {
                click: this.saveEmployee
            },
            'employeelist button[action=delete]': {
                click: this.deleteEmployee
            },
            'employeelist button[action=download]': {
                click: this.download
            },
            'filename button[action=save]': {
                click: this.filenameSave
            },
            'download button[action=refresh]': {
                click: this.refreshDownloadStore
            }

        })
    },

    addEmployee: function() {
        var form = Ext.getCmp('formAddId').getForm();
        console.log(form.getValues());

        Ext.Ajax.request({

            url :'/api/employee/add',
            method: 'post',
            jsonData: Ext.encode(
                {"firstName" : form.getValues().firstName,
                    "lastName" : form.getValues().lastName,
                    "department" : {
                        "departmentId" : form.getValues().department
                    }
                }),

            success: function () {
                Ext.getStore('EmployeeStore').load();
                Ext.getCmp('employeeaddId').destroy();
            }
        });
    },

    addEmployeeWin: function () {
        Ext.create('Sample.view.EmployeeAdd').setTitle('Добавить сотрудника');
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
        console.log(form.getValues().department);

        Ext.Ajax.request({

            url :'/api/employee/update/' + id ,
            method: 'put',
            jsonData: Ext.encode(
                {"firstName" : form.getValues().firstName,
                    "lastName" : form.getValues().lastName,
                    "department" : {
                        "departmentId" : form.getValues().department
                    }
                }),

            success: function () {
                Ext.getStore('EmployeeStore').load();

                Ext.getCmp('employeeEditId').destroy();
            }
        });
    },

    deleteEmployee: function () {
        var id = this.rec.data.employeeId;
        Ext.Ajax.request({

            url :'/api/employee/delete/' + id ,
            method: 'delete',

            success: function () {
                Ext.getStore('EmployeeStore').load();
            }
        });
    },

    addDepartment: function() {
        var departmentName = Ext.getCmp('departmentName').getValue();

        Ext.Ajax.request({

            url :'/api/department/add',
            method: 'post',
            jsonData: Ext.encode(
                {"departmentName" : departmentName
                }),

            success: function () {
                Ext.getStore('DepartmentStore').load();
                Ext.getCmp('departmentaddId').destroy();
            }
        });
    },

    addDepartmentWin: function () {
        Ext.create('Sample.view.DepartmentAdd').setTitle('Добавить департамент');
    },

    editDepartment: function() {
        Ext.create('Sample.view.DepartmentEdit').setTitle('Редактировать департамент');
        var formEdit = Ext.getCmp('departmentFormEditId').getForm();
        formEdit.loadRecord(this.rec);
    },

    clickItemDepartment: function (grid, record) {

        Ext.getCmp('editDepartmentId').setDisabled(false);
        Ext.getCmp('deleteDepartmentId').setDisabled(false);
        Ext.getCmp('download').setDisabled(false);

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
        var employees = Ext.getStore('EmployeeStore').load().data.items.length;
        if (employees === 0) {
            Ext.Ajax.request({

                url :'/api/department/delete/' + id ,
                method: 'delete',

                success: function () {
                    Ext.getStore('DepartmentStore').load();
                }
            });
        } else {
            Ext.MessageBox.confirm(
                'Внимание', 'В департаменте числятся сотрудники. Вы уверены что хотите удалить департамент?', callbackFunction);
            function callbackFunction(btn) {
                if(btn == 'yes') {
                    Ext.Ajax.request({

                        url :'/api/department/delete/' + id ,
                        method: 'delete',

                        success: function () {
                            Ext.getStore('DepartmentStore').load();
                        }
                    });
                }
            }
        }

    },
    
    download: function () {

        Ext.create('Sample.view.Filename');
    },

    filenameSave: function () {
        var id = this.rec.data.departmentId;
        var value = Ext.getCmp('filenameedit').getForm().getValues().filename;
        console.log(id + value);


        Ext.Ajax.request({

            url :'/api/download/' + id + '?filename=' + value,
            method: 'get',

            success: function () {
                Ext.getCmp('filenamewin').destroy();
                Ext.getStore('DownloadStore').load();
            }
        });
    },

    refreshDownloadStore: function () {
        Ext.getStore('DownloadStore').load();
    }

});