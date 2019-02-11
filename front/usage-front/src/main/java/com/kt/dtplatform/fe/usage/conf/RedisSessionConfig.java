package com.kt.dtplatform.fe.usage.conf;

import javax.annotation.Resource;

import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.ListOperations;
import org.springframework.data.redis.core.SetOperations;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@EnableRedisHttpSession
public class RedisSessionConfig {
	/*
	 * @Resource(name = "redisTemplate") private ValueOperations<String, String>
	 * valueOperations;
	 * 
	 * @Resource(name = "redisTemplate") private ListOperations<String, String>
	 * listOperations;
	 * 
	 * @Resource(name = "redisTemplate") private HashOperations<String, String,
	 * String> hashOperations;
	 * 
	 * @Resource(name = "redisTemplate") private SetOperations<String, String>
	 * setOperations;
	 * 
	 * @Resource(name="redisTemplate") private ZSetOperations<String, String>
	 * zSetOperations;
	 */
}
