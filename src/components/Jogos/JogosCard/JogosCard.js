import React from 'react'
import './JogosCard.css'

export const JogosCard = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div class="container">
                <div class="card">
                    <div class="imgBx">
                    <img src="https://playvalorant.com/static/agents-group-539f9e91c0ca94a88baafa239808180b.png"/>
                    </div>
                    <div class="contentBx">
                    <h2>Valorant</h2>
                    <div class="size">
                        <h3>Nota :</h3>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <h3 class="ano">2015</h3>
                    <a href="#">Add</a>
                    </div>
                </div>
                <div class="card">
                    <div class="imgBx">
                    <img src="https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_1280.png"/>
                    </div>
                    <div class="contentBx">
                    <h2>Valorant</h2>
                    <div class="size">
                        <h3>Nota :</h3>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <h3 class="ano">2015</h3>
                    <a href="#">Add</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
