package com.rameshsoft.spring_boot_email.service;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;


@Service
public class MailService {
	
		@Autowired 
		private JavaMailSender mailSender;
		
		public void sendMail(String to, String subject, String body) {
			SimpleMailMessage message = new SimpleMailMessage();
			message.setTo(to);
			message.setSubject(subject);
			message.setText(body);
			mailSender.send(message);
			System.out.println("Mail sent");
		}
		
		public void sendMailWithAttachment(String to, String subject, String body, String attachment) throws MessagingException {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, true);			
			helper.setTo(to);
			helper.setSubject(subject);
			helper.setText(body);
			
			FileSystemResource resource = new FileSystemResource(new File(attachment)); 
			helper.addAttachment(resource.getFilename(), resource);
			mailSender.send(message);
			System.out.println("Mail sent With Attachment");
		}

}
