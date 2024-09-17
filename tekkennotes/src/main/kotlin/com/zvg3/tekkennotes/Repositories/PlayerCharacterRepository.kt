package com.zvg3.tekkennotes.Repositories

import com.zvg3.tekkennotes.DataModels.playerCharacter
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository

import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "playercharacters", path = "playercharacters")
interface PlayerCharacterRepository : CrudRepository<playerCharacter, Long> {
}