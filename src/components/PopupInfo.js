import React from 'react'
import picCoronavirus from '../assets/images/club/coronavirus.jpg';

class PopupInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
      showModal: 'show-modal',
    };
  }

  closeModal = () => {
    this.setState(() => ({showModal: ''}));
  };

  showModal = () => {
    this.setState(() => ({showModal: 'show-modal'}));
  };

  render() {

    return (
      <div id="popupInfo" className={`${this.state.showModal} modal`}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={this.closeModal}>&times;</span>
            Coronavirus - Covid-19
          </div>
          <div className="modal-body">
            Depuis le lundi 16 mars et cela jusqu{"'"}à nouvel ordre, toutes les activités du club en salle sont
            suspendues et fermées aux publics afin de limiter la propagation du virus.
            Restez en contact sur le groupe Facebook &nbsp;
            <a href="https://www.facebook.com/groups/1028797570612471/" className="icon fa-facebook alt">
              <span className="label">Facebook</span>
            </a><br/>
            Et retrouvez toutes les informations sur :
            <ul>
              <li><a href='https://www.gouvernement.fr/info-coronavirus' target='_blank'
                     rel="noopener noreferrer">https://www.gouvernement.fr/info-coronavirus</a></li>
              <li><a href='https://www.ffsavate.com/information-coronavirus.html' target='_blank'
                     rel="noopener noreferrer">https://www.ffsavate.com/information-coronavirus.html</a></li>
            </ul>

            <div className="center">
              <button onClick={this.closeModal} className="button special">Fermer</button>
              <br/><br/>
              <span className="image main">
                    <img src={picCoronavirus} alt="coronavirus"/>
                    </span>
            </div>

          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    )
  }
}

export default PopupInfo
