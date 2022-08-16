import React from 'react'
import './introduction.css'
export const Galery = () => {
  return (
    <div className='container metier'><h2 className='TITLE'>Conditions D’acces</h2>
		<div className='row '>
		<div className='video col-12  col-md-6'>
		<iframe width="100%" height="100%"  src="https://www.youtube.com/embed/HtMjS30Pw5U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		</div>
		<div className="col-12 col-md-6 p-5">
            
            <p className="lead ">
			–	Diplômes requis :
            </p>
            <p>
			<ul>
				<li>2 Années Préparatoires au Cycle Ingénieur (Spécialité :  MP, PSI, TSI)</li>
				<li>3 ans après Bac(fondamental) (Spécialité :  SMA, SMI)</li>
				<li>Licence en sciences et techniques (Spécialité :  Mathématiques appliqués, Informatique)</li>
				<li>Bachelor (Spécialité :  SMA, SMI)</li>
				<li>Années Préparatoires (Spécialité :  DEUG : SM ou SMI)</li>
				
			</ul>	


            </p>
            <a href="#" className="btn btn-danger mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>

		</div>
	
	</div>
	
  )
}

