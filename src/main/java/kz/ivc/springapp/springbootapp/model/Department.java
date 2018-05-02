package kz.ivc.springapp.springbootapp.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "TEST_DEPARTMENTS")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TEST_DEPARTMENTS")
    @SequenceGenerator(sequenceName = "SEQ_TEST_DEPARTMENTS", allocationSize = 1, name = "SEQ_TEST_DEPARTMENTS")
    private Long departmentId;

    @Column(name = "DEPARTMENT_NAME")
    private String departmentName;


    public Long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }
}
