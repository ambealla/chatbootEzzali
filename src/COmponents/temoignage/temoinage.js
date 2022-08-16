import React,{useState,useEffect} from 'react';
import "./temoinage.css"
import users from './temoi.json'



function Temoinage() {
  
    
    return (
      <div className="container metier" >
          <div className="row">
       {
         users && users.length>0 && users.map((item)=><Person image={item.url} personName={item.name} personAdress={item.country } persnTemoin={item.body}   />)
       }
      </div></div>
    );
}




const images=[]
const Names=[]
const personAdress=[]
const persnTemoin=[]



export const Person = (props) => {
  return (
    <div class="_12to336 rc-SocialProofItemRedesign col-md-4">
            <div class="_c6z6zf">
                <div class="_1v521c5">
                    <div class="_kjyntg">
                        <div class="lazyload-wrapper">
                            <img className='img1' src={props.image} alt='picture' height="202px" width="202px"/>
                        </div>
                    </div>
                </div>
                <h3 class="_z1d0pu">{props.personName}</h3>
                <div class="_cz6mzg"></div>
                <div class="_9gw1bj">{props.personAdress}</div>
                <div class="_1xralgf"></div>
                <div class="rc-Markdown styled _1mbr0ee">{props.persnTemoin}</div>
        </div>
        </div>
  )
}


export default Temoinage