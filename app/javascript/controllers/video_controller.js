import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
 static targets = ["videoContainer", "videoWrapper"]
 static values = {
   chatroomId: Number,
   tokenUrl: String,
   username: String
 }

 // Créer une room qui accueillera la room Twilio et créer une liste de participants vide
 connect() {
   this.room = null;
   this.participants = new Map();
 }


 // Méthode pour déconnecter la video d'un user au click sur la croix
 disconnectVideo() {
   if (this.room) {
     this.#cleanVideoAndAudio()
     this.room.disconnect()
     this.room = null
     this.videoContainerTarget.classList.add("d-none")
     // Informer les autres participants
     this.room.on('participantDisconnected', participant => {
       this.#handleParticipantDisconnected(participant);
     });
   }
 }

 // Méthode pour rejoindre une room => lancée au click sur le logo caméra
 async joinRoom(event) {
   event.preventDefault();

   if (this.room) {
     this.disconnectVideo()
     return
   }

   // Retirer la class d-none au container qui va contenir les vidéos
   this.videoContainerTarget.classList.remove("d-none")

   try {

    // Demander les permissions au navigateur (audio / video)
     const stream = await navigator.mediaDevices.getUserMedia({
       video: true,
       audio: true
     });

     // Demander un token pour ce user
     const token = await this.fetchToken(this.usernameValue);
     // Assigner une room avec le token pour cette chatroom et ce user
     this.room = await Twilio.Video.connect(token, {
       name: `chatroom-${this.chatroomIdValue}`,
       tracks: stream.getTracks()
     });

     // Ajouter un user 'local' à cette room (current user)
     this.#handleLocalParticipant(this.room.localParticipant);

     // Ajouter tous les autres participants à cette room pour le current user
     this.room.participants.forEach(participant => {
       this.#handleParticipant(participant);
     });

     // Ecoute l'évenement d'un participant qui se connecte et le rajoute à la room
     this.room.on('participantConnected', participant => {
       this.#handleParticipant(participant);
     });

     // Ecoute l'évènement de déconnexion d'un participant à la room et le déconnecte
     this.room.on('participantDisconnected', participant => {
       this.#handleParticipantDisconnected(participant);
     });

     this.room.participants.forEach(participant => {
      participant.tracks.forEach(publication => {
        if (publication.isSubscribed) {
          const container = this.participants.get(participant.identity)?.container;
          if (container) {
            this.#attachTrack(publication.track, container, false);
          }
        }
      });
    })

   } catch (error) {
     console.error("Erreur:", error);
   }
 }

 // Méthode pour récupérer le token en faisant un fetch vers la route chatrooms/:id/token qui mène
 // vers le controller chatrooms à l'action token
 async fetchToken(username) {
   const csrfToken = document.querySelector("[name='csrf-token']").content;
   const response = await fetch(`${this.tokenUrlValue}?username=${username}`, {
     method: "POST",
     headers: {
       "X-CSRF-Token": csrfToken,
       "Content-Type": "application/json"
     },
     body: JSON.stringify({ username: this.usernameValue})
   });
   const data = await response.json();
   return data.token;
 }

 // Méthode utilisée plus haut pour connecter le current user à la room
  #handleLocalParticipant(participant) {
    const container = document.createElement('div');
    container.className = 'local-participant';
    this.videoWrapperTarget.appendChild(container);

    // Gère les track vidéos
    participant.videoTracks.forEach(publication => {
      const track = publication.track;
      if (track) {
        this.#attachTrack(track, container, true);
      }
    });

    // Gère les tracks audio
    participant.audioTracks.forEach(publication => {
      const track = publication.track;
      if (track) {
        this.#attachTrack(track, container, true);
      }
    });

    this.#attachParticipantName(participant, container)
  }

  // Méthode utilisée plus haut pour connecter tous les autres participants
  #handleParticipant(participant) {
    const container = document.createElement('div')
    container.className = 'remote-participant';
    this.videoWrapperTarget.appendChild(container)

    this.participants.set(participant.identity, { participant, container });

    // Gérer les tracks existantes (video / audio)
    participant.tracks.forEach(publication => {
      if (publication.isSubscribed) {
        this.#attachTrack(publication.track, container, false);
      }
    });

    // Écouter les nouveaux tracks
    participant.on('trackSubscribed', track => {
      this.#attachTrack(track, container, false);
    });

    participant.on('trackUnsubscribed', track => {
      track.detach().forEach(element => element.remove());
    });

    this.#attachParticipantName(participant, container)
  }

  // Permet d'attacher un track
  #attachTrack(track, container, isLocal) {
    const element = track.attach();
    if (track.kind === 'audio') {
      element.muted = isLocal;
      element.autoplay = true;
    }
    container.appendChild(element);
  }

  // Permet d'afficher le nom du user
  #attachParticipantName(participant, container) {
    const nameTag = document.createElement('p')
    nameTag.className = 'participant-name';
    nameTag.textContent = participant.identity
    container.appendChild(nameTag)
  }

  // Méthode utilisée plus haut pour déconnecter un user
  #handleParticipantDisconnected(participant) {
    const data = this.participants.get(participant.identity);
    if (data) {
      data.container.remove();
      this.participants.delete(participant.identity);
    }
  }

  // Supprimer le flux audio et vidéo, ainsi que leurs correspondances dans le DOM
  #cleanVideoAndAudio() {
    if (this.room.localParticipant) {
      this.room.localParticipant.tracks.forEach(publication => {
        if (publication.track) {
          publication.track.stop();
          publication.track.detach();
        }
      });
    }

    this.participants.forEach(({ participant, container }) => {
      participant.tracks.forEach(publication => {
        if (publication.track) {
          publication.track.detach();
        }
      });
      container.remove();
    });

    this.videoWrapperTarget.innerHTML = ''

  this.participants.clear();
    this.participants.clear();
  }
}
