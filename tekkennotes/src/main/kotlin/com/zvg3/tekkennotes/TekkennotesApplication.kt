package com.zvg3.tekkennotes

import org.springframework.boot.ApplicationRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import com.zvg3.tekkennotes.Services.CharacterService

@SpringBootApplication
class TekkennotesApplication {
	@Bean
	fun run() = ApplicationRunner {
	}

}

fun main(args: Array<String>) {
	runApplication<TekkennotesApplication>(*args)
}
