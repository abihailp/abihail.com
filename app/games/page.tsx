'use client'
import { randomInt } from "node:crypto";
import React from "react";
import { useState, useEffect } from "react"
import { createRoot } from "react-dom/client";





export default function Game() {
const [gameStart, setGame] = useState(false);
const [score, scoreCount] = useState(0);
const [HUD, setHUD] = useState(false);
const [move, setMove] = useState(1);

function startGame() {
setGame(true);

}

  return (
<div id="body" className="flex px-5 py-5 mx-auto">
  <main>     
    {!gameStart && (
        <div id="titlescreen" className="text-center">
          
        <h2 className="text-xl font-bold">Road Jump</h2>
        <button className="my-100 bg-red-500 w-50 h-20" onClick={startGame}>Click Here To Start </button>
        </div>
          )}
        {gameStart && (<div id="game" className="game px-20 grid grid-cols-5 grid-rows-5 grid-gap-5 bg-gray-400 border-green-400 border-t-50 border-b-150 h-200 w-200">
          <button id="character" className="bg-white
           rounded-full h-20 w-20 z-999"></button><button id="lake" className="absolute bottom-33 left-140 mr-50 z-100 bg-cyan-300 w-200 h-22"></button><button className="absolute bottom-75 z-0 my-20 bg-yellow-300 w-50 h-10"></button><button className="absolute bottom-75 right-150 z-0 my-20  bg-yellow-300 w-50 h-10"></button><button id="enemy" className="enemy2 z-999 my-20 rounded-full bg-blue-300 w-25 h-25"></button>  <button className="absolute bottom-80 z-0 my-50 bg-yellow-300 w-50 h-10"></button> <button className="absolute top-65 z-0 bg-yellow-300 w-50 h-10"> </button> <button className="absolute z-0 my-15 bg-yellow-300 w-50 h-10"></button><button className="absolute right-150 z-0 my-15 bg-yellow-300 w-50 h-10"></button><button className="absolute bottom-80 right-150 z-0 my-50 z-0 bg-yellow-300 w-50 h-10"></button><button className="absolute top-65 right-150 z-0 bg-yellow-300 w-50 h-10"></button>
        {!HUD && (<div id="score" className="z-9999"><h1 id="yourscore"  className="font-bold text-3xl ">Your Score: {score}</h1></div>)} {HUD && (<div id="winningscreen" className="z-9999"><h1 className="font-bold text-3xl font-red-500">You Win!</h1></div>)}
</div>
        )}</main>
    </div>
  );
}


