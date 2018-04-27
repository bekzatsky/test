package kz.ivc.springapp.springbootapp.controller;

import kz.ivc.springapp.springbootapp.model.Department;
import kz.ivc.springapp.springbootapp.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/departments")
    List<Department> getDepartment() {
        return departmentService.getDepartments();
    }

    @GetMapping("/department/{id}")
    Optional<Department> getDepartmentById(@PathVariable Long id) {
        return departmentService.getDepartmentById(id);
    }

    @PostMapping("/department")
    public void saveDepartment(@RequestBody Department department) {
        departmentService.saveDepartment(department);
    }

    @PutMapping("/department")
    public void updateDepartment(@RequestBody Department department) {
        departmentService.saveDepartment(department);
    }

    @DeleteMapping("/department/{id}")
    public void deleteDepartment(@PathVariable Long id) {
        departmentService.deleteDepartment(id);
    }
}
