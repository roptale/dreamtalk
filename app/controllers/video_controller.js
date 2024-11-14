import { Controller } from "stimulus"
import TwilioVideo from "twilio-video"

export default class extends Controller {
  static targets = ["joinButton", "disconnectButton", "localVideoTrack", "remoteParticipants"]

  connect() {
    this.room = null; // Variable to store the video room session
  }

  async joinOrLeaveRoom(event) {
    event.preventDefault();

    if (this.room) {
      // If already connected, disconnect from the room
      this.disconnectCall();
    } else {
      // Otherwise, join the room
      const username = document.getElementById("username").value;
      const token = await this.fetchToken(username);

      TwilioVideo.connect(token, { video: true, audio: true }).then(room => {
        this.room = room;
        this.setupRoomEventListeners(room);
        this.showDisconnectButton(); // Show Disconnect button
        this.attachLocalVideo(room);
      });
    }
  }

  async fetchToken(username) {
    const response = await fetch(`/chatrooms/token?username=${username}`);
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
