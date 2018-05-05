package kz.ivc.springapp.springbootapp.model;

import javax.persistence.*;

@Entity
@Table(name = "TEST_DOWNLOAD")
public class Download {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_TEST_DOWNLOAD")
    @SequenceGenerator(sequenceName = "SEQ_TEST_DOWNLOAD", allocationSize = 1, name = "SEQ_TEST_DOWNLOAD")
    private int id;
    private String filename;
    private String path;

    public Download() {
    }

    public Download(int id, String filename, String path) {
        this.id = id;
        this.filename = filename;
        this.path = path;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
}
