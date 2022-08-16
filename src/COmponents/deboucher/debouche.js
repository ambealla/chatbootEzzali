import React from 'react'
import "./debouche.scss"


export const Metier = (props) => {
    return (
        <div  className="col-md">
            <div className=" card ">
                <div className="card-body text-center">
                    <div className="h1 mb-3">
                        <img className="image" src={props.src} height={200} width='200px' />
                    </div>
                    <h3 className="card-title mb-3">{props.nameMetier}</h3>
                    <p className="card-text">
                        {props.Description}
                    </p>
                    <a href={props.site} className="btn btn-danger">Read More</a>
                </div>
            </div>
        </div>
    )
}

function Debouchement() {
    const imageurl = ["https://thumbs.dreamstime.com/b/ing%C3%A9nieur-de-transport-44017857.jpg", "https://www.adealis-amiconseils.com/wp-content/uploads/2019/06/documentation-systeme-dinformation-pourquoi-est-ce-indispensable-1080x675.jpg", "https://f.hellowork.com/obs-static-images/seo/ObsJob/analyste-de-credits.jpg"]
    const metier1 = 'Les métiers du transport';
    const description1 = <div><ul><li>Gestionnaire de flotte de camions</li><li>Responsable du planning</li></ul>		</div>;
    const site1 = '#';
    const metier2 = "Les métiers des systèmes d’information";
    const description2 = <div><ul><li>Gestionnaire d’un projet SI<br/>ERP : responsable technique<br/>ERP : responsable fonctionnel</li><li>Business analyst<br/>IT operations analytics</li></ul>		</div>;
   
    const site2 = '#';
    const metier3 = 'Les métiers de la logistique de soutien';
    const description3 = <div> <ul><li>Analystes de fiabilité,</li>
    <li>Logisticiens opérationnels</li></ul>
    </div>;
    const site3 = '#';
/* const imageurl = ["https://thumbs.dreamstime.com/b/ing%C3%A9nieur-de-transport-44017857.jpg", "https://www.adealis-amiconseils.com/wp-content/uploads/2019/06/documentation-systeme-dinformation-pourquoi-est-ce-indispensable-1080x675.jpg", "https://f.hellowork.com/obs-static-images/seo/ObsJob/analyste-de-credits.jpg"]
    const metier1 = 'Les métiers du transport';
    const description1 = '- Gestionnaire de flotte de camions - Responsable du planning';
    const site1 = '#';
    const metier2 = "Les métiers des systèmes d’information";
    const description2 = ' - Gestionnaire d’un projet SI - ERP : responsable technique - ERP : responsable fonctionnel - Business analyst - IT operations analytics';
    const site2 = '#';
    const metier3 = 'Les métiers de la logistique de soutien';
    const description3 = '- Analystes de fiabilité,\n - Logisticiens opérationnels';
    const site3 = '#'; */

    return (
        <div id='#DEBOUCHE' class="p-3">
            
            <div className="container metier">
           <div className='TITLE'>
                <p className='title'>Métier {"&&"} Débouchement</p>
            </div>
                <div class="row text-center g-4">
                    <Metier nameMetier={metier1} Description={description1} site={site1} src={imageurl[0]} />
                    <Metier nameMetier={metier2} Description={description2} site={site2} src={imageurl[1]} />
                    <Metier nameMetier={metier3} Description={description3} site={site3} src={imageurl[2]} />

                </div>
            </div>
        </div>
    )
}

export default Debouchement
