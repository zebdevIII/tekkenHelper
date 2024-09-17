package com.zvg3.tekkennotes.Services
import com.zvg3.tekkennotes.DataModels.playerCharacter
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
        fun getAllPlayerCharacters(): List<playerCharacter> {
           return playerCharacterRepository.findAll() as ArrayList<playerCharacter>;
        }

        fun getPlayerCharacterByID(userID: Long): Optional<playerCharacter> {
            return playerCharacterRepository.findById(userID);
        }

}