package kz.ivc.springapp.springbootapp.jms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;

public class Sender {

    @Autowired
    private JmsTemplate jmsTemplate;

    public void send(String destination,  MessageCreator messageCreator) {
        jmsTemplate.send(destination, messageCreator);
    }
}
