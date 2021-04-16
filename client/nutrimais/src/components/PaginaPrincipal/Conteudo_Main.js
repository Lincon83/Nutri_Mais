
 import React from "react"
 import {Card,Image,Button} from "react-bootstrap"
 import Imagem from "../../assets/avatar.png"
 import Imagens from "../../assets/Elon.png"
 import evandro from "../../assets/Evandro.png"
 import Juliana from "../../assets/Juliana.png"
 
 export default function Conteudo_Main(){
     return(
        
        <>
<Card>

  <Card.Header>Próxima Consulta <br></br>
  A consulta irá iniciar em 7 dias
  </Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
        <div>
            <h6> 31/03/2021 as 10:30 </h6>
            </div>
      <div className="Avatar">
       <Image src={Imagem}/>
     </div>
        
      <div>

        <h2> Eliana Caus Sampaio</h2>
        <h6>Professora</h6>
      
      </div>
      <div> 
      <Button variant="success">Iniciar Consulta</Button>
      </div>

     </blockquote>
  </Card.Body>
</Card>
 

<Card>

<Card.Header>Próximas consultas <br></br>
Veja suas próximas consultas e seus próximos clientes
</Card.Header>
{/* <h6>Veja suas próximas consultas e seus próximos clientes</h6> */}
<div> 
    <Button variant="success">Cadastrar novas consultas +</Button>
    </div>
<Card.Body>
  <blockquote className="blockquote mb-0">
      <div>
        
          </div>
    <div className="Avatar">
     <Image src={Imagens}/>
   </div>
      
    <div>

      <h2> Elon Musk</h2>
      <h6>Empresário 38 anos</h6>
    
    </div>
    

   </blockquote>
</Card.Body>
</Card>

<Card>

<Card.Header></Card.Header>
<Card.Body>
  <blockquote className="blockquote mb-0">
      <div>
          
          </div>
    <div className="Avatar">
     <Image src={evandro}/>
   </div>
      
    <div>

      <h2> Evandro Guedes</h2>
      <h6>Engenheiro 45 anos</h6>
    
    </div>
    

   </blockquote>
</Card.Body>
</Card>



<Card>

<Card.Header></Card.Header>
<Card.Body>
  <blockquote className="blockquote mb-0">
      <div>
         
          </div>
    <div className="Avatar">
     <Image src={Juliana}/>
   </div>
      
    <div>

      <h2> Juliana Siqueira Cunha</h2>
      <h6>Analista de Sistemas 26 anos</h6>
    
    </div>
    

   </blockquote>
</Card.Body>
</Card>

         </>
     ) 
 }