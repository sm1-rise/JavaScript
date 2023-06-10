function cadastrarArtista(nome, estiloMusical, diasSemana, diasSemana2) {
   let diasDisponiveis = [diasSemana, diasSemana2];
   
   let artista = {
     nome: nome,
     estiloMusical: estiloMusical,
     diasDisponiveis
   };
   
   console.log("Artista: " + artista.nome);
   console.log("Estilo = " + artista.estiloMusical);
   console.log("Agenda = " + artista.diasDisponiveis.join(", "));
 
   return artista;
 }
 
 let listaArtista = [];
 
 let artista1 = cadastrarArtista("Joaozinho", "Samba", "Segunda", "Quarta");
 listaArtista.push(artista1);
 
 let artista2 = cadastrarArtista("Klebinho dos teclados", "Forró", "Quarta", "Sexta");
 listaArtista.push(artista2);
 
 let artista3 = cadastrarArtista("Cleiton Rasta", "Reggae", "Sexta", "");
 listaArtista.push(artista3);
 
 console.log(listaArtista);

 function artistasSemana(diasDisponiveis) {
   console.log("Artistas disponíveis no dia " + diasDisponiveis + ":");
 
   let artistasDisponiveis = listaArtista.filter(function(artista) {
     return artista.diasDisponiveis.includes(diasDisponiveis);
   });
 
   artistasDisponiveis.forEach(function(artista) {
     console.log("Nome: " + artista.nome);
     console.log("Estilo: " + artista.estiloMusical);
     console.log("Dias disponíveis: " + artista.diasDisponiveis.join(", "));
     console.log("-----------------------");
   });
 }

artistasSemana("Quarta");
 