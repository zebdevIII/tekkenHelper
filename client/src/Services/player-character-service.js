import React, { Component } from 'react';

export function getPlayerCharacter(userId) {
    return fetch('http://localhost:8080/player/character')
}
