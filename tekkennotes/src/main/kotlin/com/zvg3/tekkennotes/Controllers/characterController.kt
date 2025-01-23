package com.zvg3.tekkennotes.Controllers

import com.zvg3.tekkennotes.DataModels.PlayerCharacter
import com.zvg3.tekkennotes.Repositories.PlayerCharacterRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.web.bind.annotation.*
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import com.zvg3.tekkennotes.Services.CharacterService;

@RestController
class characterController @Autowired constructor(
    val characterService: CharacterService) {
        @GetMapping("/characters")
        @CrossOrigin(origins = ["http://localhost:4200"])
        fun getPlayerCharacter(): List<PlayerCharacter> {
            println("getting player Characters");
            var pcReturnValue : List<PlayerCharacter> = listOf();
            try{
                pcReturnValue = characterService.getAllPlayerCharacters();
            }catch(e:Exception){
                println(e.toString());
            }
            return pcReturnValue;
        }
}