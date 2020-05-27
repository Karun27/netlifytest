import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import Nav1 from './Nav';
import './App.css'
const Example = (props) => {
   
  return (
      <div>
          <Nav1 />
          <div class="container sauce" >  
          
<div class="row" >
     <div class="col align-self-center"> 
     <div class="row align"> 
     <div class="gray">
     <Card>
        <CardBody>

          <CardText> <p className="display-10 my-6 text-center text-muted">

The Mid-day Meal Scheme is a school meal program by the Government of India designed to better the nutritional standing of school-age children nationwide.The program supplies free lunches on working days for children in primary and upper primary classes in government, government aided, local body, Education Guarantee Scheme, and alternate innovative education centres, Madarsa and Maqtabs supported under Sarva Shiksha Abhiyan, and National Child Labour Project schools run by the ministry of labour. Serving 120,000,000 children in over 1,265,000 schools and Education Guarantee Scheme centres, it is the largest of its kind in the world.


</p>
</CardText>
        </CardBody>
      </Card>
         </div> 
         <div class="green">
      <Card>
        <CardBody>

          <CardText>
          <p className="display-10 my-6 text-center text-muted text-center">
          Artificial intelligence (AI) technologies open new horizons for organizations from different industries. With the help of AI, you can process huge sets of data at high speed, analyze visual, audio, and text content to extract specific features, and easily solve complex tasks that humans can’t.

With the rising popularity of AI, cloud service providers (CSPs) have started to offer services dedicated to specific tasks: detecting objects in video, recognizing faces of celebrities, turning speech into text. Some of these providers have even taken steps toward offering a more useful solution: an AI Platform as a Service (AI PaaS).
          </p>
          </CardText>
     

        </CardBody>
      </Card>
             </div> 
        
 </div>
    </div>
    </div>
   
    </div>
    </div>
    
      );
};

export default Example;