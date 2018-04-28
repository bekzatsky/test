package kz.ivc.springapp.springbootapp.controller.api;

import kz.ivc.springapp.springbootapp.model.Employee;
import kz.ivc.springapp.springbootapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/employee/{id}")
    Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    @PostMapping("/employee")
    public void saveEmployee(@PathVariable Employee employee) {
        employeeService.saveEmployee(employee);
    }

    @PutMapping("/employee")
    public void updateEmployee(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
    }

    @DeleteMapping("/employee/{id}")
    public void deleteEmployee(@RequestBody Long id) {
        employeeService.deleteEmployee(id);
    }
}
