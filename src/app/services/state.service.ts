import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  public levels = [{
    game: {
      title: '¿Te parece correcta esta acción?',
      questions: [
        {
          img: `assets/img/level-1-1.jpg`,
          response: `bad`
        },
        {
          img: `assets/img/level-1-2.jpeg`,
          response: `good`
        },
        {
          img: `assets/img/level-1-3.jpeg`,
          response: `good`
        },
      ]

    },

    name: '',
    questions: [
      'pregunta uno', 'pregunta 2', 'pregunta 3'
    ],
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K'],
    lectura: {
      titulo: 'lectura uno',
      texto: `texto lectura uno texto lectura unotexto lectura
       uno texto lectura uno
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno
       texto lectura uno texto lectura unotexto lectura uno texto lectura uno`,

      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoZhjoNxm7xuf7yRNTUPyMo4TJd6R7AMij8cens8m-K_voI9K',
      id: 1,
    },
    reflexion: {
      pregunta: 'reflexion 1?',
      texto: `texto reflexion uno texto reflexion uno texto reflexion uno texto reflexion uno v
      texto reflexion unotexto reflexion uno texto reflexion uno texto reflexion unotexto reflexion unotexto reflexion uno
      texto reflexion uno texto reflexion unotexto reflexion unotexto `,

    }
  }, {
    lectura: {
      texto: '',
      img: '',
      id: 1,
    },
    reflexion: {
      pregunta: '',
      texto: '',
    }
  }, {
    lectura: {
      texto: '',
      img: '',
      id: 1,
    },
    reflexion: {
      pregunta: '',
      texto: '',
    }
  }];
  public totalProgres: 0;

}
