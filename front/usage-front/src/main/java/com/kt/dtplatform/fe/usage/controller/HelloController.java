package com.kt.dtplatform.fe.usage.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
	
	@Autowired 
	private JdbcTemplate jdbc;

	@RequestMapping("/")
	public String home() {
		return "Hello Docker World";
	}

	/*
	 * Method Action 역할 
	 * GET index/retrieve 모든/특정 리소스를 조회 
	 * POST create 리소스를 생성 
	 * PUT update 리소스를 갱신 
	 * DELETE delete 리소스를 삭제
	 */
	@RequestMapping("/mk/{col1}/{col2}")
	public String mkSave(
			@PathVariable("col1") String col1
			, @PathVariable("col2") String col2) {
		int cnt = this.jdbc.update("INSERT INTO tb (col1,col2) VALUES (?,?)", col1, col2);
		return "save : " + cnt ;
	}
	
	@RequestMapping("/codes/1")
	@ResponseBody
	public List<Map<String, Object>> mkSearch() {
		return this.jdbc.queryForList("select * from tb");
	}
	
	@RequestMapping("/mk/delete")
	public String mkDelete() {
		
		return "Hello Docker World";
	}
}
