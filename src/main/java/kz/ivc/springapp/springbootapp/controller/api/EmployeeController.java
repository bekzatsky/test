package kz.ivc.springapp.springbootapp.controller.api;

import kz.ivc.springapp.springbootapp.jms.Sender;
import kz.ivc.springapp.springbootapp.model.Employee;
import kz.ivc.springapp.springbootapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.jms.Message;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private Sender sender;

    @GetMapping("/employees")
    List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/employee/{id}")
    Optional<Employee> getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/employeeByDepartment/{id}")
    public List<Employee> getEmployeeByDepartmentId(@PathVariable("id") Long id) {
        return employeeService.getListEmployeeByDepartment(id);
    }


    @PostMapping("/employee/add")
    public void saveEmployee(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
    }

    @PutMapping("/employee/update/{id}")
    public void updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employeeService.updateEmployee(id, employee);
    }

    @DeleteMapping("/employee/delete/{id}")
    public void deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
    }

    @GetMapping("/download/{id}")
    public void download(@PathVariable("id") Long id,
                         @RequestParam(value="filename") String filename) {
        Long exportId = employeeService.download(id, filename);
        this.messageSender(id, exportId, filename);
    }


    private void messageSender(Long id, Long exportId, String filename){

        sender.send("kz.ivc.stat.sample.test", session -> {

            Message message = session.createMessage();
            message.setStringProperty("filename",filename);
            message.setLongProperty("departmentId", id);
            message.setLongProperty("exportId", exportId);
            return message;
        });
    }
}
