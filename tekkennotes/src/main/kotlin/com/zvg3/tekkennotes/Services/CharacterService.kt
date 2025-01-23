package com.zvg3.tekkennotes.Services
import com.zvg3.tekkennotes.DataModels.PlayerCharacter
import org.springframework.beans.factory.annotation.Autowired
import com.zvg3.tekkennotes.Repositories.PlayerCharacterRepository
import org.springframework.stereotype.Service
import java.util.*
import kotlin.collections.ArrayList

@Service
class CharacterService(
    @Autowired
    val playerCharacterRepository : PlayerCharacterRepository
    ){
        fun getAllPlayerCharacters(): List<PlayerCharacter> {
           return playerCharacterRepository.findAll() as ArrayList<PlayerCharacter>;
        }

        fun getPlayerCharacterByID(userID: Long): Optional<PlayerCharacter> {
            return playerCharacterRepository.findById(userID);
        }

}