package kz.ivc.springapp.springbootapp.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "TEST_EMPLOYEES")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TEST_EMPLOYEES")
    @SequenceGenerator(sequenceName = "SEQ_TEST_EMPLOYEES", allocationSize = 1, name = "SEQ_TEST_EMPLOYEES")
    private Long employeeId;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @ManyToOne
    @JoinColumn(name = "DEPARTMENT_ID")
    private Department department;
}
