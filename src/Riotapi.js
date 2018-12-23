import React, { Component } from 'react';
import './index.css';
import Data from './matches1.json';

class Riotapi extends Component{
    constructor(props){
        super(props);

        this.state = {
            Array: []
        }
    }

    render(){
/*
        const Test = {
            "matches": [
                {
                    "gameId":2585563902,
                    "platformId":"NA1",
                    "gameCreation":1504029097863,
                    "gameDuration":3509
                }
            ]
        }
*/

        var i = 1;
        return(
            <div>
                <h1>Riot Api</h1>
                <table>
                    <tbody>
                    <tr>
                        <th>Nr</th>
                        <th>Game Id</th>
                        <th>Platform Id</th>
                        <th>game Creation</th>
                        <th>game Duration</th>
                        <th>queue Id</th>
                        <th>map Id</th>
                        <th>season Id</th>
                        <th>game Version</th>
                        <th>game Mode</th>
                        <th>game Type</th>
                        <th>Teams - team Id</th>
                        <th>win</th>
                        <th>firstBlood</th>
                        <th>firstTower</th>
                        <th>first Inhibitor</th>
                        <th>first Baron</th>
                        <th>first Dragon</th>
                        <th>first RiftHerald</th>
                        <th>tower Kills</th>
                        <th>inhibitor Kills</th>
                        <th>baron Kills</th>
                        <th>dragon Kills</th>
                        <th>vilemaw Kills</th>
                        <th>riftHerald Kills</th>
                        <th>dominion VictoryScore</th>
                        <th>BANS - champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>

                        <th>Teams - team Id</th>
                        <th>win</th>
                        <th>firstBlood</th>
                        <th>firstTower</th>
                        <th>first Inhibitor</th>
                        <th>first Baron</th>
                        <th>first Dragon</th>
                        <th>first RiftHerald</th>
                        <th>tower Kills</th>
                        <th>inhibitor Kills</th>
                        <th>baron Kills</th>
                        <th>dragon Kills</th>
                        <th>vilemaw Kills</th>
                        <th>riftHerald Kills</th>
                        <th>dominion VictoryScore</th>
                        <th>BANS - champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>
                        <th>champion Id</th>
                        <th>pickTurn</th>
                        <th>insert next...</th>
                    </tr>
                    {Data.matches.map((data =>
                        <tr key={data.gameId}>
                            <td>{i++}</td>
                            <td>{data.gameId}</td> 
                            <td>{data.platformId}</td> 
                            <td>{data.gameCreation}</td> 
                            <td>{data.gameDuration}</td> 
                            <td>{data.queueId}</td> 
                            <td>{data.mapId}</td> 
                            <td>{data.seasonId}</td>  
                            <td>{data.gameVersion}</td>  
                            <td>{data.gameMode}</td>  
                            <td>{data.gameType}</td>
                            <td>{data.teams[0].teamId}</td> 
                            <td>{data.teams[0].win}</td> 
                            <td>{data.teams[0].firstBlood ? "true" : "false"}</td> 
                            <td>{data.teams[0].firstTower ? "true" : "false"}</td> 
                            <td>{data.teams[0].firstInhibitor ? "true" : "false"}</td> 
                            <td>{data.teams[0].firstBaron ? "true" : "false"}</td> 
                            <td>{data.teams[0].firstDragon ? "true" : "false"}</td>
                            <td>{data.teams[0].firstRiftHerald ? "true" : "false"}</td> 
                            <td>{data.teams[0].towerKills}</td> 
                            <td>{data.teams[0].inhibitorKills}</td> 
                            <td>{data.teams[0].baronKills}</td> 
                            <td>{data.teams[0].dragonKills}</td> 
                            <td>{data.teams[0].vilemawKills}</td>
                            <td>{data.teams[0].riftHeraldKills}</td> 
                            <td>{data.teams[0].dominionVictoryScore}</td> 
                            <td>{data.teams[0].bans[0].championId}</td> 
                            <td>{data.teams[0].bans[0].pickTurn}</td> 
                            <td>{data.teams[0].bans[1].championId}</td>
                            <td>{data.teams[0].bans[1].pickTurn}</td>
                            <td>{data.teams[0].bans[2].championId}</td> 
                            <td>{data.teams[0].bans[2].pickTurn}</td> 
                            <td>{data.teams[0].bans[3].championId}</td>
                            <td>{data.teams[0].bans[3].pickTurn}</td>
                            <td>{data.teams[0].bans[4].championId}</td> 
                            <td>{data.teams[0].bans[4].pickTurn}</td> 
                            
                            <td>{data.teams[1].teamId}</td> 
                            <td>{data.teams[1].win}</td> 
                            <td>{data.teams[1].firstBlood ? "true" : "false"}</td> 
                            <td>{data.teams[1].firstTower ? "true" : "false"}</td> 
                            <td>{data.teams[1].firstInhibitor ? "true" : "false"}</td> 
                            <td>{data.teams[1].firstBaron ? "true" : "false"}</td> 
                            <td>{data.teams[1].firstDragon ? "true" : "false"}</td>
                            <td>{data.teams[1].firstRiftHerald ? "true" : "false"}</td> 
                            <td>{data.teams[1].towerKills}</td> 
                            <td>{data.teams[1].inhibitorKills}</td> 
                            <td>{data.teams[1].baronKills}</td> 
                            <td>{data.teams[1].dragonKills}</td> 
                            <td>{data.teams[1].vilemawKills}</td>
                            <td>{data.teams[1].riftHeraldKills}</td> 
                            <td>{data.teams[1].dominionVictoryScore}</td> 
                            <td>{data.teams[1].bans[0].championId}</td> 
                            <td>{data.teams[1].bans[0].pickTurn}</td> 
                            <td>{data.teams[1].bans[1].championId}</td>
                            <td>{data.teams[1].bans[1].pickTurn}</td>
                            <td>{data.teams[1].bans[2].championId}</td> 
                            <td>{data.teams[1].bans[2].pickTurn}</td> 
                            <td>{data.teams[1].bans[3].championId}</td>
                            <td>{data.teams[1].bans[3].pickTurn}</td>
                            <td>{data.teams[1].bans[4].championId}</td> 
                            <td>{data.teams[1].bans[4].pickTurn}</td> 
                            <td>{}</td> 
                            <td>{}</td> 
                            <td>{}</td> 
                            <td>{}</td> 
                            <td>{}</td> 
                            <td>{}</td> 
                            <td>{}</td> 
                               
                        </tr>
                    ))}
                    </tbody>

                </table>

            </div>
        );
    }
}

export default Riotapi;