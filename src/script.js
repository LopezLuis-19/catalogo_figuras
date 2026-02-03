// --- CONFIGURACIÓN ---
const MI_WHATSAPP = "51940739617"; 

const productos = [
    {
        id: 1,
        nombre: "Ruby Casual Wear Date Figure",
        precio: "50",
        fotos: ["src/img/figure_ruby_date 5.webp","src/img/figure_ruby_date 3.webp", "src/img/figure_ruby_date 4.webp","src/img/figure_ruby_date 2.webp","src/img/figure_ruby_date 1.webp" ],

        detalles: {
            marca: "Banpresto",
            tamaño: "18cm",
            serie: "Oshi no Ko",
            estado: "Abierto / Exhibido",
            condicion: "Impecable (Caja 9/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },
    {
        id: 2,
        nombre: "Kana Arima Casual Wear Date Figure",
        precio: "50",
        fotos: ["src/img/figure_ kana_arima_date 5.webp","src/img/figure_ kana_arima_date 2.webp","src/img/figure_ kana_arima_date 3.webp","src/img/figure_ kana_arima_date 1.webp","src/img/figure_ kana_arima_date 4.webp"],

        detalles: {
            marca: "Banpresto",
            tamaño: "18cm",
            serie: "Oshi no Ko",
            estado: "Abierto / Exhibido",
            condicion: "Impecable (Caja 9/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },
    {
        id: 3,
        nombre: "Mem-Cho Casual Wear Date Figure",
        precio: "50",
        fotos: ["src/img/figure_mencho_date 5.webp","src/img/figure_mencho_date 3.webp","src/img/figure_mencho_date 2.webp","src/img/figure_mencho_date 1.webp","src/img/figure_mencho_date 4.webp",],

        detalles: {
            marca: "Banpresto",
            tamaño: "18cm",
            serie: "Oshi no Ko",
            estado: "Abierto / Exhibido",
            condicion: "Impecable (Caja 9/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },
    {
        id: 4,
        nombre: "Ruby B-Komachi Figure",
        precio: "50",
        fotos: ["src/img/figure_ruby_idol 1.webp","src/img/figure_ruby_idol 4.webp","src/img/figure_ruby_idol 5.webp","src/img/figure_ruby_idol 2.webp","src/img/figure_ruby_idol 3.webp",],

        detalles: {
            marca: "Banpresto",
            tamaño: "18cm",
            serie: "Oshi no Ko",
            estado: "Abierto / Exhibido",
            condicion: "Impecable (Caja 9/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },
    {
        id: 5,
        nombre: "Mem-Cho B-Komachi Figure",
        precio: "45",
        fotos: ["src/img/figure_mencho_idol 1.webp","src/img/figure_mencho_idol 4.webp","src/img/figure_mencho_idol 5.webp","src/img/figure_mencho_idol 2.webp","src/img/figure_mencho_idol 3.webp"],

        detalles: {
            marca: "Banpresto",
            tamaño: "18cm",
            serie: "Oshi no Ko",
            estado: "Abierto / Exhibido",
            condicion: "Impecable (Caja 9/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },
    {
        id: 6,
        nombre: "Zenryoku Zoukei Figure Kana Arima B-Komachi ",
        precio: "50",
        fotos: ["src/img/figure_arima_kana_idol 1.webp","src/img/figure_arima_kana_idol 3.webp","src/img/figure_arima_kana_idol 4.webp","src/img/figure_arima_kana_idol 2.webp","src/img/figure_arima_kana_idol 5.webp"],

        detalles: {
            marca: "---",
            tamaño: "23cm",
            serie: "Oshi no Ko",
            estado: "Abierto / Exhibido",
            condicion: "Impecable (Caja 9/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },

    {
        id: 7,
        nombre: "Chisato Nishikigi - Chinese Style figure",
        precio: "55",
        fotos: ["src/img/figure_chisato_1.webp","src/img/figure_chisato_4.webp","src/img/figure_chisato_5.webp","src/img/figure_chisato_2.webp","src/img/figure_chisato_6.webp","src/img/figure_chisato_3.webp"],

        detalles: {
            marca: "SEGA-Luminasta",
            tamaño: "20cm",
            serie: "Lycoris Recoil",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 9/10)/figura(9/10): pequeño rayon en la base, ver ultima foto"
        },
        disponible: true,
        esReplica: false
    },

    {
        id: 8,
        nombre: "Yotsuba Nakano-Uniform ver. figure",
        precio: "55",
        fotos: ["src/img/figure_yotsuba_uniforme_ver_1.webp","src/img/figure_yotsuba_uniforme_ver_2.webp","src/img/figure_yotsuba_uniforme_ver_3.webp","src/img/figure_yotsuba_uniforme_ver_5.webp",],

        detalles: {
            marca: "Coreful",
            tamaño: "20cm",
            serie: "The Quintessential Quintuplets",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 9/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },
    {
        id: 9,
        nombre: "Nino Nakano -Uniform ver. figure",
        precio: "55",
        fotos: ["src/img/figure_nino_uniforme_ver_1.webp",
            "src/img/figure_nino_uniforme_ver_4.webp",
            "src/img/figure_nino_uniforme_ver_5.webp",
            "src/img/figure_nino_uniforme_ver_2.webp",
            "src/img/figure_nino_uniforme_ver_3.webp",
        ],

        detalles: {
            marca: "Coreful",
            tamaño: "20cm",
            serie: "The Quintessential Quintuplets",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 8/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },
    
    {
        id: 10,
        nombre: "Ichika Nakano - Luminasta",
        precio: "55",
        fotos: ["src/img/figure_ichika_luminasta_1.webp",
            "src/img/figure_ichika_luminasta_3.webp",
            "src/img/figure_ichika_luminasta_4.webp",
            "src/img/figure_ichika_luminasta_5.webp",
            "src/img/figure_ichika_luminasta_2.webp"
        ],

        detalles: {
            marca: "Sega-Luminasta",
            tamaño: "20cm",
            serie: "The Quintessential Quintuplets",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 10/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },

    {
        id: 11,
        nombre: "Nino Nakano - Luminasta",
        precio: "55",
        fotos: ["src/img/figure_nino_luminasta_1.webp",
            "src/img/figure_nino_luminasta_3.webp",
            "src/img/figure_nino_luminasta_4.webp",
            "src/img/figure_nino_luminasta_2.webp",
            "src/img/figure_nino_luminasta_5.webp"
        ],

        detalles: {
            marca: "Sega-Luminasta",
            tamaño: "20cm",
            serie: "The Quintessential Quintuplets",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 10/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },

    {
        id: 12,
        nombre: "Luminasta Marin Kitagawa - KiraKira After School ",
        precio: "50",
        fotos: ["src/img/figure_marin_luminasta_6.webp",
            "src/img/figure_marin_luminasta_4.webp",
            "src/img/figure_marin_luminasta_2.webp",
            "src/img/figure_marin_luminasta_3.webp",
            "src/img/figure_marin_luminasta_5.webp",
        ],

        detalles: {
            marca: "Sega-Luminasta",
            tamaño: "19cm",
            serie: "My Dress-Up Darling",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 9/10)/figura(8/10)- algo de perdida de color minimo entre las piernas"
        },
        disponible: true,
        esReplica: false
    },

    {
        id: 13,
        nombre: "Kyunties Ichika Nakano Figure",
        precio: "35",
        fotos: ["src/img/figure_ichika_kyunties_1.webp",
            "src/img/figure_ichika_kyunties_4.webp",
            "src/img/figure_ichika_kyunties_5.webp",
            "src/img/figure_ichika_kyunties_6.webp",
            "src/img/figure_ichika_kyunties_3.webp",
            "src/img/figure_ichika_kyunties_2.webp",

            
        ],

        detalles: {
            marca: "bandai",
            tamaño: "18cm",
            serie: "The Quintessential Quintuplets",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 9/10)/figura(9/10) algun detalle alrededor del cabello, ver ultima imagen"
        },
        disponible: true,
        esReplica: false
    },

    {
        id: 14,
        nombre: "Kyunties Ai Hayasaka",
        precio: "30",
        fotos: ["src/img/figure_kaguya_1.webp",
            "src/img/figure_kaguya_4.webp",
            "src/img/figure_kaguya_2.webp",
            "src/img/figure_kaguya_3.webp",
            "src/img/figure_kaguya_5.webp",

            
        ],

        detalles: {
            marca: "Bandai",
            tamaño: "18cm",
            serie: "Kaguya-Sama: Love is War",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 9/10)/figura(6/10) la base ha sido repadarada con pegamento, ver ultimas fotos"
        },
        disponible: true,
        esReplica: false
    },

    {
        id: 15,
        nombre: "Chizuru Mizuhara Figure",
        precio: "100",
        fotos: ["src/img/figure_chizuru_1.webp",
            "src/img/figure_chizuru_2.webp",
            "src/img/figure_chizuru_3.webp",
            "src/img/figure_chizuru_4.webp",
            "src/img/figure_chizuru_5.webp",

            

            
        ],

        detalles: {
            marca: "Bandai",
            tamaño: "23cm",
            serie: "Rent-A-Girlfriend (Kanojo, Okarishimasu)",
            estado: "Abierto / Exhibido",
            condicion: "(Caja 10/10)/figura(10/10)"
        },
        disponible: true,
        esReplica: false
    },

    //fguras de replica
    
    {
        id: 16,
        nombre: "Boa Hancock Action Figure PVC Model-22cm",
        precio: "35",
        fotos: ["src/img/replica_boa_hancock_4.webp",
            "src/img/replica_boa_hancock_2.webp",
            "src/img/replica_boa_hancock_5.webp",
            "src/img/replica_boa_hancock_1.webp",
            "src/img/replica_boa_hancock_3.webp",
        ],
        detalles: {
            marca: "replica",
            tamaño: "22cm",
            serie: "One piece",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(9/10), algunos detalles de pintura de fábrica)"

        },
        disponible: true,
        esReplica: true
    },

    {
        id: 17,
        nombre: "Nami Action Doll PVC GK Statue-26cm",
        precio: "65",
        fotos: ["src/img/replica_nami_2.webp",
            "src/img/replica_nami_3.webp",
            "src/img/replica_nami_5.webp",
            "src/img/replica_nami_4.webp",
            "src/img/replica_nami_6.webp",
            "src/img/replica_nami_1.webp",
        ],
        detalles: {
            marca: "replica",
            tamaño: "26cm",
            serie: "One piece",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(9/10), algunos detalles de pintura de fábrica, la bara vino con zonas sin pintar, ver ultima imagen)"

        },
        disponible: true,
        esReplica: true
    
    },

    {
        id: 18,
        nombre: "Yor Forger Figure PVC - 29.5cm",
        precio: "65",
        fotos: ["src/img/replica_yor_2.webp",
            "src/img/replica_yor_3.webp",
            "src/img/replica_yor_5.webp",
            "src/img/replica_yor_4.webp",
            "src/img/replica_yor_6.webp",
            "src/img/replica_yor_1.webp",

            
        ],
        detalles: {
            marca: "replica",
            tamaño: "29.5cm",
            serie: "Spy X Family",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(9/10),detalles de pintura de fábrica, alguna marcas de pintura alrededor de los hombros, ver penúltima foto"
        },
        disponible: true,
        esReplica: true
    
    },
   
    {
        id: 19,
        nombre: "OL-chan Action Figure Adult Model Doll Toy- 29cm",
        precio: "65",
        fotos: ["src/img/replica_ol_chan_1.webp",
            "src/img/replica_ol_chan_4.webp",
            "src/img/replica_ol_chan_5.webp",
            "src/img/replica_ol_chan_2.webp",
            "src/img/replica_ol_chan_3.webp",
            


            
        ],
        detalles: {
            marca: "replica",
            tamaño: "29cm",
            serie: "OL-chan Who Doesn't Want to Go to Work ",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(9/10),ningun detalle de pintura"
        },
        disponible: true,
        esReplica: true
    
    },
    {
        id: 20,
        nombre: "Marin Kitagawa Beach Figure PVC - 27.5cm",
        precio: "65",
        fotos: ["src/img/replica_marin_2.webp",
            "src/img/replica_marin_3.webp",
            "src/img/replica_marin_4.webp",
            "src/img/replica_marin_5.webp",
            "src/img/replica_marin_1.webp",
            "src/img/replica_marin_6.webp",
            

            
        ],
        detalles: {
            marca: "replica",
            tamaño: "27.5cm",
            serie: "My Dress-Up Darling",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(9/10),detalles de pintura alrededor del pecho"
        },
        disponible: true,
        esReplica: true
    
    },


    {
        id: 21,
        nombre: "Ogiwara Sayu  Decor Model Ornament 26cm",
        precio: "35",
        fotos: ["src/img/replica_sayu_3.webp",
            "src/img/replica_sayu_4.webp",
            "src/img/replica_sayu_5.webp",
            "src/img/replica_sayu_1.webp",
            "src/img/replica_sayu_6.webp",
            "src/img/replica_sayu_2.webp",
            

            
        ],
        detalles: {
            marca: "replica",
            tamaño: "26cm",
            serie: "Shaving. Then I Picked Up A High School",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(8/10),hay una pequeña rajadura alredor de la base, sin embargo, no impide que la figure se pose correctamente(ver ultima foto)"
        },
        disponible: true,
        esReplica: true
    
    },

    {
        id: 22,
        nombre: "Marin Kitagawa Swimsuit Version Standing PVC - 23cm",
        precio: "35",
        fotos: ["src/img/replica_marin_bikini_2.webp",
            "src/img/replica_marin_bikini_4.webp",
            "src/img/replica_marin_bikini_3.webp",
            "src/img/replica_marin_bikini_5.webp",
            "src/img/replica_marin_bikini_1.webp",
            "src/img/replica_marin_bikini_6.webp",
                   
        ],
        detalles: {
            marca: "replica",
            tamaño: "23cm",
            serie: "My Dress-Up Darling",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(9/10),sin detalle de pintura"
        },
        disponible: true,
        esReplica: true
    
    },

    {
        id: 23,
        nombre: "figuras variadas pvc x 3und",
        precio: "40",
        fotos: ["src/img/replica_variado.webp",
            "src/img/replica_variada_1.webp",
            "src/img/replica_variada_2.webp",
            "src/img/replica_variada_3.webp",
            "src/img/replica_variada_4.webp",
            "src/img/replica_variada_5.webp",
            "src/img/replica_variada_7.webp",
            "src/img/replica_variada_11.webp",
           
                   
        ],
        detalles: {
            marca: "replica",
            tamaño: "variado",
            serie: "variado",
            estado: "Abierto",
            condicion: "(Sin caja)/figura(7/10),estar figuras llegaron con alguna deformidad en el conector de la base, asi que se tuvo que usar pegamento para fijar a esta"
        },
        disponible: true,
        esReplica: true
    
    },


  
];

// --- FUNCIONES ---
const modalBS = new bootstrap.Modal(document.getElementById('figuraModal'));

function renderizar() {
    const ori = document.getElementById('contenedor-originales');
    const rep = document.getElementById('contenedor-replicas');

    // Limpiar contenedores por si acaso
    ori.innerHTML = "";
    rep.innerHTML = "";

    productos.forEach(p => {
        const col = document.createElement('div');
        col.className = "col";
        col.innerHTML = `
            <div class="card shadow-sm ${!p.disponible ? 'sold' : ''}" 
                 style="cursor: ${p.disponible ? 'pointer' : 'default'}"
                 onclick="${p.disponible ? `abrirDetalle(${p.id})` : ''}">
                <img src="${p.fotos[0]}" class="card-img-top" alt="${p.nombre}">
                <div class="card-body p-2 text-center">
                    <small class="text-muted d-block">${p.detalles.serie}</small>
                    <h6 class="card-title mb-1" style="font-size: 0.9rem;">${p.nombre}</h6>
                    <span class="badge ${p.disponible ? 'bg-success' : 'bg-secondary'} mb-1">
                        ${p.disponible ? 'S/ ' + p.precio : 'VENDIDO'}
                    </span>
                </div>
            </div>
        `;
        p.esReplica ? rep.appendChild(col) : ori.appendChild(col);
    });
}

function abrirDetalle(id) {
    const p = productos.find(x => x.id === id);
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <img src="${p.fotos[0]}" id="imgPrincipal" class="img-fluid rounded mb-2 w-100">
        <div class="thumb-container">
            ${p.fotos.map(f => `<img src="${f}" class="thumb-link" onclick="document.getElementById('imgPrincipal').src='${f}'">`).join('')}
        </div>
        <div class="mt-3 text-start">
            <ul class="list-unstyled small">
                <li><i class="fa-solid fa-tv me-2 text-muted"></i><strong>Serie:</strong> ${p.detalles.serie}</li>
                <li><i class="fa-solid fa-box me-2 text-muted"></i><strong>Marca:</strong> ${p.detalles.marca}</li>
                <li><i class="fa-solid fa-ruler-vertical me-2 text-muted"></i><strong>Tamaño:</strong> ${p.detalles.tamaño}</li>
                <li><i class="fa-solid fa-door-open me-2 text-muted"></i><strong>Estado:</strong> ${p.detalles.estado}</li>
                <li class="text-warning-emphasis bg-light p-2 rounded border-start border-warning border-3 mt-2">
                    <i class="fa-solid fa-circle-info me-2 text-warning"></i><strong>Detalles:</strong> ${p.detalles.condicion}
                </li>
            </ul>
            <h3 class="text-center text-primary fw-bold my-3">S/ ${p.precio}</h3>
            <a href="https://wa.me/${MI_WHATSAPP}?text=Hola! Me interesa ${p.nombre}. Vi que el precio es S/${p.precio} y el estado es ${p.detalles.estado}. ¿Podemos coordinar entrega en Ate antes de las 6:00 PM?" 
               target="_blank" class="btn btn-success w-100 fw-bold py-2">
               <i class="fa-brands fa-whatsapp me-2"></i>Consultar disponibilidad
            </a>
        </div>
    `;
    modalBS.show();
}

// Iniciar catálogo
document.addEventListener('DOMContentLoaded', renderizar);

renderizar();
