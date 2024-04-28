import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
  procedimento =[
    {
      imagem :      "/assets/harmonizacao.jpeg",
      nome :      "Harmonização Corporal.",
      descricao:  "Conteúdo sobre o procedimento de Harmonização Corporal."
    },
    {
      imagem :      "/assets/fio-pdo.jpeg",
      nome :      "Fios de PDO.",
      descricao:  "Conteúdo sobre o procedimento de Fios de PDO."
    },
    {
      imagem :      "/assets/bio-colageno.jpg",
      nome :      "Bioestimulador de Colágeno..",
      descricao:  "Conteúdo sobre o procedimento de Bio-Colágeno."
    },
  ]
procedimentos: any;
}
