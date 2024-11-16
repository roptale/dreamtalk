export function initializeLandingAvatars() {
  const avatars = document.querySelectorAll('.landing-avatar');
  avatars.forEach((avatar, index) => {
    const isEven = index % 2 == 0;
    avatar.style.backgroundImage = `url('https://randomuser.me/api/portraits/${isEven ? "women" : "men"}/${index}.jpg')`;
    avatar.style.backgroundSize = "cover";
    avatar.style.backgroundRepeat = "none";
  });
}

if (window.location.pathname === "/landing") {
  document.addEventListener('DOMContentLoaded', initializeLandingAvatars);
}
