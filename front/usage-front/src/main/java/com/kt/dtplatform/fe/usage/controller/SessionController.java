package com.kt.dtplatform.fe.usage.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.apache.logging.log4j.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
public class SessionController {
//  @Value("${redis.host}")
//  private String ip = null;
	private static final Logger log = org.apache.logging.log4j.LogManager.getLogger(SessionController.class);

	private static String ip;

	public SessionController(@Value("${CF_INSTANCE_IP:127.0.0.1}") String ip) {
		this.ip = ip;
	}

	@RequestMapping("/hi")
	Map<String, Object> uid(HttpSession session) {
		UUID uid = Optional.ofNullable(UUID.class.cast(session.getAttribute("uid"))).orElse(UUID.randomUUID());
		session.setAttribute("uid", uid);

		Map<String, Object> m = new HashMap<>();
		m.put("instance_ip", this.ip);
		m.put("uuid", uid.toString());
		return m;
	}
	
	@RequestMapping("/cookieCheck")
	Map<String, Object> uid(HttpServletRequest req) {
		Cookie[] cookie = req.getCookies();
		Map<String, Object> m = new HashMap<>();
		m.put("cookie", cookie);
		return m;
	}

}
