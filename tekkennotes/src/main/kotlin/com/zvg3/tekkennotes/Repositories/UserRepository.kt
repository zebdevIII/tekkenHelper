package com.zvg3.tekkennotes.Repositories

import com.zvg3.tekkennotes.DataModels.UserModel
import org.springframework.data.repository.CrudRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(collectionResourceRel = "users", path = "users")
interface UserRepository : CrudRepository<UserModel, Long> {


}
