package com.rameshsoft.spring_boot_email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import com.rameshsoft.spring_boot_email.service.MailService;

import jakarta.mail.MessagingException;

@SpringBootApplication
public class SpringBootEmailApplication {

	@Autowired
	private MailService mailService;
	
	public static void main(String[] args) {
		SpringApplication.run(SpringBootEmailApplication.class, args);
	}
	
	@EventListener(ApplicationReadyEvent.class)
	public void triggerMail() throws MessagingException {
		mailService.sendMail("ramesh.eidiko@gmail.com", "Spring Email Test", "Send email using Spring boot | Gmail SMTP");
		mailService.sendMailWithAttachment("ramesh.eidiko@gmail.com", "Spring Email Test", "Send email using Spring boot with attachment | Gmail SMTP", "C:\\Users\\Sreenivas Bandaru\\Pictures\\Screenshots\\MicroservicesNotes.txt");
	}

}
