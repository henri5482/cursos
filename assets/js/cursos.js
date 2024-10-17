let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Curso Canva ",
        foodimg: 'images/CANVA.webp',
        price: "S/10",
        type: "Diseño",
        des: "Curso completo de CANVA,  diseña en canva increibles piezas graficas para tus redes sociales  conviertete en experto del diseño grafico en canva, aprende a crear ilustraciones, banners, flayers, etc",
        youtubeLink:"https://drive.google.com/file/d/18a-e_zT5EgiHhTtu5SWjscsmknC-4w0R/view?usp=sharing",
        imagenes:"https://drive.google.com/drive/folders/15a7ZGBXJMrNtSJguOhfy5jzaS8pAM9kt?usp=drive_link",
    },
    {
        FoodName: "Curso Completo de Photoshop",
        foodimg: 'images/photoshop.webp',
        price: "S/10",
        type: "Diseño",
        des: "Curso completo de PHOTOSHOP, mas de 125 lecciones organizados en 17 modulos para volverte experto, mas de 14 horas de contenido Mas de 80 recursos graficos",
        youtubeLink:"https://drive.google.com/file/d/16IN-n6sPlSQKgSdYxYVfHWOrtyhO0qUs/view?usp=sharing",
        imagenes:"https://drive.google.com/drive/folders/18h7jxTJeV5Pplh6WKnTKxlV81C28W_8i?usp=sharing",
    },
    {
        FoodName: "PACK de Archivos Editables",
        foodimg: 'images/packeditable.webp',
        price: "S/10",
        type: "Packs",
        des: "MEGA PACK de Archivos Editables, contiene   mas de +500GB de archivos editables,inclueye una gran variedad de archivos: logos, flayers , presentaciones,imagenes en alta calidad ,etc"
    },
    {
        FoodName: "Curso Completo de Ilustrator",
        foodimg: 'images/Ilustrator.webp',
        price: "S/10",
        type: "Diseño",
        des: "Curso completo de ILUSTRATOR, mas de 65 lecciones organizadas en 10 módulos, Lecciones en video claras y fáciles de entender,Más de 12 horas de contenido,Acceso de por vida.",
        youtubeLink:"https://drive.google.com/file/d/1ObTciEJvTJxNkpoUVAeBqe-VqOzf1CMA/view?usp=sharing",
        imagenes:"https://drive.google.com/drive/folders/19jw3EftTqnqPoAaNVJnShDh5v7IAniF7?usp=sharing",
    },
    {
        FoodName: "Curso de Figma + Diseño web",
        foodimg: 'images/Figma.webp',
        price: "S/10",
        type: "Diseño",
        des: "Curso Completo Figma + Diseño web, mas de 10 modulos con 70 clases, aprender diseño web con Figma en este curso 100% practico.Realiza un Proyecto impresionante para tu portafolio ",
        youtubeLink:"https://drive.google.com/file/d/18a-e_zT5EgiHhTtu5SWjscsmknC-4w0R/view?usp=sharing",
        imagenes:"https://drive.google.com/drive/folders/1BhjLfe5HBdUpjmlmH7Mxa4d-tjcmmHLl?usp=sharing",
        
    },
    {
        FoodName: "Curso completo de Premiere",
        foodimg: 'images/AdobePrimiere.webp',
        price: "S/10",
        type: "Diseño",
        des: "Curso Completo de Adobe Premiere, Aprende edición de video, realizar montajes y composiciones visuales, tiene mas 6 modulos con 56 clases  desde lo basico hasta que haga su primer video",
        youtubeLink:"https://drive.google.com/file/d/19RsEWMqFQZLaVYeZvbG9SIIaTV54moDc/view?usp=sharing",
        imagenes:"https://drive.google.com/drive/folders/1vtfuIiq3glGV7zlPdh-W-A4sY9Q_RfYg?usp=sharing",
    },
    {
        FoodName: "Pack de Formación Fotográfica",
        foodimg: 'images/Fotografia.webp',
        price: "S/15",
        type: "Diseño",
        des: "Super PACK de Fotografia, vienen 4 Cursos de diferentes especialidades de la fotografia, cada cursos contenine mas de 20 clases con duracion de 10min a 20min cada curso esta muy claro y bien hecho ",
        youtubeLink:"https://drive.google.com/file/d/1CShNQ4qpD0fFXlptmPp-ZJB9HEACnXqa/view?usp=sharing",
        imagenes:"https://drive.google.com/drive/folders/1hQ9iMG5xjUP3b5Tl2v8ycNdgLZWZxd_e?usp=sharing",
    },

    {
        FoodName: "MEGA PACK Diseño Grafico",
        foodimg: 'images/MEGAPACKDISEÑO.webp',
        price: "S/50",
        type: "Packs",
        des: "MEGA PACK Diseño Grafico,llevate 6 cursos completos de diseño: FIGMA, ILLUSTRATOR, PHOTSHOP,Adobe Premiere, CANVA, Corel Draw +500GB de archivos editables ,+51 libros de diseño ",
        youtubeLink:"https://drive.google.com/drive/u/3/folders/1Ox0YQXIfFybuEk9rjhUyJF_3N4wm62bI",
        imagenes:"https://drive.google.com/drive/u/3/folders/1Ox0YQXIfFybuEk9rjhUyJF_3N4wm62bI",
    },
    {
        FoodName: "MEGA PACK De IA ",
        foodimg: 'images/IA.webp',
        price: "S/50",  
        type: "Packs",
        des: "MEGA PACK de Inteligencia Artificial el pack contiene 7 cursos de diferente rubros para el trabajo y asi facilitar el trabajo de las personas gracias a la IA cada curso esta bien hecho  ",
        youtubeLink:"https://drive.google.com/file/d/1mgE6Z4bbR5Em_vnAtyVumnsuKqYpt2v1/view?usp=sharing",
        imagenes:"https://drive.google.com/drive/folders/1yLjQp61_mewwJolcSEy0wk4QBE77eCJm?usp=drive_link",
    },
]


