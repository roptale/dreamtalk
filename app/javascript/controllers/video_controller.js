import { Controller } from "@hotwired/stimulus"
// import Video from "twilio-video"
// import TwilioVideo from "https://sdk.twilio.com/js/video/releases/2.25.0/twilio-video.min.js";
// export const connect = TwilioVideo.connect;
// const Video = require('twilio-video');

export default class extends Controller {
  static targets = ["joinButton", "disconnectButton", "localVideoTrack", "remoteParticipants"]
  connect() {
    this.room = null;
  };

  async joinOrLeaveRoom(event) {
    event.preventDefault();

    if (this.room) {
      // If already connected, disconnect from the room
      this.disconnectCall();
    } else {
      // Otherwise, join the room
      // const username = document.getElementById("username").value;
      const username = "Lise"
      const token = await this.fetchToken(username);
      Twilio.Video.connect(token, { video: "myroom" }).then(room => {
      console.log(room)
        this.room = room;
        this.setupRoomEventListeners(room);
        this.showDisconnectButton(); // Show Disconnect button
        this.attachLocalVideo(room);
      }).catch(error => console.log(error) )
      // Video.connect(token, {
      //   audio: true,
      //   name: 'my-room-name',
      //   video: { width: 640 }
      // }).then(room => {
      //   console.log(`Connected to Room: ${room.name}`);
      // });
    }
  }

  async fetchToken(username) {
    const csrfToken = document.querySelector("[name='csrf-token']").content
    const response = await fetch(`/token?username=${username}`, {method: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json"
      }});
    const data = await response.json();
    return data.token;
  }

  setupRoomEventListeners(room) {
    room.on("participantConnected", participant => {
      this.attachParticipantTracks(participant);
    });
    room.on("participantDisconnected", participant => {
      this.detachParticipantTracks(participant);
    });
    room.participants.forEach(participant => {
      this.attachParticipantTracks(participant);
    });
  }

  attachLocalVideo(room) {
    const localTrack = Array.from(room.localParticipant.videoTracks.values())[0].track;
    this.localVideoTrackTarget.appendChild(localTrack.attach());
  }

  attachParticipantTracks(participant) {
    participant.tracks.forEach(publication => {
      if (publication.isSubscribed) {
        this.remoteParticipantsTarget.appendChild(publication.track.attach());
      }
    });
  }

  detachParticipantTracks(participant) {
    participant.tracks.forEach(publication => {
      if (publication.track) {
        publication.track.detach().forEach(element => element.remove());
      }
    });
  }

  disconnectCall() {
    if (this.room) {
      this.room.disconnect(); // Disconnect from the room
      this.room = null;
      this.hideDisconnectButton(); // Hide Disconnect button
      this.clearVideoTracks();
    }
  }

  showDisconnectButton() {
    this.joinButtonTarget.style.display = "none";
    this.disconnectButtonTarget.style.display = "block";
  }

  hideDisconnectButton() {
    this.joinButtonTarget.style.display = "block";
    this.disconnectButtonTarget.style.display = "none";
  }

  clearVideoTracks() {
    this.localVideoTrackTarget.innerHTML = "";
    this.remoteParticipantsTarget.innerHTML = "";
  }
}
