package kz.ivc.springapp.springbootapp.controller.api;

import kz.ivc.springapp.springbootapp.jms.Sender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.jms.Message;

@RestController
@RequestMapping("/test")
public class JmsTestController {

    @Autowired
    private Sender sender;

    @GetMapping("/sendMessage")
    public void sender(){

        sender.send("kz.ivc.stat.sample.test", session -> {

            Message message = session.createMessage();
            message.setStringProperty("test","stat report works!!");
            return message;
        });
    }
}
