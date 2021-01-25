
import React from 'react';
import image from '../../assets/images/v2.png'
import './style.css'

const Sobre = () => {

    return (
        <container className="container__sobre">
            <div className="sobre1">
                <div className="title__sobre1">Über den Autor</div>
                <div className="traco1"></div>
                <div className="sobre__info">
                    <p className="sobre__text1">
                    <div className='sobre__image2'>
                        <span class="helper"></span>
                        <img src={image} alt="Imagem da 7sight" /> 
                    </div>
                    Victor Rollhausen ist Visionär aus Leidenschaft. Schon in den 80er Jahren initiierte und
                    beriet er erfolgreich viele ganzheitlich-spirituelle Firmen, Unternehmensgründer und
                    Freiberufler. Dabei lag und liegt ihm besonders am Herzen, dass Menschen ihren Gaben
                    und Talenten entsprechend ihre persönliche Lebens- und Seelenmission finden. Die sie
                    dann auch in ihrem Beruf oder in ihrem eigenen Unternehmen kreativ und innerlich erfüllt
                    verwirklichen können.<br/>
                    Aktuell begleitet Victor das sich entfaltende EARTH OASIS Projekt. Dies basiert auf einer
                    kraftvollen Vision, die für ihn im Dezember 1995 erstmals sichtbar und seitdem immer
                    „runder“ und vollständiger wurde. Jetzt, 25 Jahre später, manifestiert sich die NETZWERK
                    VISION in diesen drei Büchern. Victor freut sich bereits darauf, in dieser neuen
                    Schaffensphase Menschen mit Rat und Inspiration zur Seite zu stehen, die mutig und mit
                    Vertrauen in ihre innere Kraft und Schöpferweisheit die in ihnen schlummernden
                    Potenziale ausschöpfen wollen – sei es auf einer der drei Ebenen des entstehenden
                    Entfaltungsverbundes oder in anderer Mission.
                    </p>
                </div>
            </div>
        </container>
    );
    
};



export default Sobre;