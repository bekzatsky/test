package kz.ivc.springapp.springbootapp.jms;

import com.thoughtworks.xstream.XStream;
import kz.ivc.springapp.springbootapp.dao.DownloadDao;
import kz.ivc.springapp.springbootapp.model.Download;
import kz.ivc.springapp.springbootapp.model.Employee;
import kz.ivc.springapp.springbootapp.service.EmployeeService;
import org.apache.activemq.Message;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;

import javax.jms.JMSException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

public class Receiver {

    @Autowired
    Logger logger;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private DownloadDao downloadDao;

    @JmsListener(destination = "kz.ivc.stat.sample.test")
    private void testReceiver(Message message){

        try {

            String filename =  message.getStringProperty("filename");
            Long exportId = message.getLongProperty("exportId");
            Long departmentId = message.getLongProperty("departmentId");


            String sys = System.getProperty("user.home");
            String path = sys + "/Рабочий стол/" + filename + ".txt";

            XStream xStream = new XStream();
            List<Employee> employeesByDepartment = employeeService.getListEmployeeByDepartment(departmentId);
            String xml = xStream.toXML(employeesByDepartment);

            try {
                FileOutputStream fos = new FileOutputStream(path);
                // перевод строки в байты
                byte[] buffer = xml.getBytes();
                fos.write(buffer, 0, buffer.length);


                Optional<Download> downloadOptional = downloadDao.findById(exportId);

                Download download = downloadOptional.get();

                download.setStatus("Готово");
                downloadDao.save(download);


            }
            catch(IOException ex){

                System.out.println(ex.getMessage());
            }
            System.out.println("The file has been written " + path);




        } catch (JMSException e) {
            logger.error("class: Receiver; method: testReceiver; exception:JMSException  " + e);
        }
    }
}
