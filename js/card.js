const card = (info) => {
    return `
    <div class="card mx-auto mb-5 shadow-lg" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${info.image.url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${info.biography['full-name']}</h5>
                    <p class="card-text">Conexiones: ${info.connections['group-affiliation']}</p>
                    <p class="card-text">Publicado por: ${info.biography.publisher}</p>
                    <hr>
                    <p class="card-text">Ocupación: ${info.work.occupation}</p>
                    <hr>
                    <p class="card-text">Primera aparición: ${info.biography['first-appearance']}</p>
                    <hr>
                    <p class="card-text">Altura: ${info.appearance.height['1']}</p>
                    <hr>
                    <p class="card-text">Peso: ${info.appearance.weight['1']}</p>
                    <hr>
                    <p class="card-text">Alianzas: ${info.biography.aliases}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

const showCard = (info) => {
    $('#heroInfo').html(card(info));
}