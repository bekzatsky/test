package kz.ivc.springapp.springbootapp.model;

import javax.persistence.*;

@Entity
@Table(name = "TEST_DOWNLOAD")
public class Download {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TEST_DOWNLOAD")
    @SequenceGenerator(sequenceName = "SEQ_TEST_DOWNLOAD", allocationSize = 1, name = "SEQ_TEST_DOWNLOAD")
    private Long id;
    private String filename;
    private String path;
    private String status;

    public Download() {
    }

    public Download(Long id, String filename, String path, String status) {
        this.id = id;
        this.filename = filename;
        this.path = path;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
