import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["videoContainer"]
  static values = {
    chatroomId: Number,
    tokenUrl: String,
    username: String
  }

  connect() {
    this.room = null;
  };

  disconnectVideo() {
    if (this.room) {
      this.#cleanVideoAndAudio()
      this.room.disconnect()
      this.room = null
      this.videoContainerTarget.classList.add("d-none")
    }
  }

  async joinRoom(event) {
    event.preventDefault();

    if (this.room) {
      this.disconnectVideo()
      return
    }

    this.videoContainerTarget.classList.remove("d-none")

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      const token = await this.fetchToken(this.usernameValue);

      this.room = await Twilio.Video.connect(token, {
        name: `chatroom-${this.chatroomIdValue}`,
        tracks: stream.getTracks()
      });

      this.room.localParticipant.videoTracks.forEach(publication => {
        this.#createMedia(publication)
      });

      this.room.participants.forEach(this.handleParticipant.bind(this));
      this.room.on('participantConnected', this.handleParticipant.bind(this));
    } catch (error) {
      console.error("Erreur:", error);
    }
  }

  async fetchToken(username) {
    const csrfToken = document.querySelector("[name='csrf-token']").content;
    const response = await fetch(`${this.tokenUrlValue}?username=${username}`, {
      method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    return data.token;
  }

  handleParticipant(participant) {
    participant.tracks.forEach(publication => {
      this.#createMedia(publication)
    });
  }

  #createMedia(publication) {
    if (publication.track) {
      const element = publication.track.attach();
      if (publication.track.kind === 'audio') {
        element.muted = false;
        element.autoplay = true;
      }
      this.videoContainerTarget.appendChild(element);
    }
  }

  #cleanVideoAndAudio() {
    this.room.localParticipant.tracks.forEach(publication => {
      publication.track.stop();
    });

    this.room.participants.forEach(participant => {
      participant.tracks.forEach(publication => {
        if (publication.track) {
          publication.track.detach();
        }
      });
    })

    const videoElements = this.videoContainerTarget.querySelectorAll('video, audio');
    videoElements.forEach(element => element.remove());
  }
}
