export default ngModule => {
  require('./events.scss');

  ngModule.directive('events', function events($timeout) {
    return {
      template: require('./events.jade'),
      scope: {},
      controllerAs: 'events',
      controller: function eventsCtrl() {
        const imgUrl = '../core/img/';
        let pause = false;
        const timming = 6000;
        this.current = 0;
        this.info = {
          0: {
            img: 'd-events.png',
            title: 'Eventos',
            text: 'Crea toda clase de eventos en tu comunidad: celebra cumpleaños, organiza una feria de las pulgas o una pichanga. Cada usuario podrá confirmar asistencia a través de la app.',
          },
          1: {
            img: 'd-pets.png',
            title: 'Mascotas',
            text: 'Anúnciale a tus vecinos la pérdida de tu mascota, son los que más pueden ayudarte.',
          },
          2: {
            img: 'd-recomend.png',
            title: 'Recomendaciones',
            text: 'Si encontraste un buen lugar ¿por qué no compartirlo?. Conecta a tus vecinos con el barrio.',
          },
          3: {
            img: 'd-announ.png',
            title: 'Anuncios',
            text: 'Revive el mítico diario mural en la palma de tu mano. Las buenas ideas se mantienen.',
          },
          4: {
            img: 'd-carpooling.png',
            title: 'Car-pooling',
            text: 'Organízate para ir al trabajo compartiendo un auto. ¿O por qué no de vacaciones?',
          },
          5: {
            img: 'd-classified.png',
            title: 'Clasificados',
            text: 'Vende, cambia o compra. Los intercambios más cerca que nunca.',
          },
          6: {
            img: 'd-agenda.png',
            title: 'Agenda',
            text: 'Recomienda o encuentra el gásfiter que andabas buscando, deja tu comentario del jardinero o babysiter. Entre todos creamos contactos de confianza.',
          },
          7: {
            img: 'd-messages.png',
            title: 'Chat',
            text: 'Inicia una conversación con tu vecino o genera grupos para saber quién trae el carbón para el asadito de domingo.',
          },
        };
        const ojbSize = Object.keys(this.info).length;
        this.title = this.info[this.current].title;
        this.img = `${imgUrl}${this.info[this.current].img}`;
        this.text = this.info[this.current].text;
        this.pause = () => {
          pause = true;
        };
        this.unpause = () => {
          pause = false;
        };
        this.bgStyle = 'background-image:url("../core/img/bg-events.png")';
        this.device = '../core/img/d-events.png';
        this.img = `${imgUrl}${this.info[this.current].img}`;
        const rotate = () => {
          if (pause === false) {
            this.current++;
          }
          if ( ojbSize === this.current) {
            this.current = 0;
          }
          this.toSlide(this.current);
          $timeout(rotate, timming);
        };
        this.toSlide = (num) => {
          this.current = num;
          this.title = this.info[this.current].title;
          this.img = `${imgUrl}${this.info[this.current].img}`;
          this.text = this.info[this.current].text;
        };
        $timeout(rotate, timming);
      },
    };
  });
};
