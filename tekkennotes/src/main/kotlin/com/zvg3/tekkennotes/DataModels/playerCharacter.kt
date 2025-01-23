package com.zvg3.tekkennotes.DataModels

import com.zvg3.tekkennotes.Controllers.characterController
import jakarta.persistence.*
import com.zvg3.tekkennotes.DataModels.Interfaces.CharacterInterface

@Entity
@Table(name = "player_chracter_data")
data class PlayerCharacter (
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long? = null,
    override var charId: Long = -1,
    override var userID: String = "",
    override var text: String = ""
): CharacterInterface {

}