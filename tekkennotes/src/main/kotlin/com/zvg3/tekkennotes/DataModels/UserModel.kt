package com.zvg3.tekkennotes.DataModels

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id


@Entity
data class UserModel (
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    var id: Long = -1,
    var userName: String = "",
    var password: String = "",
    var email: String = "",
) {}