const food = fooditem.map(item => {
    const listitem = ` <li class=" foodbox ${item.type}" >

    <div class="product-card" >
 

        <div class="card-banner img-holder" style="--width: 384; --height: 550;" >
        

            <img  src="${item.foodimg}"  width="384" height="500" loading="lazy" alt="Self Care "
            class="img-cover" style="cursor: pointer;" onclick="stopPropagation(event)">
          
            <div class="card-action"  onclick="stopPropagation(event)">
                    <button class="action-btn" aria-label="Comprar" title="Comprar" onclick="pagar()">
                        <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>
                    </button>
                    <a href="${item.youtubeLink}" target="_blank" class="action-btn" aria-label="ver video" title="ver video">
                    <ion-icon name="eye-outline" aria-hidden="true"></ion-icon>
                    </a>

                    <a href="${item.imagenes}" target="_blank" class="action-btn" aria-label="imagenes" title="imagenes">
                <ion-icon name="image-outline" aria-hidden="true"></ion-icon>
              </a>

                  </div>
                </div>
            <div class="card-content" onclick="stopPropagation(event)">
             <a href="pagar.html" style="text-decoration: none; color:black">
        <h3 class="h3">
        <h1 href="" class="card-title">${item.FoodName}</h1>
      </h3>
      </a>
      <data class="card-price" value="34">${item.price}</data>
                  <p class="des">${item.des}</p>
        </div>
                </div>
                </li>

               
          
    `;
foodContainer.innerHTML += listitem;
return listitem;
})
const foodCards = document.querySelectorAll('.food-menu-card');
foodCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar la propagación del evento
    });
});

const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('li');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'Todo')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Diseño'){
                if(box.classList.contains('Diseño'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Packs'){
                if(box.classList.contains('Packs'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Bebidas'){
                if(box.classList.contains('Bebidas'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Productos'){
                if(box.classList.contains('Productos'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})




addEventOnElem(filterBtn, "click", filter);



function orderNow(productName, productImage) {
    const waNumber = '51930134408'; // Número de WhatsApp de la empresa
    const waMessage = `Hola, me gustaría ordenar: *${productName}*`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
  
    // Enviar imagen dentro del mismo mensaje
    const waImageUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}&attach=${encodeURIComponent(productImage)}`;
    window.open(waImageUrl, '_blank');
  }


  foodContainer.addEventListener('click', (e) => {
    e.stopPropagation(); // Detiene la propagación del evento al hacer clic en el contenedor principal de alimentos
});
  function redirectToLink() {
    window.location.href = "index.html";
  }

  function pagar() {
    window.location.href = "pagar.html";
  }

  function stopPropagation(event) {
    event.stopPropagation(); // Detiene la propagación del evento de clic en el contenido de la tarjeta
}