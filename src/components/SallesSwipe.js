import React, { Component } from 'react';
import querystring from 'querystring';
import ReactSwipe from 'react-swipe';

import Gallery from './Gallery'

const swipeOptions = {
    startSlide: 0,
    auto: 0,
    speed: 300,
    disableScroll: true,
    continuous: true,
};

class SallesSwipe extends React.Component {

    constructor(props) {
        super(props);
    }

    createPaneNodes(salles) {
        return salles.map((salle, i) => {
            return (
                <div key={i}>
                    <div className="item">

                        <h2>SALLE {salle.name.toUpperCase()}</h2>

                        <Gallery images={salle.images}/>

                        <p>
                            {salle.street}<br/>
                            {salle.zipCode} {salle.city}<br/>
                            {salle.transport}
                        </p>
                        <div className="map-responsive">
                            <iframe
                                src={salle.googleMaps}
                                width="600" height="450" frameBorder="0"
                                allowFullScreen></iframe>
                        </div>

                    </div>
                </div>
            );
        });
    }

    next() {
        this.reactSwipe.next();
    }

    prev() {
        this.reactSwipe.prev();
    }

    slide(index) {
        this.reactSwipe.slide(index);
    }

    render() {
        const {salles} = this.props;

        // generate slide panes
        this.paneNodes = this.createPaneNodes(salles);

        return (
            <div className="center">

                <div className="btns">
                    {salles.map((salle, index) =>
                        (<button key={salle.id} type="button" onClick={e => this.slide(index)}>{salle.name}</button>)
                    )}
                </div>

                <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="mySwipe"
                            swipeOptions={swipeOptions}>
                    {this.paneNodes}
                </ReactSwipe>

            </div>
        );
    }
}

export default SallesSwipe