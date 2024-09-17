package com.zvg3.tekkennotes.DataModels

import jakarta.persistence.*

@Entity
@Table(name = "player_chracter_data")
data class playerCharacter(
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long? = null,
    var playerCharacterId: Long = -1,
    var userID: String = "",
    var text: String = ""
) {}