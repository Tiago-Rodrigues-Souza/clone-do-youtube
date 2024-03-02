import React from 'react';
import ThumbCard from '../ThumbCard/ThumbCard';
function Main () {
    return ( 
        <main className='container'>
            <ThumbCard 
            image="https://midias.correiobraziliense.com.br/_midias/jpg/2021/04/14/548x377/1_foto_21_10_2020_12_19_54__2_-6610142.jpg"
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNofqaSUvZYBPIlQZc3wfpbhFK_C98RFbASw&usqp=CAU"
            title="Aprendendo a programar com a Rocketseat"
            nome="Rocketseat"
            />

           <ThumbCard 
            image="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/62fc10791e59237c44d51e52_Plataform-ignite.jpg"
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNofqaSUvZYBPIlQZc3wfpbhFK_C98RFbASw&usqp=CAU"
            title="Como aprender React em 2024"
            nome="Rocketseat"
            />


           <ThumbCard 
            image="https://www.rocketseat.com.br/evento-pratico/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fstar-lab%2Fevento-pratico%2Fhtml-css%2Fbanner-html-css.png&w=3840&q=100"
            logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgb6RxQXU0Q2u4OVpi99153h0vfQNLPeG6N2QE2nb0iu6oBSCnHRK29_Go4Bzgqivz70&usqp=CAU"
            title="Bora Codar 2024"
            nome="Maik Brito"
            />

            
                  
        </main>
     );
}

export default Main ;
